"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGlobalFilter = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var filterTypes = _interopRequireWildcard(require("./utils/filterTypes"));

var _utils = require("./utils/utils");

var _publicUtils = require("./utils/publicUtils");

var _excluded = ["globalFilter"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Actions
_publicUtils.actions.resetGlobalFilter = 'resetGlobalFilter';
_publicUtils.actions.setGlobalFilter = 'setGlobalFilter';

var useGlobalFilter = function useGlobalFilter(hooks) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};

exports.useGlobalFilter = useGlobalFilter;
useGlobalFilter.pluginName = 'useGlobalFilter';

function reducer(state, action, previousState, instance) {
  if (action.type === _publicUtils.actions.resetGlobalFilter) {
    return (0, _extends2["default"])({}, state, {
      globalFilter: instance.initialState.globalFilter || undefined
    });
  }

  if (action.type === _publicUtils.actions.setGlobalFilter) {
    var filterValue = action.filterValue;
    var userFilterTypes = instance.userFilterTypes;
    var filterMethod = (0, _utils.getFilterMethod)(instance.globalFilter, userFilterTypes || {}, filterTypes);
    var newFilter = (0, _publicUtils.functionalUpdate)(filterValue, state.globalFilter); //

    if ((0, _utils.shouldAutoRemoveFilter)(filterMethod.autoRemove, newFilter)) {
      var globalFilter = state.globalFilter,
          stateWithoutGlobalFilter = (0, _objectWithoutProperties2["default"])(state, _excluded);
      return stateWithoutGlobalFilter;
    }

    return (0, _extends2["default"])({}, state, {
      globalFilter: newFilter
    });
  }
}

function useInstance(instance) {
  var data = instance.data,
      rows = instance.rows,
      flatRows = instance.flatRows,
      rowsById = instance.rowsById,
      allColumns = instance.allColumns,
      userFilterTypes = instance.filterTypes,
      globalFilter = instance.globalFilter,
      manualGlobalFilter = instance.manualGlobalFilter,
      globalFilterValue = instance.state.globalFilter,
      dispatch = instance.dispatch,
      _instance$autoResetGl = instance.autoResetGlobalFilter,
      autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
      disableGlobalFilter = instance.disableGlobalFilter;
  var setGlobalFilter = React.useCallback(function (filterValue) {
    dispatch({
      type: _publicUtils.actions.setGlobalFilter,
      filterValue: filterValue
    });
  }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
  // This gets pretty complicated pretty fast, since you have to maintain a
  // cache for each row group (top-level rows, and each row's recursive subrows)
  // This would make multi-filtering a lot faster though. Too far?

  var _React$useMemo = React.useMemo(function () {
    if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
      return [rows, flatRows, rowsById];
    }

    var filteredFlatRows = [];
    var filteredRowsById = {};
    var filterMethod = (0, _utils.getFilterMethod)(globalFilter, userFilterTypes || {}, filterTypes);

    if (!filterMethod) {
      console.warn("Could not find a valid 'globalFilter' option.");
      return rows;
    }

    allColumns.forEach(function (column) {
      var columnDisableGlobalFilter = column.disableGlobalFilter;
      column.canFilter = (0, _utils.getFirstDefined)(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
    });
    var filterableColumns = allColumns.filter(function (c) {
      return c.canFilter === true;
    }); // Filters top level and nested rows

    // Filters top level and nested rows
    var filterRows = function filterRows(filteredRows) {
      filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
        return d.id;
      }), globalFilterValue);
      filteredRows.forEach(function (row) {
        filteredFlatRows.push(row);
        filteredRowsById[row.id] = row; // row.subRows =
        //     row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows
      });
      return filteredRows;
    };

    return [filterRows(rows), filteredFlatRows, filteredRowsById];
  }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
      _React$useMemo2 = (0, _slicedToArray2["default"])(_React$useMemo, 3),
      globalFilteredRows = _React$useMemo2[0],
      globalFilteredFlatRows = _React$useMemo2[1],
      globalFilteredRowsById = _React$useMemo2[2];

  var getAutoResetGlobalFilter = (0, _publicUtils.useGetLatest)(autoResetGlobalFilter);
  (0, _publicUtils.useMountedLayoutEffect)(function () {
    if (getAutoResetGlobalFilter()) {
      dispatch({
        type: _publicUtils.actions.resetGlobalFilter
      });
    }
  }, [dispatch, manualGlobalFilter ? null : data]);
  (0, _extends2["default"])(instance, {
    preGlobalFilteredRows: rows,
    preGlobalFilteredFlatRows: flatRows,
    preGlobalFilteredRowsById: rowsById,
    globalFilteredRows: globalFilteredRows,
    globalFilteredFlatRows: globalFilteredFlatRows,
    globalFilteredRowsById: globalFilteredRowsById,
    rows: globalFilteredRows,
    flatRows: globalFilteredFlatRows,
    rowsById: globalFilteredRowsById,
    setGlobalFilter: setGlobalFilter,
    disableGlobalFilter: disableGlobalFilter
  });
}

var _default = useGlobalFilter;
exports["default"] = _default;