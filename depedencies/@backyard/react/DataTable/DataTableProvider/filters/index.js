"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contains = require("./contains");

Object.keys(_contains).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _contains[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contains[key];
    }
  });
});

var _equals = require("./equals");

Object.keys(_equals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _equals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _equals[key];
    }
  });
});

var _startsWith = require("./startsWith");

Object.keys(_startsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startsWith[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _startsWith[key];
    }
  });
});