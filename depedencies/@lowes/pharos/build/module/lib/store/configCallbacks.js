"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCallbacks = exports.getCallbacks = void 0;
const apiEndpoints_1 = require("../apiEndpoints");
const defaultAnalyticsCB = (payload) => payload;
const defaultCB = (url, payload) => defaultAnalyticsCB(payload);
let callbacks = { onBeforeSendAnalyticsData: defaultCB };
exports.getCallbacks = () => callbacks;
exports.setCallbacks = (clientConfig) => {
    const { onBeforeXHR, onBeforeSendAnalyticsData: defaultSendAnalyticsData = defaultAnalyticsCB } = clientConfig;
    function onBeforeSendAnalyticsData(url, payload) {
        if (url.includes(apiEndpoints_1.default)) {
            return defaultSendAnalyticsData(payload);
        }
        return payload;
    }
    callbacks = { onBeforeXHR, onBeforeSendAnalyticsData };
};
