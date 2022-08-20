"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.includesValue = exports.includesSome = exports.includesAll = exports.includes = exports.exactTextCase = exports.exactText = exports.exact = exports.equals = exports.between = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
var text = function text(rows, ids, filterValue) {
  rows = rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
    });
  });
  return rows;
};

exports.text = text;

text.autoRemove = function (val) {
  return !val;
};

var exactText = function exactText(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
    });
  });
};

exports.exactText = exactText;

exactText.autoRemove = function (val) {
  return !val;
};

var exactTextCase = function exactTextCase(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
    });
  });
};

exports.exactTextCase = exactTextCase;

exactTextCase.autoRemove = function (val) {
  return !val;
};

var includes = function includes(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue.includes(filterValue);
    });
  });
};

exports.includes = includes;

includes.autoRemove = function (val) {
  return !val || !val.length;
};

var includesAll = function includesAll(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.every(function (val) {
        return rowValue.includes(val);
      });
    });
  });
};

exports.includesAll = includesAll;

includesAll.autoRemove = function (val) {
  return !val || !val.length;
};

var includesSome = function includesSome(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.some(function (val) {
        return rowValue.includes(val);
      });
    });
  });
};

exports.includesSome = includesSome;

includesSome.autoRemove = function (val) {
  return !val || !val.length;
};

var includesValue = function includesValue(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return filterValue.includes(rowValue);
    });
  });
};

exports.includesValue = includesValue;

includesValue.autoRemove = function (val) {
  return !val || !val.length;
};

var exact = function exact(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue === filterValue;
    });
  });
};

exports.exact = exact;

exact.autoRemove = function (val) {
  return typeof val === 'undefined';
};

var equals = function equals(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

      return rowValue == filterValue;
    });
  });
};

exports.equals = equals;

equals.autoRemove = function (val) {
  return val == null;
};

var between = function between(rows, ids, filterValue) {
  var _ref = filterValue || [],
      _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;

  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }

  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue >= min && rowValue <= max;
    });
  });
};

exports.between = between;

between.autoRemove = function (val) {
  return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
};