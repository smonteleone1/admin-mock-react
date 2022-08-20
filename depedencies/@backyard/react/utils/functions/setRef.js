"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRef = exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var setRef = function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

exports.setRef = setRef;
var _default = setRef;
exports["default"] = _default;