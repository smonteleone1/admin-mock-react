"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultFields = exports.sendBeaconDataWithOnBefore = exports.computeFirstConsistentlyInteractive = exports.defaultCB = exports.afterXHRMissingRequest = exports.afterFetchMissingRequest = exports.checkErrorAuthenticity = exports.checkUserAgentAuthenticity = exports.getUid = exports.isTokenPresent = exports.getTimeStamp = exports.configureWrapper = exports.getErrorMessage = exports.getPharosUrl = exports.getThreshold = exports.getUrlForFetch = exports.getIdFromHeaders = exports.getPageName = exports.getRequestTypeForLink = exports.getEntryTypeForOtherInitiatorTypes = exports.getRequestTypeForOtherInitiatorTypes = exports.populateCountData = exports.isAnalyticsApi = exports.getEntryTypeForCss = exports.calculateFirstPaint = exports.populatePageMetrics = exports.isObjectEmpty = exports.transformPerfData = exports.getEntryTypeForLink = void 0;
const apiEndpoints_1 = require("../apiEndpoints");
const configureFlag_1 = require("../store/configureFlag");
const eventHandler_1 = require("./eventHandler");
const obsEntry_json_1 = require("../config/obsEntry.json");
const configCallbacks_1 = require("../store/configCallbacks");
const constNumbers_json_1 = require("../config/constNumbers.json");
const populateCountData = (acc, key) => {
    if (!acc[key]) {
        acc[key] = 1;
    }
    else {
        acc[key] += 1;
    }
};
exports.populateCountData = populateCountData;
const transformPerfData = (persist, name) => {
    if (persist && persist > 0) {
        return {
            category: 'page',
            persist: parseFloat(persist.toFixed(3)),
            name
        };
    }
    return {};
};
exports.transformPerfData = transformPerfData;
const isObjectEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;
exports.isObjectEmpty = isObjectEmpty;
const populatePageMetrics = (metrics, data) => {
    if (data && !isObjectEmpty(data)) {
        metrics.push(data);
    }
    return null;
};
exports.populatePageMetrics = populatePageMetrics;
const getErrorMessage = (status) => {
    const defaultString = `.xhr statusCode ${status}`;
    let statusText = 'Unknown Error';
    if (status >= constNumbers_json_1.default['cl-er'].start && status <= constNumbers_json_1.default['cl-er'].end) {
        statusText = 'client error';
    }
    if (status >= constNumbers_json_1.default['s-er'].start && status <= constNumbers_json_1.default['s-er'].end) {
        statusText = 'server error';
    }
    if (status === constNumbers_json_1.default['cr-org'].start) {
        statusText = 'Illegal cross origin request';
    }
    return statusText + defaultString;
};
exports.getErrorMessage = getErrorMessage;
const getPharosUrl = (endpoint) => (endpoint ? `${endpoint}/pharos` : PHAROS_SERVICE);
exports.getPharosUrl = getPharosUrl;
const calculateFirstPaint = (responseStart, navigationStart, resourceEntries) => {
    let firstPaint = responseStart - navigationStart;
    for (let j = 0; j < resourceEntries.length; j += 1) {
        if (resourceEntries[j].initiatorType === 'script' || resourceEntries[j].initiatorType === 'link') {
            const requestEnd = resourceEntries[j].responseEnd;
            if (firstPaint === undefined || requestEnd > firstPaint) {
                firstPaint = requestEnd;
            }
        }
        else {
            break;
        }
    }
    return Math.max(firstPaint, 0);
};
exports.calculateFirstPaint = calculateFirstPaint;
const configureWrapper = (moduleExport) => function wrapper(...args) {
    if (configureFlag_1.isConfigured()) {
        return moduleExport.apply(this, args);
    }
    console.log('Not configured');
    return null;
};
exports.configureWrapper = configureWrapper;
const getPageName = (applicationUrl, pageName) => {
    if (typeof pageName === 'string') {
        return pageName;
    }
    if (pageName && applicationUrl && typeof pageName === 'object') {
        const { constructor: { name } = {} } = pageName;
        if (name === 'RegExp') {
            const matchedPatterns = applicationUrl.match(pageName);
            if (matchedPatterns && matchedPatterns.length) {
                return matchedPatterns[0];
            }
        }
        return '';
    }
    return undefined;
};
exports.getPageName = getPageName;
const getEntryTypeForImage = (name) => {
    const regex = /^.*(\/image\/.*|(\.(svg|png|ico|jpg|jpeg|jpe|jif|jfif|jfi|cur|bmp|gif|tiff|webp|avif|heic|heif|pdf)([?.]{1}.*)?))$/;
    if (regex.test(name)) {
        return 'image';
    }
    return 'other';
};
const getEntryTypeForCss = (name) => {
    let regex = /^.*(\.((woff([1-3]*)|ttf|otf|eot|fnt))([?.]{1}.*)?|\/fonts\..*)$/;
    if (regex.test(name)) {
        return 'font';
    }
    regex = /^.*\.css([?.]{1}.*)?$/;
    if (regex.test(name)) {
        return 'css';
    }
    return getEntryTypeForImage(name);
};
exports.getEntryTypeForCss = getEntryTypeForCss;
const isAnalyticsApi = (entry) => entry.includes('worker') || entry.includes(apiEndpoints_1.default);
exports.isAnalyticsApi = isAnalyticsApi;
const getEntryTypeForLink = (name) => {
    const regex = /^.*\.js([?.]{1}.*)?$/;
    if (regex.test(name)) {
        return 'js';
    }
    return getEntryTypeForCss(name);
};
exports.getEntryTypeForLink = getEntryTypeForLink;
const checkInstance = (name, className) => {
    try {
        return name instanceof className;
    }
    catch (error) {
        return false;
    }
};
const getUrlFromRequest = (fetchArgs, windowReference) => ('Request' in windowReference && checkInstance(fetchArgs[0], windowReference.Request) ? fetchArgs[0].url : String(fetchArgs[0]));
const getUrlForFetch = (fetchArgs, windowReference) => {
    if (fetchArgs) {
        return typeof fetchArgs[0] === 'string' ? fetchArgs[0]
            : getUrlFromRequest(fetchArgs, windowReference);
    }
    return fetchArgs;
};
exports.getUrlForFetch = getUrlForFetch;
const getRequestTypeForLink = (name) => {
    const entryType = getEntryTypeForLink(name);
    return ['font', 'image', 'icon'].includes(entryType) ? 'css' : entryType;
};
exports.getRequestTypeForLink = getRequestTypeForLink;
const getEntryTypeForHtml = (name) => {
    const regex = /^.*(\.htm|\.html)([?.]{1}.*)?$/;
    if (regex.test(name)) {
        return 'html';
    }
    return 'other';
};
const getEntryTypeForOtherInitiatorTypes = (name) => {
    const entryType = getEntryTypeForLink(name);
    return entryType !== 'other' ? entryType : getEntryTypeForHtml(name);
};
exports.getEntryTypeForOtherInitiatorTypes = getEntryTypeForOtherInitiatorTypes;
const getRequestTypeForOtherInitiatorTypes = (name) => {
    const entryType = getRequestTypeForLink(name);
    return entryType !== 'other' ? entryType : getEntryTypeForHtml(name);
};
exports.getRequestTypeForOtherInitiatorTypes = getRequestTypeForOtherInitiatorTypes;
const getThreshold = (threshold, defaultThreshold) => {
    if (typeof threshold === 'number' && threshold >= 0) {
        return threshold;
    }
    return defaultThreshold;
};
exports.getThreshold = getThreshold;
function getUserId() {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11 + -8e12 + -4e12 + -1e12).replace(/[018]/g, (c) => {
            const divideByValue = c ? 2 : c;
            return (Math.floor((crypto.getRandomValues(new Uint8Array(1))[0]) / divideByValue) % 16)
                .toString(16);
        });
    }
    const str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-yxxxxxxxxxxxx-4xxxxxxxxxxxx-xxxxxxxxxxxxx';
    return str.replace(/[xy]/g, (c) => {
        const r = Math.floor(Math.random() * 16);
        const v = c === 'x' ? r : Math.floor(r / 2);
        return v.toString(16);
    });
}
function getUid(uid, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    if (uid) {
        return { uid: `${uid}`, exDate: expires };
    }
    const uidGen = getUserId();
    return { uid: uidGen, exDate: expires };
}
exports.getUid = getUid;
const getIdFromHeaders = (headers, id) => {
    const headersType = Object.prototype.toString.call(headers);
    let headerId = {};
    if (headersType === '[object Headers]') {
        headerId = headers.has(id) ? headers.get(id) : '';
    }
    else if (headersType === '[object Object]') {
        headerId = Object.prototype.hasOwnProperty.call(headers, id) ? headers[id] : '';
    }
    else if (headersType === '[object Array]') {
        const headerEntry = headers.find((header) => header.includes(id.toLowerCase())) || '';
        headerId = (headerEntry.split(':')[1] || '').trim();
    }
    return headerId;
};
exports.getIdFromHeaders = getIdFromHeaders;
function getTimeStamp(performanceObject) {
    return performanceObject && performanceObject.timeOrigin
        ? performanceObject.timeOrigin + performanceObject.now()
        : Date.now();
}
exports.getTimeStamp = getTimeStamp;
function isTokenPresent(clientConfig) {
    return clientConfig && (clientConfig.token || clientConfig.applicationName);
}
exports.isTokenPresent = isTokenPresent;
function checkUserAgentAuthenticity(usAgent, userAgentList) {
    return userAgentList.length
        ? userAgentList.some((userAgent) => usAgent.includes(userAgent))
        : false;
}
exports.checkUserAgentAuthenticity = checkUserAgentAuthenticity;
function isHttpSecure(url) {
    return url.startsWith('https');
}
function getHostName(url) {
    let hostName = '';
    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        const [, , host] = match;
        hostName = host;
    }
    return hostName;
}
function areHostNamesIncluded(url, hostNames) {
    return hostNames.length
        ? hostNames.some((host) => host === getHostName(url))
        : false;
}
function checkErrorAuthenticity(payload, clientConfig) {
    const { url } = payload;
    let isAuthenticUrl = true;
    const { removeHttpInsecure = false, omittedHostNames = [], allowHostNames = [] } = clientConfig;
    if (url) {
        isAuthenticUrl = removeHttpInsecure ? isHttpSecure(url) : true;
        if (allowHostNames.length) {
            isAuthenticUrl = isAuthenticUrl
                ? areHostNamesIncluded(url, allowHostNames)
                : false;
        }
        else {
            isAuthenticUrl = isAuthenticUrl
                ? !areHostNamesIncluded(url, omittedHostNames)
                : false;
        }
    }
    return isAuthenticUrl;
}
exports.checkErrorAuthenticity = checkErrorAuthenticity;
function defaultCB() {
}
exports.defaultCB = defaultCB;
function afterXHRMissingRequest(requestInstance, requestId, data, args, interceptorsData) {
    const { startTimeStamp, endTimeStamp } = interceptorsData;
    eventHandler_1.default.emit(obsEntry_json_1.default.RS, [{
            name: requestInstance.pharosUrl,
            fetchStart: startTimeStamp,
            responseEnd: endTimeStamp,
            responseStart: startTimeStamp
        }]);
}
exports.afterXHRMissingRequest = afterXHRMissingRequest;
function afterFetchMissingRequest(requestInstance, requestId, data, args, interceptorsData) {
    const { startTimeStamp, endTimeStamp, url } = interceptorsData;
    eventHandler_1.default.emit(obsEntry_json_1.default.RS, [{
            name: url,
            fetchStart: startTimeStamp,
            responseEnd: endTimeStamp,
            responseStart: startTimeStamp
        }]);
}
exports.afterFetchMissingRequest = afterFetchMissingRequest;
function computeFirstConsistentlyInteractive(searchStart, minValue, lastKnownNetwork2Busy, currentTime, longTasks) {
    if ((currentTime - lastKnownNetwork2Busy) < 5000)
        return null;
    const maybeFCI = longTasks.length === 0
        ? searchStart : longTasks[longTasks.length - 1].end;
    if (currentTime - maybeFCI < 5000)
        return null;
    return Math.max(maybeFCI, minValue);
}
exports.computeFirstConsistentlyInteractive = computeFirstConsistentlyInteractive;
function sendBeaconDataWithOnBefore(url, payload, windowReference) {
    const modifiedPayload = configCallbacks_1.getCallbacks().onBeforeSendAnalyticsData(url, payload);
    const _a = modifiedPayload || {}, { token } = _a, restPayload = __rest(_a, ["token"]);
    const fetchUrl = token ? `${url}?key=${token}` : url;
    windowReference.navigator.sendBeacon(fetchUrl, JSON.stringify(restPayload));
}
exports.sendBeaconDataWithOnBefore = sendBeaconDataWithOnBefore;
function getDefaultFields(defaultField, fieldToBeAssigned) {
    return fieldToBeAssigned || defaultField;
}
exports.getDefaultFields = getDefaultFields;
