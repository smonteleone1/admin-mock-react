"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ownerDocument = exports["default"] = void 0;

var ownerDocument = function ownerDocument(node) {
  return node && node.ownerDocument || document;
};

exports.ownerDocument = ownerDocument;
var _default = ownerDocument;
exports["default"] = _default;