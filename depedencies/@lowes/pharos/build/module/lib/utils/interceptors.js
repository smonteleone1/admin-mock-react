"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeResourceFetchingMutations = exports.patchFetch = exports.patchXMLHTTPRequest = void 0;
const formatters_1 = require("./formatters");
let uniqueId = 0;
const fetchCallbacks = {};
function attachXHRBeforeAndAfterCallback(beforeRequestCallback, afterRequestCallback, data) {
    XMLHttpRequest.beforeRequest = [{ callback: beforeRequestCallback, data }];
    XMLHttpRequest.afterRequest = [{ callback: afterRequestCallback, data }];
}
function attachOpenCallback() {
    const oldOpen = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function open(...args) {
        const requestUrl = args[1];
        this.pharosUrl = requestUrl;
        oldOpen.apply(this, args);
    };
}
function attachReadyStateChangeEventListener(startTimeStamp, afterRequest, requestId, args) {
    this.addEventListener('readystatechange', () => {
        if (this.readyState === 4) {
            const endTimeStamp = window.performance && window.performance.now();
            const interceptorsData = { startTimeStamp, endTimeStamp };
            for (let i = 0; i < afterRequest.length; i += 1) {
                afterRequest[i].callback(this, requestId, afterRequest[i].data, args, interceptorsData);
            }
        }
    });
}
function attachSendCallback(openCallback) {
    const oldSend = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function (...args) {
        const startTimeStamp = window.performance && window.performance.now();
        const requestId = uniqueId;
        uniqueId += 1;
        const { beforeRequest = [], afterRequest = [] } = XMLHttpRequest;
        for (let i = 0; i < beforeRequest.length; i += 1) {
            beforeRequest[i].callback(this, requestId, beforeRequest[i].data, args);
        }
        attachReadyStateChangeEventListener.call(this, startTimeStamp, afterRequest, requestId, args);
        openCallback(this);
        oldSend.apply(this, args);
    };
}
function patchXMLHTTPRequest(beforeRequestCallback, afterRequestCallback, data, openCallback = formatters_1.defaultCB) {
    if (XMLHttpRequest.beforeRequest) {
        XMLHttpRequest.beforeRequest.push({ callback: beforeRequestCallback, data });
        XMLHttpRequest.afterRequest.push({ callback: afterRequestCallback, data });
    }
    else {
        attachXHRBeforeAndAfterCallback(beforeRequestCallback, afterRequestCallback, data);
        attachOpenCallback();
        attachSendCallback(openCallback);
    }
}
exports.patchXMLHTTPRequest = patchXMLHTTPRequest;
function attachFetchRequest(args, oldFetch) {
    const startTimeStamp = window.performance && window.performance.now();
    return new Promise((resolve, reject) => {
        const requestId = uniqueId;
        uniqueId += 1;
        const fetchArgs = args;
        const url = formatters_1.getUrlForFetch(fetchArgs, window);
        const { beforeRequest = [], afterRequest = [] } = fetchCallbacks;
        for (let i = 0; i < beforeRequest.length; i += 1) {
            beforeRequest[i].callback(this, requestId, beforeRequest[i].data, args);
        }
        oldFetch.apply(this, fetchArgs).then((value) => {
            const endTimeStamp = window.performance && window.performance.now();
            const interceptorsData = {
                startTimeStamp, endTimeStamp, url, value
            };
            for (let i = 0; i < afterRequest.length; i += 1) {
                afterRequest[i].callback(this, requestId, afterRequest[i].data, args, interceptorsData);
            }
            resolve(value);
        }, (error) => {
            const endTimeStamp = window.performance && window.performance.now();
            const interceptorsData = {
                startTimeStamp, endTimeStamp, url, error
            };
            for (let i = 0; i < afterRequest.length; i += 1) {
                afterRequest[i].callback(this, requestId, afterRequest[i].data, args, interceptorsData);
            }
            reject(error);
        });
    });
}
function patchFetch(beforeRequestCallback, afterRequestCallback, data) {
    if (fetchCallbacks.beforeRequest) {
        fetchCallbacks.beforeRequest.push({ callback: beforeRequestCallback, data });
        fetchCallbacks.afterRequest.push({ callback: afterRequestCallback, data });
    }
    else {
        const oldFetch = fetch;
        fetch = function (...args) {
            return attachFetchRequest(args, oldFetch);
        };
        fetchCallbacks.beforeRequest = [{ callback: beforeRequestCallback, data }];
        fetchCallbacks.afterRequest = [{ callback: afterRequestCallback, data }];
    }
}
exports.patchFetch = patchFetch;
const requestCreatingNodeNames = ['img', 'script', 'iframe', 'link', 'audio', 'video', 'source'];
function subtreeContainsNodeName(nodes, nodeNames) {
    if (nodes) {
        for (const node of nodes) {
            if (nodeNames.includes(node.nodeName.toLowerCase())
                || subtreeContainsNodeName(node.children, nodeNames)) {
                return true;
            }
        }
        return false;
    }
    return false;
}
function observeResourceFetchingMutations(callback) {
    const mutationObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList'
                && subtreeContainsNodeName(mutation.addedNodes, requestCreatingNodeNames)) {
                callback(mutation);
            }
            if (mutation.type === 'attributes'
                && requestCreatingNodeNames.includes(mutation.target.tagName.toLowerCase())) {
                callback(mutation);
            }
        }
    });
    mutationObserver.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['href', 'src']
    });
    return mutationObserver;
}
exports.observeResourceFetchingMutations = observeResourceFetchingMutations;
