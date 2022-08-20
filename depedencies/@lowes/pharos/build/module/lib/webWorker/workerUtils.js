"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWorkerInstance_1 = require("./getWorkerInstance");
const commonData_1 = require("../store/commonData");
const updateWorkerAndMainThreadData = (data) => {
    getWorkerInstance_1.default.postMessage({
        dataType: 'setCommonData',
        payload: data
    });
    commonData_1.setCommonData(data);
};
exports.default = updateWorkerAndMainThreadData;
