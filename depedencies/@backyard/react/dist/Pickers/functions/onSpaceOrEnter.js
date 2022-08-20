"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSpaceOrEnter = exports["default"] = void 0;

var onSpaceOrEnter = function onSpaceOrEnter(innerFn, onFocus) {
  return function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      innerFn(); // prevent any side effects

      event.preventDefault();
      event.stopPropagation();
    }

    if (onFocus) {
      onFocus(event);
    }
  };
};

exports.onSpaceOrEnter = onSpaceOrEnter;
var _default = onSpaceOrEnter;
exports["default"] = _default;