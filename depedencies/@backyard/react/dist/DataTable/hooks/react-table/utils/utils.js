"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignColumnAccessor = assignColumnAccessor;
exports.decorateColumn = decorateColumn;
exports.expandRows = expandRows;
exports.findMaxDepth = findMaxDepth;
exports.flattenBy = flattenBy;
exports.flattenColumns = flattenColumns;
exports.getBy = getBy;
exports.getElementDimensions = getElementDimensions;
exports.getFilterMethod = getFilterMethod;
exports.getFirstDefined = getFirstDefined;
exports.isFunction = isFunction;
exports.linkColumnStructure = linkColumnStructure;
exports.makeHeaderGroups = makeHeaderGroups;
exports.passiveEventSupported = passiveEventSupported;
exports.shouldAutoRemoveFilter = shouldAutoRemoveFilter;
exports.unpreparedAccessWarning = unpreparedAccessWarning;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _publicUtils = require("./publicUtils");

// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
// Find the depth of the columns
function findMaxDepth(columns) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return columns.reduce(function (prev, curr) {
    if (curr.columns) {
      return Math.max(prev, findMaxDepth(curr.columns, depth + 1));
    }

    return depth;
  }, 0);
} // Build the visible columns, headers and flat column list


function linkColumnStructure(columns, parent) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return columns.map(function (column) {
    column = (0, _extends2["default"])({}, column, {
      parent: parent,
      depth: depth
    });
    assignColumnAccessor(column);

    if (column.columns) {
      column.columns = linkColumnStructure(column.columns, column, depth + 1);
    }

    return column;
  });
}

function flattenColumns(columns) {
  return flattenBy(columns, 'columns');
}

function assignColumnAccessor(column) {
  // First check for string accessor
  var id = column.id,
      accessor = column.accessor,
      Header = column.Header;

  if (typeof accessor === 'string') {
    id = id || accessor;
    var accessorPath = accessor.split('.');

    accessor = function accessor(row) {
      return getBy(row, accessorPath);
    };
  }

  if (!id && typeof Header === 'string' && Header) {
    id = Header;
  }

  if (!id && column.columns) {
    console.error(column);
    throw new Error('A column ID (or unique "Header" value) is required!');
  }

  if (!id) {
    console.error(column);
    throw new Error('A column ID (or string accessor) is required!');
  }

  (0, _extends2["default"])(column, {
    id: id,
    accessor: accessor
  });
  return column;
}

function decorateColumn(column, userDefaultColumn) {
  if (!userDefaultColumn) {
    throw new Error();
  }

  (0, _extends2["default"])(column, (0, _extends2["default"])({
    // Make sure there is a fallback header, just in case
    Header: _publicUtils.emptyRenderer,
    Footer: _publicUtils.emptyRenderer
  }, _publicUtils.defaultColumn, userDefaultColumn, column));
  (0, _extends2["default"])(column, {
    originalWidth: column.width
  });
  return column;
} // Build the header groups from the bottom up


function makeHeaderGroups(allColumns, defaultColumn) {
  var additionalHeaderProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return {};
  };
  var headerGroups = [];
  var scanColumns = allColumns;
  var uid = 0;

  var getUID = function getUID() {
    return uid++;
  };

  var _loop = function _loop() {
    // The header group we are creating
    var headerGroup = {
      headers: []
    }; // The parent columns we're going to scan next

    var parentColumns = [];
    var hasParents = scanColumns.some(function (d) {
      return d.parent;
    }); // Scan each column for parents

    scanColumns.forEach(function (column) {
      // What is the latest (last) parent column?
      var latestParentColumn = [].concat(parentColumns).reverse()[0];
      var newParent;

      if (hasParents) {
        // If the column has a parent, add it if necessary
        if (column.parent) {
          newParent = (0, _extends2["default"])({}, column.parent, {
            originalId: column.parent.id,
            id: "".concat(column.parent.id, "_").concat(getUID()),
            headers: [column]
          }, additionalHeaderProperties(column));
        } else {
          // If other columns have parents, we'll need to add a place holder if necessary
          var originalId = "".concat(column.id, "_placeholder");
          newParent = decorateColumn((0, _extends2["default"])({
            originalId: originalId,
            id: "".concat(column.id, "_placeholder_").concat(getUID()),
            placeholderOf: column,
            headers: [column]
          }, additionalHeaderProperties(column)), defaultColumn);
        } // If the resulting parent columns are the same, just add
        // the column and increment the header span


        if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
          latestParentColumn.headers.push(column);
        } else {
          parentColumns.push(newParent);
        }
      }

      headerGroup.headers.push(column);
    });
    headerGroups.push(headerGroup); // Start scanning the parent columns

    scanColumns = parentColumns;
  };

  while (scanColumns.length) {
    _loop();
  }

  return headerGroups.reverse();
}

var pathObjCache = new Map();

function getBy(obj, path, def) {
  if (!path) {
    return obj;
  }

  var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

  var pathObj = pathObjCache.get(cacheKey) || function () {
    var pathObj = makePathArray(path);
    pathObjCache.set(cacheKey, pathObj);
    return pathObj;
  }();

  var val;

  try {
    val = pathObj.reduce(function (cursor, pathPart) {
      return cursor[pathPart];
    }, obj);
  } catch (e) {// continue regardless of error
  }

  return typeof val !== 'undefined' ? val : def;
}

function getFirstDefined() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i < args.length; i += 1) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}

function getElementDimensions(element) {
  var rect = element.getBoundingClientRect();
  var style = window.getComputedStyle(element);
  var margins = {
    left: parseInt(style.marginLeft),
    right: parseInt(style.marginRight)
  };
  var padding = {
    left: parseInt(style.paddingLeft),
    right: parseInt(style.paddingRight)
  };
  return {
    left: Math.ceil(rect.left),
    width: Math.ceil(rect.width),
    outerWidth: Math.ceil(rect.width + margins.left + margins.right + padding.left + padding.right),
    marginLeft: margins.left,
    marginRight: margins.right,
    paddingLeft: padding.left,
    paddingRight: padding.right,
    scrollWidth: element.scrollWidth
  };
}

function isFunction(a) {
  if (typeof a === 'function') {
    return a;
  }
}

function flattenBy(arr, key) {
  var flat = [];

  var recurse = function recurse(arr) {
    arr.forEach(function (d) {
      if (!d[key]) {
        flat.push(d);
      } else {
        recurse(d[key]);
      }
    });
  };

  recurse(arr);
  return flat;
}

function expandRows(rows, _ref) {
  var manualExpandedKey = _ref.manualExpandedKey,
      expanded = _ref.expanded,
      _ref$expandSubRows = _ref.expandSubRows,
      expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
  var expandedRows = [];

  var handleRow = function handleRow(row) {
    var addToExpandedRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
    row.canExpand = row.subRows && !!row.subRows.length;

    if (addToExpandedRows) {
      expandedRows.push(row);
    }

    if (row.subRows && row.subRows.length && row.isExpanded) {
      row.subRows.forEach(function (row) {
        return handleRow(row, expandSubRows);
      });
    }
  };

  rows.forEach(function (row) {
    return handleRow(row);
  });
  return expandedRows;
}

function getFilterMethod(filter, userFilterTypes, filterTypes) {
  return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
}

function shouldAutoRemoveFilter(autoRemove, value, column) {
  return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
}

function unpreparedAccessWarning() {
  throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
}

var passiveSupported = null;

function passiveEventSupported() {
  // memoize support to avoid adding multiple test events
  if (typeof passiveSupported === 'boolean') return passiveSupported;
  var supported = false;

  try {
    var options = {
      get passive() {
        supported = true;
        return false;
      }

    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (err) {
    supported = false;
  }

  passiveSupported = supported;
  return passiveSupported;
} //


var reOpenBracket = /\[/g;
var reCloseBracket = /\]/g;

function makePathArray(obj) {
  return flattenDeep(obj) // remove all periods in parts
  .map(function (d) {
    return String(d).replace('.', '_');
  }) // join parts using period
  .join('.') // replace brackets with periods
  .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
  .split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }

  return newArr;
}