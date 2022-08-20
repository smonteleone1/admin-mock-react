"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JustifySelf = exports.JustifyItems = exports.JustifyContent = void 0;

var _styledComponents = require("styled-components");

var JustifyContent = (0, _styledComponents.css)([".justify-start{justify-content:flex-start;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-around{justify-content:space-around;}.justify-evenly{justify-content:space-evenly;}"]);
exports.JustifyContent = JustifyContent;
var JustifyItems = (0, _styledComponents.css)([".justify-items-start{justify-items:start;}.justify-items-end{justify-items:end;}.justify-items-center{justify-items:center;}.justify-items-stretch{justify-items:stretch;}"]);
exports.JustifyItems = JustifyItems;
var JustifySelf = (0, _styledComponents.css)([".justify-self-auto{justify-self:auto;}.justify-self-start{justify-self:start;}.justify-self-end{justify-self:end;}.justify-self-center{justify-self:center;}.justify-self-stretch{justify-self:stretch;}"]);
exports.JustifySelf = JustifySelf;