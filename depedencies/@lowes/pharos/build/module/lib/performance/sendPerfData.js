"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const onload_1 = require("../listeners/onload");
const getPerfData_1 = require("./getPerfData");
const timeToInteractive_1 = require("./timeToInteractive");
const initiateObserverInstances_1 = require("./initiateObserverInstances");
const supportedEntryTypesList = ['largest-contentful-paint', 'first-input', 'layout-shift'];
const isVitalSupported = () => {
    const { PerformanceObserver = {} } = window;
    const { supportedEntryTypes: entryTypes = [] } = PerformanceObserver;
    return (!!entryTypes
        && entryTypes.some((entry) => supportedEntryTypesList.includes(entry.toString())));
};
const sendPerfData = () => __awaiter(void 0, void 0, void 0, function* () {
    const vitalsSupported = isVitalSupported();
    initiateObserverInstances_1.default();
    if (vitalsSupported) {
        const getVitalsData = yield Promise.resolve().then(() => require('./getVitals'));
        getVitalsData.default();
    }
    onload_1.default().then(() => {
        const perfData = getPerfData_1.default();
        const payload = {
            performanceData: perfData
        };
        const tti = new timeToInteractive_1.default(window);
        tti.startSchedulingTimerTasks();
        getWorkerInstance_1.default.postMessage({
            dataType: 'performance',
            currentUrl: window.location.href,
            payload
        });
    });
});
exports.default = sendPerfData;
