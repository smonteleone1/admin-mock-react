"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForwardedRef = exports["default"] = void 0;

var _react = require("react");

/* eslint-disable consistent-return, no-else-return, no-param-reassign */
var useForwardedRef = function useForwardedRef(forwardedRef) {
  var innerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!forwardedRef) {
      return;
    }

    if (typeof forwardedRef === 'function') {
      return forwardedRef(innerRef.current);
    } else {
      forwardedRef.current = innerRef.current;
    }
  });
  return innerRef;
};

exports.useForwardedRef = useForwardedRef;
var _default = useForwardedRef;
exports["default"] = _default;