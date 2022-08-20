"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configure_1 = require("./methods/configure");
const trackEvent_1 = require("./methods/trackEvent");
const customEvents_1 = require("./methods/customEvents");
const pharosGlobalMethods_1 = require("./methods/pharosGlobalMethods");
if (isDev) {
    Promise.resolve().then(() => require('./validator/index.tsx'));
}
const pharosMethods = {
    configure: configure_1.default,
    trackError: pharosGlobalMethods_1.trackError,
    setUser: pharosGlobalMethods_1.setUser,
    setStore: pharosGlobalMethods_1.setStore,
    setRelease: pharosGlobalMethods_1.setRelease,
    setPageDetails: pharosGlobalMethods_1.setPageDetails,
    trackEvent: trackEvent_1.default,
    trackClick: customEvents_1.trackClick,
    trackNavigation: customEvents_1.trackNavigation
};
try {
    if (window && window.Pharos) {
        const pharosDataBeforeScript = window.Pharos;
        const pharosKeys = Object.keys(pharosDataBeforeScript);
        pharosKeys.forEach((key) => {
            const queue = pharosDataBeforeScript[key].q || [];
            queue.forEach((args) => {
                pharosMethods[key](...args);
            });
        });
    }
}
catch (error) {
    console.error('Error in pharos', error.message);
}
exports.default = pharosMethods;
