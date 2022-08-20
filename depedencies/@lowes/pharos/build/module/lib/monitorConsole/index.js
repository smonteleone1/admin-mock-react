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
const formatters_1 = require("../utils/formatters");
const getWorkerInstance_1 = require("../webWorker/getWorkerInstance");
const consoleFormatter_1 = require("../utils/consoleFormatter");
const monitorConsole = (clientConfig) => __awaiter(void 0, void 0, void 0, function* () {
    const { omitErrors = [] } = clientConfig;
    if (!omitErrors.includes('console')) {
        const consoleKeys = Object.keys(console);
        for (let i = 0; i < consoleKeys.length; i += 1) {
            const _key = window.console[consoleKeys[i]];
            try {
                if (_key.apply) {
                    window.console[consoleKeys[i]] = function getConsole(...args) {
                        const consoleData = consoleFormatter_1.default({ type: consoleKeys[i], data: args });
                        getWorkerInstance_1.default.postMessage({
                            dataType: 'consoleDetails',
                            currentUrl: window.location.href,
                            payload: consoleData
                        });
                        _key.apply(console, args);
                    };
                }
            }
            catch (e) {
                console.log('e', e);
            }
        }
    }
});
exports.default = formatters_1.configureWrapper(monitorConsole);
