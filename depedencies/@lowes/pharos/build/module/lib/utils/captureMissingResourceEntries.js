"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("./formatters");
const interceptors_1 = require("./interceptors");
function default_1(clientConfig) {
    const { captureMissingResourceEntries, onBeforeXHR = formatters_1.defaultCB } = clientConfig;
    const XHRMissingRequestCallback = captureMissingResourceEntries
        ? formatters_1.afterXHRMissingRequest
        : formatters_1.defaultCB;
    const fetchMissingRequestCallback = captureMissingResourceEntries
        ? formatters_1.afterFetchMissingRequest
        : formatters_1.defaultCB;
    interceptors_1.patchXMLHTTPRequest(formatters_1.defaultCB, XHRMissingRequestCallback, {}, onBeforeXHR);
    interceptors_1.patchFetch(formatters_1.defaultCB, fetchMissingRequestCallback);
}
exports.default = default_1;
