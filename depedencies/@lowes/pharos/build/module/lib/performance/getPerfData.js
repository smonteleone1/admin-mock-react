"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPerfData = () => {
    const navigationEntries = typeof (window.performance.getEntriesByType) === 'function' ? window.performance.getEntriesByType('navigation') : [];
    return {
        timing: window.performance.timing.toJSON(),
        navigationEntries: JSON.parse(JSON.stringify(navigationEntries))
    };
};
exports.default = getPerfData;
