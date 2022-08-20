"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenOptions = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _excluded = ["children", "options"];

var flattenOptions = function flattenOptions(options, parent) {
  return options.reduce(function (opts, opt, index) {
    var children = opt.children,
        options = opt.options,
        option = (0, _objectWithoutProperties2["default"])(opt, _excluded);
    opts.push((0, _extends2["default"])({
      'data-option-id': parent > -1 ? "".concat(parent, "-").concat(index) : "".concat(index)
    }, option));

    if (options) {
      opts.push(flattenOptions(options, index));
    }

    return opts.flat();
  }, []);
};

exports.flattenOptions = flattenOptions;
var _default = flattenOptions;
exports["default"] = _default;