"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePerformanceData = exports.getPerformanceData = exports.deletePerformanceData = void 0;
const formatters_1 = require("../utils/formatters");
const unload_1 = require("../listeners/unload");
let performanceData = {};
let promiseRes = function () {
};
const performanceSendProm = new Promise((res) => {
    promiseRes = res;
});
exports.deletePerformanceData = () => {
    performanceData = {};
};
performanceSendProm.then(({ url, payload = {} }) => {
    const formattedPayload = Object.assign({}, payload);
    formattedPayload.resourceList = JSON.stringify(payload.resourceList);
    formatters_1.sendBeaconDataWithOnBefore(url, formattedPayload, window);
    exports.deletePerformanceData();
});
unload_1.spaUnload().then(() => {
    const { url } = performanceData;
    if (url) {
        promiseRes(performanceData);
    }
});
unload_1.unload().then(() => {
    const { url } = performanceData;
    if (url) {
        promiseRes(performanceData);
    }
});
exports.getPerformanceData = () => performanceData;
const updatePerfData = (data, type) => {
    if (!data) {
        return {};
    }
    const _a = performanceData.payload, _b = _a === void 0 ? {} : _a, { metrics = [], resourceList = [] } = _b, restPayload = __rest(_b, ["metrics", "resourceList"]), restData = __rest(performanceData, ["payload"]);
    if (type === 'queuePayload') {
        const _c = data.payload, _d = _c === void 0 ? {} : _c, { metrics: metricsData = [], resourceList: resourceListData = [] } = _d, restPayloadData = __rest(_d, ["metrics", "resourceList"]), restPerfData = __rest(data, ["payload"]);
        const updatedResourceList = resourceList.concat(resourceListData);
        return Object.assign({ payload: Object.assign({ metrics: metrics.concat(metricsData), resourceList: updatedResourceList }, restPayloadData) }, restPerfData);
    }
    const pageMetrics = [...metrics];
    const { name, value } = data;
    const trasformedData = formatters_1.transformPerfData(value, name);
    if (!formatters_1.isObjectEmpty(trasformedData)) {
        pageMetrics.push(trasformedData);
    }
    return Object.assign({ payload: Object.assign({ metrics: pageMetrics, resourceList }, restPayload) }, restData);
};
exports.updatePerformanceData = (data, type) => {
    performanceData = updatePerfData(data, type);
};
