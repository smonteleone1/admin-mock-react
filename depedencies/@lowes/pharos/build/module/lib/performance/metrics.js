"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntryFromObserverEntries = exports.createEntryFromResourceTiming = exports.getPageLevelData = void 0;
const formatters_1 = require("../utils/formatters");
const obsEntry_json_1 = require("../config/obsEntry.json");
const pageMetricsFormatter = (metricsList) => {
    const pageMetrics = [];
    const { TTFB, connectionTime, dnsLookUpTime, roundTripTime, domInteractive, networkTime, browserRenderTime, domLoaded, domComplete, pageReady } = metricsList;
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(TTFB, 'TTFB'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(connectionTime, 'ConnectionTime'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(dnsLookUpTime, 'DnsLookUpTime'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(roundTripTime, 'RoundTripTime'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(domInteractive, 'CompletePageInteractive'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(networkTime, 'NetworkTime'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(browserRenderTime, 'BrowserRenderTime'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(domLoaded, 'DomLoaded'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(domComplete, 'DomComplete'));
    formatters_1.populatePageMetrics(pageMetrics, formatters_1.transformPerfData(pageReady, 'PageReady'));
    return { pageMetrics, roundTripTime };
};
exports.getPageLevelData = (performance, isNavigationTimingSupported) => {
    const { timing: legacyTiming, navigationEntries } = performance;
    let timing;
    let TTFB = 0;
    let domLoaded = 0;
    let domComplete = 0;
    let pageReady = 0;
    let domInteractive = 0;
    if (isNavigationTimingSupported) {
        const navigationTiming = navigationEntries[0];
        timing = navigationTiming;
        TTFB = timing.responseStart - timing.requestStart;
        domLoaded = timing.domContentLoadedEventEnd;
        domComplete = timing.domComplete;
        domInteractive = timing.domInteractive;
    }
    else if (legacyTiming.navigationStart) {
        timing = legacyTiming;
        TTFB = timing.responseStart - timing.navigationStart;
        domLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
        domComplete = timing.domComplete - timing.navigationStart;
        pageReady = timing.loadEventStart - timing.navigationStart;
        domInteractive = timing.domInteractive - timing.domLoading;
    }
    const dnsLookUpTime = timing.domainLookupEnd - timing.domainLookupStart;
    const connectionTime = timing.connectEnd - timing.connectStart;
    const roundTripTime = timing.responseEnd - timing.requestStart;
    const networkTime = dnsLookUpTime + connectionTime + roundTripTime;
    const browserRenderTime = timing.loadEventStart - timing.domContentLoadedEventEnd;
    return pageMetricsFormatter({
        TTFB,
        connectionTime,
        dnsLookUpTime,
        roundTripTime,
        domInteractive,
        networkTime,
        browserRenderTime,
        domLoaded,
        domComplete,
        pageReady
    });
};
exports.createEntryFromResourceTiming = (entries) => entries.map((resource) => ({
    url: resource.name,
    start: resource.startTime,
    initiatorType: resource.initiatorType,
    entryType: resource.entryType,
    duration: resource.duration,
    transferSize: resource.transferSize,
    decodedBodySize: resource.decodedBodySize,
    redirectStart: resource.redirectStart,
    redirectDuration: (resource.redirectEnd - resource.redirectStart),
    dnsStart: resource.domainLookupStart,
    dnsDuration: (resource.domainLookupEnd - resource.domainLookupStart),
    tcpStart: resource.connectStart,
    tcpDuration: (resource.secureConnectionStart
        > 0 ? (resource.secureConnectionStart - resource.connectStart)
        : (resource.connectEnd - resource.connectStart)),
    sslStart: resource.secureConnectionStart > 0 ? resource.secureConnectionStart : 0,
    sslDuration: resource.secureConnectionStart > 0
        ? (resource.connectEnd - resource.secureConnectionStart) : 0,
    requestStart: resource.requestStart,
    requestDuration: (resource.responseStart - resource.requestStart),
    responseStart: resource.responseStart,
    responseDuration: resource.responseStart === 0
        ? 0 : (resource.responseEnd - resource.responseStart),
    fetchStart: resource.fetchStart
}));
const createEntryFromLongTaskTiming = (entries) => entries.map((resource) => ({
    duration: resource.duration,
    startTime: resource.startTime
}));
exports.createEntryFromObserverEntries = (type, analyticsData) => {
    let entryList = [];
    switch (type) {
        case obsEntry_json_1.default.RS: {
            entryList = exports.createEntryFromResourceTiming(analyticsData);
            break;
        }
        case obsEntry_json_1.default.LT: {
            entryList = createEntryFromLongTaskTiming(analyticsData);
            break;
        }
        default: {
            entryList = [];
        }
    }
    return entryList;
};
