"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interceptors_1 = require("./interceptors");
const obsEntry_json_1 = require("../config/obsEntry.json");
const eventHandler_1 = require("./eventHandler");
class calculateQuietWindow {
    constructor(windowReference, callback, useMutationObserver) {
        this.performance = windowReference.performance;
        this.callback = callback;
        this._longTasks = [];
        this._scheduleTimerTasks = false;
        this._networkRequests = [];
        this._timerId = null;
        this._timerActivationTime = -Infinity;
        this._incompleteJSInitiatedRequestStartTimes = new Map();
        this._registerListeners();
        this._useMutationObserver = useMutationObserver;
    }
    computeLastKnownNetwork2Busy(incompleteRequestStarts, observedResourceRequests) {
        if (incompleteRequestStarts.length > 2)
            return this.performance.now();
        const endpoints = [];
        for (const req of observedResourceRequests) {
            endpoints.push({
                timestamp: req.start,
                type: 'requestStart'
            });
            endpoints.push({
                timestamp: req.end,
                type: 'requestEnd'
            });
        }
        for (const ts of incompleteRequestStarts) {
            endpoints.push({
                timestamp: ts,
                type: 'requestStart'
            });
        }
        endpoints.sort((a, b) => a.timestamp - b.timestamp);
        let currentActive = incompleteRequestStarts.length;
        for (let i = endpoints.length - 1; i >= 0; i -= 1) {
            const endpoint = endpoints[i];
            switch (endpoint.type) {
                case 'requestStart':
                    currentActive -= 1;
                    break;
                case 'requestEnd':
                    currentActive += 1;
                    if (currentActive > 2) {
                        return endpoint.timestamp;
                    }
                    break;
                default:
                    throw Error('Internal Error: This should never happen');
            }
        }
        return 0;
    }
    startSchedulingTimerTasks() {
        this._scheduleTimerTasks = true;
        this.rescheduleTimer(this.performance.now() + 5000);
    }
    rescheduleTimer(earliestTime) {
        if (!this._scheduleTimerTasks) {
            return;
        }
        if (this._timerActivationTime > earliestTime) {
            return;
        }
        clearTimeout(this._timerId);
        this._timerId = setTimeout(() => {
            const lastBusy = this.computeLastKnownNetwork2Busy(this._incompleteRequestStarts, this._networkRequests);
            this.callback({
                longTaskEntries: this._longTasks,
                lastBusy
            });
        }, earliestTime - this.performance.now());
        this._timerActivationTime = earliestTime;
    }
    resourceCallback(entries) {
        const firstConsistentlyInteractiveDetector = this;
        if (this && !this.isDisabled()) {
            for (const entry of entries) {
                firstConsistentlyInteractiveDetector._networkRequestFinishedCallback(entry);
            }
        }
    }
    disable() {
        clearTimeout(this._timerId);
        this._scheduleTimerTasks = false;
        this._unregisterListeners();
    }
    longTaskCallback(entries) {
        const firstConsistentlyInteractiveDetector = this;
        if (this && !this.isDisabled()) {
            for (const entry of entries) {
                firstConsistentlyInteractiveDetector._longTaskFinishedCallback(entry);
            }
        }
    }
    _mutationObserverCallback() {
        this.rescheduleTimer(this.performance.now() + 5000);
    }
    _registerListeners() {
        interceptors_1.patchXMLHTTPRequest(this._beforeJSInitiatedRequestCallback.bind(this), this._afterJSInitiatedRequestCallback.bind(this));
        interceptors_1.patchFetch(this._beforeJSInitiatedRequestCallback.bind(this), this._afterJSInitiatedRequestCallback.bind(this));
        eventHandler_1.default.on(obsEntry_json_1.default.RS, this.resourceCallback);
        eventHandler_1.default.on(obsEntry_json_1.default.LT, this.longTaskCallback);
        if (this._useMutationObserver) {
            this._mutationObserver = interceptors_1.observeResourceFetchingMutations(this._mutationObserverCallback.bind(this));
        }
    }
    _unregisterListeners() {
        delete this._networkRequests;
        delete this._longTasks;
    }
    isDisabled() {
        return !this._scheduleTimerTasks;
    }
    _beforeJSInitiatedRequestCallback(requestInstance, requestId) {
        if (this && !this.isDisabled()) {
            this._incompleteJSInitiatedRequestStartTimes.set(requestId, this.performance.now());
        }
    }
    _afterJSInitiatedRequestCallback(requestInstance, requestId) {
        if (this && !this.isDisabled()) {
            this._incompleteJSInitiatedRequestStartTimes.delete(requestId);
        }
    }
    _networkRequestFinishedCallback(performanceEntry) {
        if (this._networkRequests) {
            this._networkRequests.push({
                start: performanceEntry.fetchStart,
                end: performanceEntry.responseEnd
            });
            this.rescheduleTimer(this.computeLastKnownNetwork2Busy(this._incompleteRequestStarts, this._networkRequests) + 5000);
        }
    }
    _longTaskFinishedCallback(performanceEntry) {
        if (this._longTasks) {
            const taskEndTime = performanceEntry.startTime + performanceEntry.duration;
            this._longTasks.push({
                start: performanceEntry.startTime,
                end: taskEndTime
            });
            this.rescheduleTimer(taskEndTime + 5000);
        }
    }
    get _incompleteRequestStarts() {
        return [...this._incompleteJSInitiatedRequestStartTimes.values()];
    }
}
exports.default = calculateQuietWindow;
