"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.contains = void 0;

var contains = function contains(rows, id, filterValue) {
  if (rows && id && typeof filterValue !== 'undefined') {
    return rows.filter(function (row) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? rowValue.includes(filterValue) : false;
    });
  }

  return false;
};

exports.contains = contains;
var _default = contains;
exports["default"] = _default;