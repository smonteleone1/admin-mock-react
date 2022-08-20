"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookiesMap = {
    ph_aid: 1
};
const getCookies = (documentReference) => {
    const cookies = documentReference.cookie.split(';');
    const cookiesMapLength = Object.keys(cookiesMap).length;
    const cookiesPair = {};
    let currentCookieCount = 0;
    for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i];
        const cookieKeyValuePair = cookie.split('=');
        const cookieName = cookieKeyValuePair[0].trim();
        const cookieValue = cookieKeyValuePair[1];
        if (cookiesMap[cookieName]) {
            cookiesPair[cookieName] = cookieValue;
            currentCookieCount += 1;
            if (currentCookieCount === cookiesMapLength) {
                break;
            }
        }
    }
    return cookiesPair;
};
exports.default = getCookies;
