"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackNavigation = exports.trackClick = void 0;
const trackEvent_1 = require("./trackEvent");
const trackClick = (eventName, payload) => {
    const attr = {
        eventName,
        data: payload.data,
        url: payload
    };
    trackEvent_1.default('click', attr);
};
exports.trackClick = trackClick;
const trackNavigation = (eventName, payload) => {
    const attr = {
        eventName,
        data: payload.data,
        url: payload.url
    };
    trackEvent_1.default('navigation', attr);
};
exports.trackNavigation = trackNavigation;
