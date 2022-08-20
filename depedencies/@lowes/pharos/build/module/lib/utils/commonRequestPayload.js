"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapping_json_1 = require("../config/mapping.json");
const formatters_1 = require("./formatters");
const getCookies_1 = require("./getCookies");
const utils_1 = require("./utils");
const getCommonRequestData = (clientConfig) => {
    const { height, width } = utils_1.getScreenDimension();
    return {
        [mapping_json_1.default.anonymousId]: getCookies_1.default(window.document)[mapping_json_1.default.pharosAnonymousCookie],
        token: clientConfig.token,
        pharosUrl: formatters_1.getPharosUrl(clientConfig.endpoint),
        sdkVersion: PHAROS_VERSION,
        app: {
            name: clientConfig.applicationName,
            url: window.location.href,
            releaseTag: clientConfig.releaseTag,
            buildDetails: window[mapping_json_1.default.buildDetails]
        },
        page: {
            name: formatters_1.getPageName(window.location.href, clientConfig.pageName),
            title: clientConfig.pageTitle,
            height,
            width
        }
    };
};
exports.default = getCommonRequestData;
