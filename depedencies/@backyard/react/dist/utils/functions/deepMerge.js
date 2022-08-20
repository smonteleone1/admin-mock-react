"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = exports["default"] = exports.deepMerge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isPlainObject = function isPlainObject(item) {
  return item && (0, _typeof2["default"])(item) === 'object' && item.constructor === Object;
};

exports.isPlainObject = isPlainObject;

var deepMerge = function deepMerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? (0, _extends2["default"])({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepMerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
};

exports.deepMerge = deepMerge;
var _default = deepMerge;
exports["default"] = _default;