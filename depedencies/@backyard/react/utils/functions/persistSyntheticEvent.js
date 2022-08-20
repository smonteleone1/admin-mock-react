"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistSyntheticEvent = exports["default"] = void 0;

var persistSyntheticEvent = function persistSyntheticEvent(event) {
  if (typeof (event === null || event === void 0 ? void 0 : event.persist) === 'function') {
    event.persist();
  }
};

exports.persistSyntheticEvent = persistSyntheticEvent;
var _default = persistSyntheticEvent;
exports["default"] = _default;