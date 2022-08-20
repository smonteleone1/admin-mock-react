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
const metrics_1 = require("./metrics");
const formatters_1 = require("../utils/formatters");
const obsEntry_json_1 = require("../config/obsEntry.json");
const constNumbers_json_1 = require("../config/constNumbers.json");
const getFormattedPagePerfData = (data, clientConfig) => {
    const { performanceData = {} } = data, rest = __rest(data, ["performanceData"]);
    const { networkThreshold } = clientConfig;
    let exceededNetworkThreshold = false;
    let { metrics = [], resourceList = [] } = data;
    let pageLevelData = {};
    if (performanceData.timing || performanceData.navigationEntries) {
        if (performanceData.navigationEntries && performanceData.navigationEntries.length) {
            pageLevelData = metrics_1.getPageLevelData(performanceData, true);
        }
        else {
            pageLevelData = metrics_1.getPageLevelData(performanceData, false);
        }
    }
    const { pageMetrics = [], roundTripTime = 0 } = pageLevelData;
    metrics = [
        ...metrics,
        ...pageMetrics
    ];
    if (roundTripTime > formatters_1.getThreshold(networkThreshold, constNumbers_json_1.default.NT)) {
        exceededNetworkThreshold = true;
    }
    const { resourceEntries = [], navigationEntries = [] } = performanceData;
    const allEntries = [...resourceEntries, ...navigationEntries];
    const apisExcludingAnalyticsApi = allEntries.filter((entry) => !formatters_1.isAnalyticsApi(entry.name));
    resourceList = metrics_1.createEntryFromObserverEntries(obsEntry_json_1.default.RS, apisExcludingAnalyticsApi);
    return Object.assign(Object.assign({}, rest), { metrics,
        exceededNetworkThreshold, resources: resourceList });
};
exports.default = getFormattedPagePerfData;
