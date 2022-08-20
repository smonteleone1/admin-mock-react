"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getResourceList = (omitErrorsList) => {
    const resourceMap = {
        script: 'SCRIPT',
        link: 'LINK',
        image: 'IMG'
    };
    const resourceList = [];
    Object.keys(resourceMap).forEach((key) => {
        if (!omitErrorsList.includes(key)) {
            resourceList.push(resourceMap[key]);
        }
    });
    return resourceList;
};
exports.default = getResourceList;
