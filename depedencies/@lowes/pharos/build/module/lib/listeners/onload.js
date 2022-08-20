"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onload = () => new Promise((resolve) => {
    const { readyState } = window.document;
    if (readyState === 'complete') {
        resolve('load');
    }
    else {
        window.addEventListener('load', () => {
            resolve('load');
        });
    }
});
exports.default = onload;
