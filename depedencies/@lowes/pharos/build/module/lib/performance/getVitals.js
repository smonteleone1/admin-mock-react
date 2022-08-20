"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web_vitals_1 = require("web-vitals");
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const formatters_1 = require("../utils/formatters");
const logWebVitalsMetrics = (data) => {
    const { name, value } = data;
    if (name && value) {
        getWorkerInstance_1.default.postMessage({
            dataType: 'performance',
            currentUrl: window.location.href,
            payload: {
                metrics: [formatters_1.transformPerfData(value, name)]
            }
        });
    }
};
function getVitals() {
    web_vitals_1.getLCP(logWebVitalsMetrics);
    web_vitals_1.getFID(logWebVitalsMetrics);
    web_vitals_1.getCLS(logWebVitalsMetrics);
}
exports.default = getVitals;
