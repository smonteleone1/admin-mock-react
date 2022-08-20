"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("../utils/formatters");
const interceptors_1 = require("../utils/interceptors");
const constNumbers_json_1 = require("../config/constNumbers.json");
const errorEventList_json_1 = require("../config/errorEventList.json");
const getResourceList_1 = require("../utils/getResourceList");
class ActivateErrorListener {
    constructor(errorListenerInstance, clientConfig) {
        this.errorListenerInstance = errorListenerInstance;
        this.clientConfig = clientConfig;
    }
    attachXHRErrorListener(omitErrorsList, traceIdKey) {
        if (!omitErrorsList.includes('xhr') && ('XMLHttpRequest' in window)) {
            const afterXHRRequest = (xhrInstance) => {
                if (xhrInstance.status) {
                    this.sendErrorAccordingToStatus(xhrInstance, {
                        traceIdKey
                    });
                }
                else {
                    this.errorListenerInstance(xhrInstance);
                }
            };
            interceptors_1.patchXMLHTTPRequest(formatters_1.defaultCB, afterXHRRequest);
        }
    }
    attachGoogleMapErrorListener(omitErrorsList) {
        const { errorListenerInstance } = this;
        if (!omitErrorsList.includes('googlemap')) {
            const oldGmAuthFailure = window.gm_authFailure;
            window.gm_authFailure = function authFailure(...args) {
                errorListenerInstance({ errorDetailsType: 'gmap' });
                oldGmAuthFailure && oldGmAuthFailure.apply(this, args);
            };
        }
    }
    attachMutationObserverErrorListener(omitErrorsList) {
        const resourceList = getResourceList_1.default(omitErrorsList);
        const { errorListenerInstance } = this;
        if (resourceList.length !== 0) {
            (function loadError() {
                function listenForLoadError(node) {
                    if (resourceList.indexOf(node.tagName) >= 0) {
                        const origOnError = node.onerror;
                        node.onerror = function onerror(evt) {
                            errorListenerInstance(evt, {});
                            if (origOnError) {
                                origOnError.call(node, evt);
                            }
                        };
                    }
                }
                const Observer = window.MutationObserver
                    || window.WebKitMutationObserver;
                if (!Observer) {
                    return;
                }
                new Observer(((mutations) => {
                    [].forEach.call(mutations, (mutation) => {
                        [].forEach.call(mutation.addedNodes, listenForLoadError);
                    });
                })).observe(window.document, {
                    childList: true,
                    subtree: true
                });
            }());
        }
    }
    attachFetchErrorListener(omitErrorsList, traceIdKey) {
        if (!omitErrorsList.includes('fetch') && ('fetch' in window)) {
            const afterFetchRequest = (_fetchInstance, _id, _data, _args, interceptorsData) => {
                const { value, error, url } = interceptorsData;
                const errorObj = { type: 'fetchError', url };
                if (value) {
                    this.sendErrorAccordingToStatus(value, Object.assign(Object.assign({}, errorObj), { traceIdKey }));
                }
                else {
                    this.errorListenerInstance(error, errorObj);
                }
            };
            interceptors_1.patchFetch(formatters_1.defaultCB, afterFetchRequest);
        }
    }
    addEventErrorListener(listener = window, eventErrorList = errorEventList_json_1.default) {
        eventErrorList.forEach((listItem) => {
            listener.addEventListener(listItem, (error) => {
                this.errorListenerInstance(error, {});
            });
        });
    }
    init() {
        const { omitErrors, omittedUserAgents = [] } = this.clientConfig;
        const userAgent = (window.navigator && window.navigator.userAgent) || '';
        const isUserAgentNotAllowed = formatters_1.checkUserAgentAuthenticity(userAgent, omittedUserAgents);
        if (!isUserAgentNotAllowed) {
            let omitErrorsList = [];
            const traceIdKey = this.clientConfig.traceIdKey || 'x-b3-traceid';
            if (Object.prototype.toString.call(omitErrors) === '[object Array]') {
                omitErrorsList = omitErrors;
            }
            this.addEventErrorListener();
            this.attachFetchErrorListener(omitErrorsList, traceIdKey);
            this.attachXHRErrorListener(omitErrorsList, traceIdKey);
            this.attachGoogleMapErrorListener(omitErrorsList);
            this.attachMutationObserverErrorListener(omitErrorsList);
        }
    }
    sendErrorAccordingToStatus(value, errorObj) {
        const { success: { start, end } = {} } = constNumbers_json_1.default;
        if (!(value.status >= start && value.status < end)) {
            this.errorListenerInstance(value, errorObj);
        }
    }
}
exports.default = ActivateErrorListener;
