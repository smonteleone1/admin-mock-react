"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const transformPerfData = (name, persist, componentPersist) => {
    if (persist) {
        return {
            category: 'component',
            persist: parseFloat(persist.toFixed(3)),
            componentPersist: parseFloat(componentPersist.toFixed(3)),
            name
        };
    }
    return {};
};
function postComponentPerfData(component) {
    const start = `${component}Start`;
    const end = `${component}End`;
    const componentPersist = `${component}Persist`;
    const startPoint = window.performance.getEntriesByName(start);
    const endPoint = window.performance.getEntriesByName(end);
    if (startPoint.length && endPoint.length) {
        window.performance.measure(component, undefined, start);
        window.performance.measure(componentPersist, start, end);
        window.performance.clearMarks(start);
        window.performance.clearMarks(end);
    }
    const totalTime = window.performance.getEntriesByName(component);
    const componentTime = window.performance.getEntriesByName(componentPersist);
    if (totalTime.length && componentTime.length) {
        window.performance.clearMeasures(component);
        window.performance.clearMeasures(componentPersist);
        const componentData = transformPerfData(totalTime[0].name, totalTime[0].duration, componentTime[0].duration);
        getWorkerInstance_1.default.postMessage({
            dataType: 'performance',
            currentUrl: window.location.href,
            payload: {
                metrics: [componentData]
            }
        });
    }
}
exports.default = postComponentPerfData;
