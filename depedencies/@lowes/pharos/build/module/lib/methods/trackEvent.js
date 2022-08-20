"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("../utils/formatters");
const workerUtils_1 = require("../webWorker/workerUtils");
const timeToInteractive_1 = require("../performance/timeToInteractive");
const obsEntry_json_1 = require("../config/obsEntry.json");
const componentMethods_1 = require("./componentMethods");
const perfObserverInstance_1 = require("../performance/perfObserverInstance");
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const eventHandler_1 = require("../utils/eventHandler");
const utils_1 = require("../utils/utils");
let pageStart;
let startPath;
let loadTime;
let tti;
let isEventHandlerAttached = false;
const attachElementEventHandler = (callback, path) => {
    const entryObsCallback = (entries) => {
        let i = 0;
        do {
            const { identifier, startTime } = entries[i];
            if (identifier === 'page-load') {
                loadTime = callback(startTime, path);
            }
            i += 1;
        } while (!loadTime);
    };
    eventHandler_1.default.on(obsEntry_json_1.default.EL, entryObsCallback);
    perfObserverInstance_1.default(obsEntry_json_1.default.EL, true);
};
const calculateTTI = () => {
    if (tti) {
        tti.disable();
    }
    tti = new timeToInteractive_1.default(window, pageStart);
    tti.startSchedulingTimerTasks();
};
const createPayload = (data) => {
    const { pageLoad } = data;
    if (pageLoad) {
        calculateTTI();
        getWorkerInstance_1.default.postMessage({
            dataType: 'performance',
            currentUrl: window.location.href,
            payload: {
                metrics: [formatters_1.transformPerfData(pageLoad, 'DomComplete')]
            }
        });
    }
};
const getLoadTime = (endTime, path) => {
    if (pageStart && startPath === path) {
        const loadTimeTaken = endTime - pageStart;
        pageStart = null;
        return loadTimeTaken;
    }
    console.error('Call pageView:start event before calling pageview:end and pathname should match');
    return 0;
};
const attachPageViewStart = (attrs, performance, location) => {
    const path = attrs;
    pageStart = performance.now();
    startPath = path;
    if (!isEventHandlerAttached) {
        isEventHandlerAttached = true;
        attachElementEventHandler(getLoadTime, path);
    }
    workerUtils_1.default({
        app: {
            url: location.href
        },
        page: {
            name: '',
            title: ''
        }
    });
};
const attachPageViewEnd = (attrs, performance) => {
    const path = attrs;
    const pageEnd = performance.now();
    loadTime = getLoadTime(pageEnd, path);
    createPayload({ pageLoad: loadTime });
};
const defaultCase = (attrs, eventType) => {
    const customEvents = [];
    customEvents.push({
        name: eventType,
        data: attrs,
        timestamp: formatters_1.getTimeStamp(window.performance)
    });
    getWorkerInstance_1.default.postMessage({
        dataType: 'customEvents',
        currentUrl: window.location.href,
        payload: { customEvents }
    });
};
const track = (eventType, attrs) => {
    const { performance, location } = window || {};
    const type = eventType && eventType.toLowerCase();
    const pathCahnged = utils_1.isPathChanged();
    switch (type) {
        case 'pageview:start': {
            if (pathCahnged) {
                attachPageViewStart(attrs, performance, location);
            }
            break;
        }
        case 'pageview:end': {
            attachPageViewEnd(attrs, performance);
            break;
        }
        case 'componentload:start': {
            componentMethods_1.componentLoadStart(attrs);
            break;
        }
        case 'componentload:end': {
            componentMethods_1.componentLoadEnd(attrs);
            break;
        }
        default: {
            defaultCase(attrs, eventType);
        }
    }
};
exports.default = formatters_1.configureWrapper(track);
