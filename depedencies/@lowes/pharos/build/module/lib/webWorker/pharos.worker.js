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
exports.messageHandler = void 0;
const deepMerger_1 = require("../utils/deepMerger");
const getFormattedPagePerfData_1 = require("../performance/getFormattedPagePerfData");
const mapping_json_1 = require("../config/mapping.json");
const apiEndpoints_1 = require("../apiEndpoints");
const formatters_1 = require("../utils/formatters");
const utils_1 = require("../utils/utils");
const webWorkerAvailable = typeof self !== 'undefined' && typeof postMessage === 'function';
self.exceededNetworkThreshold = true;
self.batchData = null;
function postDataToKafka(url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data && utils_1.hasTelemetryData(data)) {
            if (isDev) {
                self.postMessage({ dataType: 'validatePayload', payload: { url, data } });
            }
            yield self.postMessage({ dataType: 'sendDataToBeacon', payload: { url, data } });
        }
    });
}
function checkForRequiredData() {
    let hasRequiredData = true;
    const { waitForPageDetails = false, waitForUserDetails = false, waitforStoreDetails = false } = self.clientConfig;
    const { page = {}, user = {}, store = '' } = self.commonData;
    if (waitForPageDetails) {
        hasRequiredData = page.name || page.title;
    }
    if (waitForUserDetails) {
        hasRequiredData = user && Object.keys(user).length;
    }
    if (waitforStoreDetails) {
        hasRequiredData = store;
    }
    return hasRequiredData;
}
function batchAndSendData(url, data) {
    const dataLength = JSON.stringify(self.batchData || {}).length;
    const pharosBatchDataLength = PHAROS_BATCH_DATA_LENGTH || 10000;
    const flushData = checkForRequiredData() && dataLength >= pharosBatchDataLength;
    if (flushData || self.isFlushBatchData) {
        if (!self.isFlushBatchData) {
            self.batchData = JSON.parse(JSON.stringify(deepMerger_1.default(self.batchData, self.commonData)));
        }
        postDataToKafka(url, self.batchData);
        self.batchData = null;
        self.isFlushBatchData = false;
    }
    self.batchData = JSON.parse(JSON.stringify(deepMerger_1.default(self.batchData || {}, data)));
    self.postMessage({ dataType: 'setBatchData', payload: { url, data: self.batchData } });
}
function formAndPostData(postData) {
    const payload = Object.assign(Object.assign({}, self.commonData), postData);
    payload.trackedAt = formatters_1.getTimeStamp(self.performance);
    if (payload.app) {
        payload.app.url = self.currentUrl;
    }
    const url = self.commonData.pharosUrl + apiEndpoints_1.default;
    batchAndSendData(url, payload);
}
const isUrlUpdated = () => {
    if (self.batchData && self.batchData.app) {
        const batchDataAppUrl = self.batchData.app.url;
        return batchDataAppUrl !== self.currentUrl;
    }
    return false;
};
function messageHandler(e) {
    const { data: { dataType, payload, currentUrl } } = e;
    self.currentUrl = currentUrl;
    self.isFlushBatchData = isUrlUpdated();
    switch (dataType) {
        case 'setCommonData': {
            self.commonData = deepMerger_1.default((self.commonData || {}), payload);
            break;
        }
        case 'clearBatchData': {
            self.batchData = null;
            break;
        }
        case 'flushBatchData': {
            if (!self.isFlushBatchData) {
                self.isFlushBatchData = true;
                formAndPostData(payload);
            }
            break;
        }
        case 'setClientConfig': {
            self.clientConfig = payload;
            break;
        }
        case 'generateVisitorId': {
            const { uid, exDate } = formatters_1.getUid(payload[mapping_json_1.default.anonymousId], 90);
            const vi = `${uid}${Date.now()}`;
            self.commonData = Object.assign(Object.assign({}, payload), { [mapping_json_1.default.visitorId]: vi, [mapping_json_1.default.anonymousId]: uid });
            self.postMessage({ dataType: 'setVisitorId', payload: { [mapping_json_1.default.visitorId]: vi, [mapping_json_1.default.anonymousId]: uid, extraData: { exDate } } });
            break;
        }
        case 'performance': {
            const postData = getFormattedPagePerfData_1.default(payload, self.clientConfig);
            const { exceededNetworkThreshold } = postData, restAnalyticsData = __rest(postData, ["exceededNetworkThreshold"]);
            if (exceededNetworkThreshold) {
                self.sendDataOnUnload = true;
            }
            else {
                self.exceededNetworkThreshold = false;
            }
            formAndPostData(restAnalyticsData);
            break;
        }
        case 'errorDetails': {
            const isAuthenticError = formatters_1.checkErrorAuthenticity(payload, self.clientConfig);
            const { pharosApi } = payload, errorPayload = __rest(payload, ["pharosApi"]);
            if (isAuthenticError) {
                formAndPostData({ pharosApi, errors: [errorPayload] });
            }
            break;
        }
        case 'customEvents': {
            formAndPostData(payload);
            break;
        }
        case 'consoleDetails': {
            const { pharosApi } = payload, consolePayload = __rest(payload, ["pharosApi"]);
            formAndPostData({ pharosApi, consoles: [consolePayload] });
            break;
        }
        default:
            console.log('Worker: dataType is not defined');
    }
}
exports.messageHandler = messageHandler;
function webworker(request) {
    if (webWorkerAvailable) {
        request.addEventListener('message', (e) => messageHandler(e), false);
    }
    else {
        console.log({
            msg: 'web not available'
        });
    }
}
webworker(self);
