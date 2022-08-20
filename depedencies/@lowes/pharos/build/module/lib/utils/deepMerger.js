"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function mergeDeep(targetOrg, sourceOrg, clone = true) {
    let target = targetOrg;
    let source = sourceOrg;
    if (clone) {
        target = Object.assign({}, targetOrg);
        source = Object.assign({}, sourceOrg);
    }
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}
exports.default = mergeDeep;
