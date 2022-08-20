"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSelf = exports.PlaceItems = exports.PlaceContent = void 0;

var _styledComponents = require("styled-components");

var PlaceContent = (0, _styledComponents.css)([".place-content-center{place-content:center;}.place-content-start{place-content:start;}.place-content-end{place-content:end;}.place-content-between{place-content:space-between;}.place-content-around{place-content:space-around;}.place-content-evenly{place-content:space-evenly;}.place-content-stretch{place-content:stretch;}"]);
exports.PlaceContent = PlaceContent;
var PlaceItems = (0, _styledComponents.css)([".place-items-start{place-items:start;}.place-items-end{place-items:end;}.place-items-center{place-items:center;}.place-items-stretch{place-items:stretch;}"]);
exports.PlaceItems = PlaceItems;
var PlaceSelf = (0, _styledComponents.css)([".place-self-auto{align-self:auto;justify-self:auto;}.place-self-start{align-self:flex-start;justify-self:flex-start;}.place-self-end{align-self:flex-end;justify-self:flex-end;}.place-self-center{align-self:center;justify-self:center;}.place-self-stetch{align-self:stretch;justify-self:stretch;}"]);
exports.PlaceSelf = PlaceSelf;