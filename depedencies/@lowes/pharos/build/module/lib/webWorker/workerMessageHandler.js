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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const unload_1 = require("../listeners/unload");
const formatters_1 = require("../utils/formatters");
const commonData_1 = require("../store/commonData");
const mapping_json_1 = require("../config/mapping.json");
const utils_1 = require("../utils/utils");
const activateMessageHandler = (workerInstance) => {
    let batchData;
    workerInstance.addEventListener('message', (e) => {
        const { data: { dataType, payload } } = e;
        switch (dataType) {
            case 'validatePayload': {
                if (isDev) {
                    (() => __awaiter(void 0, void 0, void 0, function* () {
                        const validate = yield Promise.resolve().then(() => require('../validator/index.tsx'));
                        validate.default(payload);
                    }))();
                }
                break;
            }
            case 'setVisitorId': {
                const { extraData = {} } = payload, restPayload = __rest(payload, ["extraData"]);
                const { exDate } = extraData;
                window.document.cookie = `${mapping_json_1.default.pharosAnonymousCookie}=${payload[mapping_json_1.default.anonymousId]}; path=/; ${exDate}`;
                commonData_1.setCommonData(restPayload);
                break;
            }
            case 'sendDataToBeacon': {
                const { url, data } = payload;
                formatters_1.sendBeaconDataWithOnBefore(url, data, window);
                break;
            }
            case 'setBatchData': {
                batchData = payload;
                break;
            }
            default:
                break;
        }
    }, false);
    unload_1.spaUnload().then(() => {
        if (batchData) {
            const { url, data } = batchData;
            if (utils_1.hasTelemetryData(data)) {
                formatters_1.sendBeaconDataWithOnBefore(url, data, window);
            }
            batchData = null;
            workerInstance.postMessage({ dataType: 'clearBatchData' });
        }
    });
};
exports.default = activateMessageHandler;
