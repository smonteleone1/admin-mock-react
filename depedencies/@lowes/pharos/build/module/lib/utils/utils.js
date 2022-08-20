"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScreenDimension = exports.isPathChanged = exports.hasTelemetryData = exports.setPageLandingPath = exports.isEntryTypeSupported = void 0;
let currentPath;
exports.isEntryTypeSupported = (entryType) => {
    const { PerformanceObserver = {} } = window;
    const { supportedEntryTypes = [] } = PerformanceObserver;
    return supportedEntryTypes && supportedEntryTypes.includes(entryType);
};
exports.setPageLandingPath = (path) => {
    currentPath = path || window.location.pathname;
};
exports.hasTelemetryData = (data = {}) => {
    const { resources = [], consoles = [], errors = [], customEvents = [], metrics = [] } = data;
    return resources.length || consoles.length || errors.length || customEvents.length || metrics.length;
};
exports.isPathChanged = () => {
    const pathChanged = currentPath !== window.location.pathname;
    if (pathChanged) {
        currentPath = window.location.pathname;
    }
    return pathChanged;
};
exports.getScreenDimension = () => {
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    return {
        width,
        height
    };
};
