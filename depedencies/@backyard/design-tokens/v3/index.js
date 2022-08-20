"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scProperties = require("./light/_scProperties");

Object.keys(_scProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _scProperties[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scProperties[key];
    }
  });
});

var _theme = require("./light/_theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});