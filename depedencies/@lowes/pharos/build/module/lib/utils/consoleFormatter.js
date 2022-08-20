"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiEndpoints_1 = require("../apiEndpoints");
const formatters_1 = require("./formatters");
const consoleFormatter = (consoleDetails) => {
    const { type, data } = consoleDetails;
    return {
        type,
        stackTrace: JSON.stringify([...data]),
        pharosApi: apiEndpoints_1.default,
        timestamp: formatters_1.getTimeStamp(window.performance)
    };
};
exports.default = consoleFormatter;
