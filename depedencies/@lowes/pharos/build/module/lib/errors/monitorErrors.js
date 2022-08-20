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
exports.sendErrorData = void 0;
const activateErrorListener_1 = require("./activateErrorListener");
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const formatters_1 = require("../utils/formatters");
const isProperError = (errorDetails) => {
    const inValidErrorTypeList = ['[object Null]',
        '[object Undefined]',
        '[object Function]',
        '[object Array]',
        '[object Boolean]'];
    return !inValidErrorTypeList.includes(errorDetails);
};
exports.sendErrorData = ((error, errorConfigData) => __awaiter(void 0, void 0, void 0, function* () {
    const errorDetailsType = Object.prototype.toString.call(error);
    if (!isProperError(errorDetailsType)) {
        return;
    }
    const errorListenerVariables = { promiseMap: new Map(), promiseMapCount: 0 };
    const errorFormatter = yield Promise.resolve().then(() => require('../utils/errorFormatter'));
    const errorData = errorFormatter.default(error, Object.assign(Object.assign({}, errorConfigData), { errorListenerVariables }));
    const errorPayload = Object.assign(Object.assign({}, errorData), { timestamp: formatters_1.getTimeStamp(window.performance) });
    getWorkerInstance_1.default.postMessage({
        dataType: 'errorDetails',
        currentUrl: window.location.href,
        payload: errorPayload
    });
}));
const monitorErrors = (clientConfig) => {
    const activateErrorListener = new activateErrorListener_1.default(exports.sendErrorData, clientConfig);
    activateErrorListener.init();
};
exports.default = formatters_1.configureWrapper(monitorErrors);
