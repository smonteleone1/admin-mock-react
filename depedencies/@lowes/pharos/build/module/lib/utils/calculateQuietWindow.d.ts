export default class calculateQuietWindow {
    constructor(windowReference: any, callback: any, useMutationObserver: any);
    performance: any;
    callback: any;
    _longTasks: any[];
    _scheduleTimerTasks: boolean;
    _networkRequests: any[];
    _timerId: NodeJS.Timeout;
    _timerActivationTime: number;
    _incompleteJSInitiatedRequestStartTimes: Map<any, any>;
    _useMutationObserver: any;
    computeLastKnownNetwork2Busy(incompleteRequestStarts: any, observedResourceRequests: any): any;
    startSchedulingTimerTasks(): void;
    rescheduleTimer(earliestTime: any): void;
    resourceCallback(entries: any): void;
    disable(): void;
    longTaskCallback(entries: any): void;
    _mutationObserverCallback(): void;
    _registerListeners(): void;
    _mutationObserver: MutationObserver;
    _unregisterListeners(): void;
    isDisabled(): boolean;
    _beforeJSInitiatedRequestCallback(requestInstance: any, requestId: any): void;
    _afterJSInitiatedRequestCallback(requestInstance: any, requestId: any): void;
    _networkRequestFinishedCallback(performanceEntry: any): void;
    _longTaskFinishedCallback(performanceEntry: any): void;
    get _incompleteRequestStarts(): any[];
}
