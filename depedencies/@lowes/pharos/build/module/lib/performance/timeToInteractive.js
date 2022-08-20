"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("../utils/formatters");
const performanceData_1 = require("../store/performanceData");
const commonData_1 = require("../store/commonData");
const calculateQuietWindow_1 = require("../utils/calculateQuietWindow");
class FirstConsistentlyInteractiveDetector {
    constructor(windowReference, startTimestamp = 0, _useMutationObserver = true) {
        this.startTimestamp = startTimestamp;
        this.performance = windowReference.performance;
        this.calculateQuietWindow = new calculateQuietWindow_1.default(windowReference, this._checkTTI.bind(this), _useMutationObserver);
    }
    startSchedulingTimerTasks() {
        this.calculateQuietWindow.startSchedulingTimerTasks();
    }
    setData(FCP, FP, maybeFCI, longTaskEntries) {
        let TBT = 0;
        const compareStartTime = this.startTimestamp || FCP;
        for (let i = 0; i < longTaskEntries.length; i += 1) {
            if (compareStartTime < longTaskEntries[i].end) {
                const timeElapsed = longTaskEntries[i].end - longTaskEntries[i].start - 50;
                TBT += timeElapsed > 0 ? timeElapsed : 0;
            }
        }
        const commonData = commonData_1.getCommonData();
        if (this.startTimestamp) {
            const TTIMetrics = formatters_1.transformPerfData(maybeFCI - this.startTimestamp, 'TTI');
            const TBTMetrics = formatters_1.transformPerfData(TBT, 'TBT');
            commonData.metrics = [];
            formatters_1.populatePageMetrics(commonData.metrics, TTIMetrics);
            formatters_1.populatePageMetrics(commonData.metrics, TBTMetrics);
        }
        else {
            performanceData_1.updatePerformanceData({ name: 'TTI', value: maybeFCI });
            performanceData_1.updatePerformanceData({ name: 'TBT', value: TBT });
            performanceData_1.updatePerformanceData({ name: 'FirstPaint', value: FP });
            performanceData_1.updatePerformanceData({ name: 'FirstContentfulPaint', value: FCP });
        }
        this.disable();
    }
    _getMinValue() {
        if (this.performance.timing.domContentLoadedEventEnd) {
            return this.performance.timing.domContentLoadedEventEnd
                - this.performance.timing.navigationStart;
        }
        return null;
    }
    disable() {
        this.calculateQuietWindow.disable();
    }
    _checkTTI({ lastBusy, longTaskEntries }) {
        const [firstPaint, firstContentfulPaint] = typeof (this.performance.getEntriesByType) === 'function' ? this.performance.getEntriesByType('paint') : [];
        let evaluatedFirstPaint = 0;
        let evaluatedFirstContentfulPaint = 0;
        if (!this.startTimestamp) {
            const { responseStart, navigationStart, msFirstPaint } = this.performance.timing;
            const resourceEntries = typeof (this.performance.getEntriesByType) === 'function' ? this.performance.getEntriesByType('resource') : [];
            evaluatedFirstPaint = !firstPaint ? msFirstPaint || formatters_1.calculateFirstPaint(responseStart, navigationStart, resourceEntries)
                : firstPaint.startTime;
            evaluatedFirstContentfulPaint = !firstContentfulPaint
                ? evaluatedFirstPaint
                : firstContentfulPaint.startTime;
        }
        const minValue = this._getMinValue();
        const currentTime = this.performance.now();
        const startTime = this.startTimestamp || evaluatedFirstPaint;
        const maybeFCI = formatters_1.computeFirstConsistentlyInteractive(startTime, minValue, lastBusy, currentTime, longTaskEntries);
        if (maybeFCI) {
            this.setData(evaluatedFirstContentfulPaint, evaluatedFirstPaint, maybeFCI, longTaskEntries);
        }
    }
}
exports.default = FirstConsistentlyInteractiveDetector;
