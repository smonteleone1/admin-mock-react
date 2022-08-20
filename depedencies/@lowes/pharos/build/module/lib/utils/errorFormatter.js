"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("./formatters");
const mapping_json_1 = require("../config/mapping.json");
const errorTypeListForMessage = ['[object String]', '[object Number]'];
const populateEventErrorDetailsData = (formattedData, errorObject) => {
    const { target } = errorObject;
    const { src, nodeName, href, outerHTML, textContent, constructor: { name } = {} } = target || {};
    formattedData.message = nodeName ? `Failed to load ${name}` : '';
    formattedData.url = formatters_1.getDefaultFields(formattedData.url, (src || href));
    formattedData.type = formatters_1.getDefaultFields(formattedData.type, nodeName);
    formattedData.initiator = formatters_1.getDefaultFields(formattedData.initiator, (outerHTML || textContent));
};
const populateErrorDetailsData = (formattedData, errorObject) => {
    const { stack, message, name, fileName } = errorObject;
    formattedData.message = formatters_1.getDefaultFields(formattedData.message, message);
    formattedData.type = formatters_1.getDefaultFields(formattedData.type, name);
    formattedData.stackTrace = formatters_1.getDefaultFields(formattedData.stackTrace, stack);
    formattedData.url = formatters_1.getDefaultFields(formattedData.url, fileName);
};
const populateXHRData = (formattedData, errorObject, traceIdKey) => {
    const { status, statusText, responseType, pharosUrl, responseURL } = errorObject;
    formattedData.url = responseURL || pharosUrl;
    formattedData.message = statusText || formatters_1.getErrorMessage(status);
    formattedData.type = responseType ? `XMLHttpRequest-${responseType}` : 'XMLHttpRequest';
    formattedData.code = status;
    formattedData.traceId = traceIdKey ? formatters_1.getIdFromHeaders(errorObject.getAllResponseHeaders().split('\r\n'), traceIdKey) : '';
};
const populateErrorEventData = (formattedData, errorObject) => {
    const { message, type, filename, error, url } = errorObject;
    const { target } = errorObject;
    const { src, url: targetUrl } = target || {};
    formattedData.url = src || filename || targetUrl || url;
    formattedData.message = message;
    formattedData.type = type === 'error' ? 'script' : type;
    if (error) {
        if (Object.prototype.toString.call(error) === '[object Array]') {
            formattedData.stackTrace = JSON.stringify(error.map((eachError) => eachError.stack).filter(Boolean));
        }
        else {
            formattedData.stackTrace = error.stack;
        }
    }
};
const populatePromiseRejectionData = (formattedData, errorObject, errorListenerVariables) => {
    const { reason, type, promise } = errorObject;
    if (type === 'unhandledrejection') {
        errorListenerVariables.promiseMapCount += 1;
        formattedData.mapKey = errorListenerVariables.promiseMapCount;
        errorListenerVariables.promiseMap.set(promise, formattedData.mapKey);
    }
    else {
        formattedData.mapKey = errorListenerVariables.promiseMap.get(promise);
        errorListenerVariables.promiseMap.delete(promise);
    }
    if (typeof reason === 'object') {
        const { message, stack, src, url, href, request } = reason;
        if (typeof request === 'string') {
            formattedData.url = request;
        }
        else {
            const { responseUrl, url: apiUrl, status } = request || {};
            formattedData.url = responseUrl || apiUrl || src || href || url;
            formattedData.code = status;
        }
        formattedData.message = message || (Object.keys(reason).length !== 0 && JSON.stringify(reason)) || '';
        formattedData.stackTrace = stack;
    }
    else {
        formattedData.message = reason;
    }
    formattedData.type = type;
};
const populateGmapErrorData = (formattedData) => {
    formattedData.type = 'googlemapauth';
    formattedData.message = 'Google Map Authentication Error';
    formattedData.code = 401;
};
const populateConsoleErrorData = (formattedData, errorDetails, errorDetailsType) => {
    const { consoleArgs } = errorDetails;
    formattedData.type = errorDetailsType;
    formattedData.message = 'console Error';
    formattedData.stackTrace = JSON.stringify([...consoleArgs]);
};
const populateDefaultCaseErrorData = (formattedData, errorObject, traceIdKey, userDefined) => {
    const { url: apiUrl, status, statusText, message, stack: errorDetailsStack, type, error, reason, headers } = errorObject;
    const { stack } = error || {};
    const { stack: errorStack } = reason || {};
    formattedData.userDefined = userDefined;
    formattedData.url = formatters_1.getDefaultFields(formattedData.url, apiUrl);
    formattedData.message = formatters_1.getDefaultFields(formattedData.message, (message || statusText));
    formattedData.type = formatters_1.getDefaultFields(formattedData.type, type);
    formattedData.code = formatters_1.getDefaultFields(formattedData.code, status);
    formattedData.traceId = traceIdKey ? formatters_1.getIdFromHeaders(headers, traceIdKey) : '';
    formattedData.stackTrace = errorDetailsStack || stack || errorStack;
};
function getPayloadDataForError(errorDetails, errorDetailsObj = {}) {
    const errorDetailsObjectType = Object.prototype.toString.call(errorDetails);
    const { type: errorDetailsObjType, errorInitiator = 'pharos', url: errorDetailsObjUrl, errorListenerVariables, traceIdKey, userDefined = false } = errorDetailsObj;
    const formattedData = {
        userDefined: false,
        type: errorDetailsObjType || 'error',
        code: 0,
        message: '',
        mapKey: '',
        traceId: '',
        initiator: '',
        url: errorDetailsObjUrl,
        stackTrace: '',
        [mapping_json_1.default.errorInitiator]: errorInitiator
    };
    if (errorTypeListForMessage.includes(errorDetailsObjectType)) {
        formattedData.message = errorDetails.toString();
    }
    else {
        const { constructor: { name: errorDetailsConstName, prototype } = {}, errorDetailsType } = errorDetails;
        let errorDetailsName = errorDetailsConstName;
        if (prototype && prototype instanceof Error) {
            errorDetailsName = 'Error';
        }
        switch (errorDetailsType || errorDetailsName) {
            case 'Event': {
                populateEventErrorDetailsData(formattedData, errorDetails);
                break;
            }
            case 'Error': {
                populateErrorDetailsData(formattedData, errorDetails);
                break;
            }
            case 'XMLHttpRequest': {
                populateXHRData(formattedData, errorDetails, traceIdKey);
                break;
            }
            case 'ErrorEvent': {
                populateErrorEventData(formattedData, errorDetails);
                break;
            }
            case 'PromiseRejectionEvent': {
                populatePromiseRejectionData(formattedData, errorDetails, errorListenerVariables);
                break;
            }
            case 'gmap': {
                populateGmapErrorData(formattedData);
                break;
            }
            case 'consoleError': {
                populateConsoleErrorData(formattedData, errorDetails, errorDetailsType);
                break;
            }
            default: {
                populateDefaultCaseErrorData(formattedData, errorDetails, traceIdKey, userDefined);
                break;
            }
        }
    }
    if (formattedData.url) {
        const urlConstruct = new URL(formattedData.url, window.location.origin);
        formattedData.url = urlConstruct.href;
    }
    else {
        formattedData.url = window.location.href;
    }
    return formattedData;
}
exports.default = getPayloadDataForError;
