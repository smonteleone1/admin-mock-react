"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFilters = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var filterTypes = _interopRequireWildcard(require("./utils/filterTypes"));

var _utils = require("./utils/utils");

var _publicUtils = require("./utils/publicUtils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
// Actions
_publicUtils.actions.resetFilters = 'resetFilters';
_publicUtils.actions.setFilter = 'setFilter';
_publicUtils.actions.setAllFilters = 'setAllFilters';

var useFilters = function useFilters(hooks) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};

exports.useFilters = useFilters;
useFilters.pluginName = 'useFilters';

function reducer(state, action, previousState, instance) {
  if (action.type === _publicUtils.actions.init) {
    return (0, _extends2["default"])({
      filters: []
    }, state);
  }

  if (action.type === _publicUtils.actions.resetFilters) {
    return (0, _extends2["default"])({}, state, {
      filters: instance.initialState.filters || []
    });
  }

  if (action.type === _publicUtils.actions.setFilter) {
    var columnId = action.columnId,
        filterValue = action.filterValue;
    var allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes;
    var column = allColumns.find(function (d) {
      return d.id === columnId;
    });

    if (!column) {
      throw new Error("React-Table: Could not find a column with id: ".concat(columnId));
    }

    var filterMethod = (0, _utils.getFilterMethod)(column.filter, userFilterTypes || {}, filterTypes);
    var previousfilter = state.filters.find(function (d) {
      return d.id === columnId;
    });
    var newFilter = (0, _publicUtils.functionalUpdate)(filterValue, previousfilter && previousfilter.value); //

    if ((0, _utils.shouldAutoRemoveFilter)(filterMethod.autoRemove, newFilter, column)) {
      return (0, _extends2["default"])({}, state, {
        filters: state.filters.filter(function (d) {
          return d.id !== columnId;
        })
      });
    }

    if (previousfilter) {
      return (0, _extends2["default"])({}, state, {
        filters: state.filters.map(function (d) {
          if (d.id === columnId) {
            return {
              id: columnId,
              value: newFilter
            };
          }

          return d;
        })
      });
    }

    return (0, _extends2["default"])({}, state, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [{
        id: columnId,
        value: newFilter
      }])
    });
  }

  if (action.type === _publicUtils.actions.setAllFilters) {
    var filters = action.filters;
    var _allColumns = instance.allColumns,
        _userFilterTypes = instance.filterTypes;
    return (0, _extends2["default"])({}, state, {
      // Filter out undefined values
      filters: (0, _publicUtils.functionalUpdate)(filters, state.filters).filter(function (filter) {
        var column = _allColumns.find(function (d) {
          return d.id === filter.id;
        });

        var filterMethod = (0, _utils.getFilterMethod)(column.filter, _userFilterTypes || {}, filterTypes);

        if ((0, _utils.shouldAutoRemoveFilter)(filterMethod.autoRemove, filter.value, column)) {
          return false;
        }

        return true;
      })
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
      manualFilters = instance.manualFilters,
      _instance$defaultCanF = instance.defaultCanFilter,
      defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
      disableFilters = instance.disableFilters,
      filters = instance.state.filters,
      dispatch = instance.dispatch,
      _instance$autoResetFi = instance.autoResetFilters,
      autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;

  var setFilter = _react["default"].useCallback(function (columnId, filterValue) {
    dispatch({
      type: _publicUtils.actions.setFilter,
      columnId: columnId,
      filterValue: filterValue
    });
  }, [dispatch]);

  var setAllFilters = _react["default"].useCallback(function (filters) {
    dispatch({
      type: _publicUtils.actions.setAllFilters,
      filters: filters
    });
  }, [dispatch]);

  allColumns.forEach(function (column) {
    var id = column.id,
        accessor = column.accessor,
        columnDefaultCanFilter = column.defaultCanFilter,
        columnDisableFilters = column.disableFilters; // Determine if a column is filterable

    column.canFilter = accessor ? (0, _utils.getFirstDefined)(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : (0, _utils.getFirstDefined)(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

    column.setFilter = function (val) {
      return setFilter(column.id, val);
    }; // Provide the current filter value to the column for
    // convenience


    var found = filters.find(function (d) {
      return d.id === id;
    });
    column.filterValue = found && found.value;
  });

  var _React$useMemo = _react["default"].useMemo(function () {
    if (manualFilters || !filters.length) {
      return [rows, flatRows, rowsById];
    }

    var filteredFlatRows = [];
    var filteredRowsById = {}; // Filters top level and nested rows

    // Filters top level and nested rows
    var filterRows = function filterRows(rows) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var filteredRows = rows;
      filteredRows = filters.reduce(function (filteredSoFar, _ref) {
        var columnId = _ref.id,
            filterValue = _ref.value;
        // Find the filters column
        var column = allColumns.find(function (d) {
          return d.id === columnId;
        });

        if (!column) {
          return filteredSoFar;
        }

        if (depth === 0) {
          column.preFilteredRows = filteredSoFar;
        }

        var filterMethod = (0, _utils.getFilterMethod)(column.filter, userFilterTypes || {}, filterTypes);

        if (!filterMethod) {
          console.warn("Could not find a valid 'column.filter' for column with the ID: ".concat(column.id, "."));
          return filteredSoFar;
        } // Pass the rows, id, filterValue and column to the filterMethod
        // to get the filtered rows back


        // Pass the rows, id, filterValue and column to the filterMethod
        // to get the filtered rows back
        column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
        return column.filteredRows;
      }, rows); // Apply the filter to any subRows
      // We technically could do this recursively in the above loop,
      // but that would severely hinder the API for the user, since they
      // would be required to do that recursion in some scenarios

      // Apply the filter to any subRows
      // We technically could do this recursively in the above loop,
      // but that would severely hinder the API for the user, since they
      // would be required to do that recursion in some scenarios
      filteredRows.forEach(function (row) {
        filteredFlatRows.push(row);
        filteredRowsById[row.id] = row;

        if (!row.subRows) {
          return;
        } // row.subRows =
        //     row.subRows && row.subRows.length > 0
        //         ? filterRows(row.subRows, depth + 1)
        //         : row.subRows

      });
      return filteredRows;
    };

    return [filterRows(rows), filteredFlatRows, filteredRowsById];
  }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
      _React$useMemo2 = (0, _slicedToArray2["default"])(_React$useMemo, 3),
      filteredRows = _React$useMemo2[0],
      filteredFlatRows = _React$useMemo2[1],
      filteredRowsById = _React$useMemo2[2];

  _react["default"].useMemo(function () {
    // Now that each filtered column has it's partially filtered rows,
    // lets assign the final filtered rows to all of the other columns
    var nonFilteredColumns = allColumns.filter(function (column) {
      return !filters.find(function (d) {
        return d.id === column.id;
      });
    }); // This essentially enables faceted filter options to be built easily
    // using every column's preFilteredRows value

    nonFilteredColumns.forEach(function (column) {
      column.preFilteredRows = filteredRows;
      column.filteredRows = filteredRows;
    });
  }, [filteredRows, filters, allColumns]);

  var getAutoResetFilters = (0, _publicUtils.useGetLatest)(autoResetFilters);
  (0, _publicUtils.useMountedLayoutEffect)(function () {
    if (getAutoResetFilters()) {
      dispatch({
        type: _publicUtils.actions.resetFilters
      });
    }
  }, [dispatch, manualFilters ? null : data]);
  (0, _extends2["default"])(instance, {
    preFilteredRows: rows,
    preFilteredFlatRows: flatRows,
    preFilteredRowsById: rowsById,
    filteredRows: filteredRows,
    filteredFlatRows: filteredFlatRows,
    filteredRowsById: filteredRowsById,
    rows: filteredRows,
    flatRows: filteredFlatRows,
    rowsById: filteredRowsById,
    setFilter: setFilter,
    setAllFilters: setAllFilters
  });
}

var _default = useFilters;
exports["default"] = _default;