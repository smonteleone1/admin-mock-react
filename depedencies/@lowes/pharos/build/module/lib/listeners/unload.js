"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spaUnload = exports.unload = exports.isSpaUnloadQueueResolved = exports.resolveSpaUnloadQueue = void 0;
const constNumbers_json_1 = require("../config/constNumbers.json");
const unloadPromiseQueue = [];
let spaUnloadQueue = [];
let spaUnloadQueueResolved = false;
const resolveAllPromise = () => {
    unloadPromiseQueue.forEach((currentPromise) => {
        currentPromise();
    });
    spaUnloadQueue.forEach((currentPromise) => {
        currentPromise();
    });
};
const pageUnload = setTimeout(() => {
    resolveAllPromise();
}, constNumbers_json_1.default.timeout);
window.addEventListener('pagehide', (e) => {
    if (!e.persisted) {
        clearTimeout(pageUnload);
        resolveAllPromise();
    }
});
exports.resolveSpaUnloadQueue = () => {
    spaUnloadQueueResolved = true;
    spaUnloadQueue.forEach((currentPromise) => {
        currentPromise();
    });
    spaUnloadQueue = [];
};
exports.isSpaUnloadQueueResolved = () => spaUnloadQueueResolved;
exports.unload = () => new Promise((resolve) => {
    unloadPromiseQueue.push(resolve);
});
exports.spaUnload = () => new Promise((resolve) => {
    spaUnloadQueue.push(resolve);
});
