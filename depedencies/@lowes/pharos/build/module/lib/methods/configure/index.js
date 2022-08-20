"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonRequestPayload_1 = require("../../utils/commonRequestPayload");
const sendPerfData_1 = require("../../performance/sendPerfData");
const monitorErrors_1 = require("../../errors/monitorErrors");
const monitorConsole_1 = require("../../monitorConsole");
const formatters_1 = require("../../utils/formatters");
const configureFlag_1 = require("../../store/configureFlag");
const workerUtils_1 = require("../../webWorker/workerUtils");
const getWorkerInstance_1 = require("../../webWorker/getWorkerInstance");
const sendPageScrollPercentage_1 = require("../../performance/sendPageScrollPercentage");
const utils_1 = require("../../utils/utils");
const configure = (clientConfig) => {
    if (configureFlag_1.isConfigured()) {
        console.log('Pharos-Configure: Pharos is already configured');
        return;
    }
    if (!formatters_1.isTokenPresent(clientConfig)) {
        console.log('Pharos-Configure: Please provide Token/Application Name to configure pharos');
        return;
    }
    configureFlag_1.setConfigureFlag();
    const commonData = commonRequestPayload_1.default(clientConfig);
    workerUtils_1.default(commonData);
    getWorkerInstance_1.default.postMessage({
        dataType: 'setClientConfig',
        currentUrl: window.location.href,
        payload: clientConfig
    });
    getWorkerInstance_1.default.postMessage({
        dataType: 'generateVisitorId',
        currentUrl: window.location.href,
        payload: commonData
    });
    sendPerfData_1.default(clientConfig);
    monitorErrors_1.default(clientConfig);
    monitorConsole_1.default(clientConfig);
    sendPageScrollPercentage_1.default();
    utils_1.setPageLandingPath();
};
exports.default = configure;
