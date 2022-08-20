"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pharos_worker_1 = require("./pharos.worker");
const workerMessageHandler_1 = require("./workerMessageHandler");
const workerInstance = (() => {
    const instance = new pharos_worker_1.default();
    workerMessageHandler_1.default(instance);
    return instance;
})();
exports.default = workerInstance;
