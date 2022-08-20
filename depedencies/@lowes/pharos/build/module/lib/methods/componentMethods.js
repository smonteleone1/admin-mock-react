"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentLoadEnd = exports.componentLoadStart = void 0;
const componentList = new Set();
const sendComponentPerfData = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const postComponentPerfData = yield Promise.resolve().then(() => require('../componentMetrics/componentPerformance'));
    postComponentPerfData.default(name);
    componentList.delete(name);
});
const componentLoadStart = (name) => {
    if (!componentList.has(name)) {
        componentList.add(name);
        window.performance.mark(`${name}Start`);
    }
};
exports.componentLoadStart = componentLoadStart;
const componentLoadEnd = (name) => {
    window.performance.mark(`${name}End`);
    sendComponentPerfData(name);
};
exports.componentLoadEnd = componentLoadEnd;
