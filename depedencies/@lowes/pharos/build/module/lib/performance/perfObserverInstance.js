"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const eventHandler_1 = require("../utils/eventHandler");
const perfObserverInstance = (type, buffered) => {
    if (utils_1.isEntryTypeSupported(type)) {
        const perfObserver = new window.PerformanceObserver((list) => {
            if (list.getEntries()) {
                eventHandler_1.default.emit(type, list.getEntries());
            }
        });
        perfObserver.observe({
            type,
            buffered
        });
        return perfObserver;
    }
    return null;
};
exports.default = perfObserverInstance;
