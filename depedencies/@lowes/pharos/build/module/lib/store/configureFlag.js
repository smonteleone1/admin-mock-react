"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfigureFlag = exports.isConfigured = void 0;
let configured = false;
exports.isConfigured = () => configured;
exports.setConfigureFlag = () => {
    configured = true;
};
