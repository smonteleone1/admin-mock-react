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
Object.defineProperty(exports, "__esModule", { value: true });
const onload_1 = require("../listeners/onload");
const unload_1 = require("../listeners/unload");
const trackEvent_1 = require("../methods/trackEvent");
const sendPageScrollPercentage = () => __awaiter(void 0, void 0, void 0, function* () {
    let maxScrollPercentage = 0;
    let eventTriggeredForPercentage = [];
    const sendScrollData = () => {
        if (maxScrollPercentage >= 25 && maxScrollPercentage < 50) {
            maxScrollPercentage = 25;
        }
        else if (maxScrollPercentage >= 50 && maxScrollPercentage < 75) {
            maxScrollPercentage = 50;
        }
        else if (maxScrollPercentage >= 75 && maxScrollPercentage < 100) {
            maxScrollPercentage = 75;
        }
        const isEventTriggeredForPercentage = eventTriggeredForPercentage.includes(maxScrollPercentage);
        if (maxScrollPercentage >= 25 && !isEventTriggeredForPercentage) {
            eventTriggeredForPercentage.push(maxScrollPercentage);
            trackEvent_1.default('pageScrollPercentage', maxScrollPercentage);
        }
    };
    onload_1.default().then(() => {
        let lastScrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
        let path = window.location.pathname;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
            const newPath = window.location.pathname;
            if (path !== newPath) {
                path = newPath;
                eventTriggeredForPercentage = [];
            }
            if (scrollTop > lastScrollTop) {
                const docHeight = Math.max(document.body.scrollHeight || 0, document.documentElement.scrollHeight || 0, document.body.offsetHeight || 0, document.documentElement.offsetHeight || 0, document.body.clientHeight || 0, document.documentElement.clientHeight || 0);
                const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
                const scrollPercent = scrollTop / (docHeight - winHeight);
                maxScrollPercentage = Math.round(scrollPercent * 100);
                sendScrollData();
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    });
    unload_1.unload().then(() => {
        const isEventTriggeredForPercentage = eventTriggeredForPercentage.includes(maxScrollPercentage);
        if (maxScrollPercentage > 0 && !isEventTriggeredForPercentage) {
            trackEvent_1.default('pageScrollPercentage', maxScrollPercentage);
        }
    });
});
exports.default = sendPageScrollPercentage;
