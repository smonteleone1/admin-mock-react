"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventHandler_1 = require("../utils/eventHandler");
const perfObserverInstance_1 = require("./perfObserverInstance");
const obsEntry_json_1 = require("../config/obsEntry.json");
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const calculateQuietWindow_1 = require("../utils/calculateQuietWindow");
const mapping_json_1 = require("../config/mapping.json");
const formatters_1 = require("../utils/formatters");
let resourceEntriesData = [];
let calcWindow = null;
const sendResourceDataToWorker = () => {
    getWorkerInstance_1.default.postMessage({
        dataType: 'performance',
        currentUrl: window.location.href,
        payload: {
            performanceData: { resourceEntries: resourceEntriesData }
        }
    });
    calcWindow.disable();
    resourceEntriesData = [];
};
const resourceCallback = (entries = []) => {
    const stringifiedEntries = JSON.parse(JSON.stringify(entries));
    if (stringifiedEntries && stringifiedEntries.length)
        resourceEntriesData = [...resourceEntriesData, ...stringifiedEntries];
    if (!calcWindow || calcWindow.isDisabled()) {
        calcWindow = new calculateQuietWindow_1.default(window, sendResourceDataToWorker);
        calcWindow.startSchedulingTimerTasks();
    }
};
const paintCallback = (entries = []) => {
    const firstPaintEntries = JSON.parse(JSON.stringify(entries));
    const firstPaintMetrics = [];
    firstPaintEntries.forEach((metric) => {
        firstPaintMetrics.push(formatters_1.transformPerfData(metric.startTime, mapping_json_1.default[metric.name]));
    });
    const payload = {
        metrics: firstPaintMetrics
    };
    getWorkerInstance_1.default.postMessage({
        dataType: 'performance',
        currentUrl: window.location.href,
        payload
    });
};
const initiateObserverInstance = () => {
    eventHandler_1.default.on(obsEntry_json_1.default.RS, resourceCallback);
    eventHandler_1.default.on(obsEntry_json_1.default.PT, paintCallback);
    perfObserverInstance_1.default(obsEntry_json_1.default.RS, true);
    perfObserverInstance_1.default(obsEntry_json_1.default.LT, true);
    perfObserverInstance_1.default(obsEntry_json_1.default.PT, true);
};
exports.default = initiateObserverInstance;
