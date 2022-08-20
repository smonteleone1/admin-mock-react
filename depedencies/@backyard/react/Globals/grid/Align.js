"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignSelf = exports.AlignItems = exports.AlignContent = void 0;

var _styledComponents = require("styled-components");

var AlignContent = (0, _styledComponents.css)([".content-center{align-content:center;}.content-start{align-content:flex-start;}.content-end{align-content:flex-end;}.content-between{align-content:space-between;}.content-around{align-content:space-around;}.content-evenly{align-content:space-evenly;}"]);
exports.AlignContent = AlignContent;
var AlignItems = (0, _styledComponents.css)([".items-start{align-items:flex-start;}.items-end{align-items:flex-end;}.items-center{align-items:center;}.items-baseline{align-items:baseline;}.items-stretch{align-items:stretch;}"]);
exports.AlignItems = AlignItems;
var AlignSelf = (0, _styledComponents.css)([".self-auto{align-self:auto;}.self-start{align-self:flex-start;}.self-end{align-self:flex-end;}.self-center{align-self:center;}.self-stretch{align-self:stretch;}"]);
exports.AlignSelf = AlignSelf;