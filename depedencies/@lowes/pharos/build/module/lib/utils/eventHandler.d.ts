declare var _default: EventHandler;
export default _default;
declare class EventHandler {
    events: {};
    on(eventName: any, fn: any): void;
    emit(eventName: any, data: any): void;
}
