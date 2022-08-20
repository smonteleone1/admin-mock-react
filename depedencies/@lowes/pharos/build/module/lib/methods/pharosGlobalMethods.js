"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackError = exports.setPageDetails = exports.setRelease = exports.setStore = exports.setUser = void 0;
const workerUtils_1 = require("../webWorker/workerUtils");
const formatters_1 = require("../utils/formatters");
const monitorErrors_1 = require("../errors/monitorErrors");
const userInfo = (user) => {
    workerUtils_1.default({ user });
};
exports.setUser = formatters_1.configureWrapper(userInfo);
const storeInfo = (store) => workerUtils_1.default({ store });
exports.setStore = formatters_1.configureWrapper(storeInfo);
const releaseInfo = (tag) => {
    workerUtils_1.default({ app: { releaseTag: tag } });
};
exports.setRelease = formatters_1.configureWrapper(releaseInfo);
const pageDetails = ({ pageName, pageTitle }) => {
    if (pageName) {
        const name = formatters_1.getPageName(window.location.href, pageName);
        workerUtils_1.default({ page: { name } });
    }
    if (pageTitle) {
        workerUtils_1.default({ page: { title: pageTitle } });
    }
};
exports.setPageDetails = formatters_1.configureWrapper(pageDetails);
const trackErrorMethod = (error, errorDetailsObject = {}) => {
    const { traceIdKey } = errorDetailsObject;
    monitorErrors_1.sendErrorData(error, { traceIdKey, errorInitiator: 'client', userDefined: true });
};
exports.trackError = formatters_1.configureWrapper(trackErrorMethod);
