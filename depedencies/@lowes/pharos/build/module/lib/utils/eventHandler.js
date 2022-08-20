"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventHandler {
    constructor() {
        this.events = {};
    }
    on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((fn) => {
                fn(data);
            });
        }
    }
}
exports.default = new EventHandler();
