"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEquals = require("./arrayEquals");

Object.keys(_arrayEquals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _arrayEquals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _arrayEquals[key];
    }
  });
});

var _clampOption = require("./clampOption");

Object.keys(_clampOption).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _clampOption[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clampOption[key];
    }
  });
});

var _flattenOptions = require("./flattenOptions");

Object.keys(_flattenOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _flattenOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _flattenOptions[key];
    }
  });
});

var _getOptions = require("./getOptions");

Object.keys(_getOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getOptions[key];
    }
  });
});