"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = exports["default"] = void 0;

var startsWith = function startsWith(rows, id, filterValue) {
  if (rows && id && typeof filterValue !== 'undefined') {
    return rows.filter(function (row) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue).startsWith(String(filterValue)) : false;
    });
  }

  return false;
};

exports.startsWith = startsWith;
var _default = startsWith;
exports["default"] = _default;