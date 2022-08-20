"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equals = exports["default"] = void 0;

var equals = function equals(rows, id, filterValue) {
  if (rows && id && typeof filterValue !== 'undefined') {
    return rows.filter(function (row) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? rowValue === filterValue : false;
    });
  }

  return false;
};

exports.equals = equals;
var _default = equals;
exports["default"] = _default;