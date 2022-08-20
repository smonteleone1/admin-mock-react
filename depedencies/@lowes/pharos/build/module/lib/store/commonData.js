"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCommonData = exports.getCommonData = void 0;
const deepMerger_1 = require("../utils/deepMerger");
let commonData = {};
exports.getCommonData = () => (Object.assign({}, commonData));
exports.setCommonData = (data) => {
    commonData = deepMerger_1.default(commonData, data);
};
