import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
export var text = function text(rows, ids, filterValue) {
  rows = rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
    });
  });
  return rows;
};

text.autoRemove = function (val) {
  return !val;
};

export var exactText = function exactText(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
    });
  });
};

exactText.autoRemove = function (val) {
  return !val;
};

export var exactTextCase = function exactTextCase(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
    });
  });
};

exactTextCase.autoRemove = function (val) {
  return !val;
};

export var includes = function includes(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue.includes(filterValue);
    });
  });
};

includes.autoRemove = function (val) {
  return !val || !val.length;
};

export var includesAll = function includesAll(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.every(function (val) {
        return rowValue.includes(val);
      });
    });
  });
};

includesAll.autoRemove = function (val) {
  return !val || !val.length;
};

export var includesSome = function includesSome(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.some(function (val) {
        return rowValue.includes(val);
      });
    });
  });
};

includesSome.autoRemove = function (val) {
  return !val || !val.length;
};

export var includesValue = function includesValue(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return filterValue.includes(rowValue);
    });
  });
};

includesValue.autoRemove = function (val) {
  return !val || !val.length;
};

export var exact = function exact(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id];
      return rowValue === filterValue;
    });
  });
};

exact.autoRemove = function (val) {
  return typeof val === 'undefined';
};

export var equals = function equals(rows, ids, filterValue) {
  return rows.filter(function (row) {
    return ids.some(function (id) {
      var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

      return rowValue == filterValue;
    });
  });
};

equals.autoRemove = function (val) {
  return val == null;
};

export var between = function between(rows, ids, filterValue) {
  var _ref = filterValue || [],
      _ref2 = _slicedToArray(_ref, 2),
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

between.autoRemove = function (val) {
  return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
};