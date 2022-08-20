export default class ActivateErrorListener {
    constructor(errorListenerInstance: any, clientConfig: any);
    errorListenerInstance: any;
    clientConfig: any;
    attachXHRErrorListener(omitErrorsList: any, traceIdKey: any): void;
    attachGoogleMapErrorListener(omitErrorsList: any): void;
    attachMutationObserverErrorListener(omitErrorsList: any): void;
    attachFetchErrorListener(omitErrorsList: any, traceIdKey: any): void;
    addEventErrorListener(listener?: Window & typeof globalThis, eventErrorList?: any): void;
    init(): void;
    sendErrorAccordingToStatus(value: any, errorObj: any): void;
}
