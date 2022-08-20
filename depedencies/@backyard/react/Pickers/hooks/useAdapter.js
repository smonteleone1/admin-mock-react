"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAdapter = exports["default"] = void 0;

var _DateAdapter = _interopRequireDefault(require("../classes/DateAdapter"));

var useAdapter = function useAdapter(options) {
  var adapter = new _DateAdapter["default"](options);
  return adapter;
};

exports.useAdapter = useAdapter;
var _default = useAdapter;
exports["default"] = _default;