import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
import React from 'react';
import * as filterTypes from './utils/filterTypes';
import { getFirstDefined, getFilterMethod, shouldAutoRemoveFilter } from './utils/utils';
import { actions, useGetLatest, functionalUpdate, useMountedLayoutEffect } from './utils/publicUtils'; // Actions

actions.resetFilters = 'resetFilters';
actions.setFilter = 'setFilter';
actions.setAllFilters = 'setAllFilters';
export var useFilters = function useFilters(hooks) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};
useFilters.pluginName = 'useFilters';

function reducer(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _extends({
      filters: []
    }, state);
  }

  if (action.type === actions.resetFilters) {
    return _extends({}, state, {
      filters: instance.initialState.filters || []
    });
  }

  if (action.type === actions.setFilter) {
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

    var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
    var previousfilter = state.filters.find(function (d) {
      return d.id === columnId;
    });
    var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

    if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
      return _extends({}, state, {
        filters: state.filters.filter(function (d) {
          return d.id !== columnId;
        })
      });
    }

    if (previousfilter) {
      return _extends({}, state, {
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

    return _extends({}, state, {
      filters: [].concat(_toConsumableArray(state.filters), [{
        id: columnId,
        value: newFilter
      }])
    });
  }

  if (action.type === actions.setAllFilters) {
    var filters = action.filters;
    var _allColumns = instance.allColumns,
        _userFilterTypes = instance.filterTypes;
    return _extends({}, state, {
      // Filter out undefined values
      filters: functionalUpdate(filters, state.filters).filter(function (filter) {
        var column = _allColumns.find(function (d) {
          return d.id === filter.id;
        });

        var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

        if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
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
  var setFilter = React.useCallback(function (columnId, filterValue) {
    dispatch({
      type: actions.setFilter,
      columnId: columnId,
      filterValue: filterValue
    });
  }, [dispatch]);
  var setAllFilters = React.useCallback(function (filters) {
    dispatch({
      type: actions.setAllFilters,
      filters: filters
    });
  }, [dispatch]);
  allColumns.forEach(function (column) {
    var id = column.id,
        accessor = column.accessor,
        columnDefaultCanFilter = column.defaultCanFilter,
        columnDisableFilters = column.disableFilters; // Determine if a column is filterable

    column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

    column.setFilter = function (val) {
      return setFilter(column.id, val);
    }; // Provide the current filter value to the column for
    // convenience


    var found = filters.find(function (d) {
      return d.id === id;
    });
    column.filterValue = found && found.value;
  });

  var _React$useMemo = React.useMemo(function () {
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

        var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

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
      _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
      filteredRows = _React$useMemo2[0],
      filteredFlatRows = _React$useMemo2[1],
      filteredRowsById = _React$useMemo2[2];

  React.useMemo(function () {
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
  var getAutoResetFilters = useGetLatest(autoResetFilters);
  useMountedLayoutEffect(function () {
    if (getAutoResetFilters()) {
      dispatch({
        type: actions.resetFilters
      });
    }
  }, [dispatch, manualFilters ? null : data]);

  _extends(instance, {
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

export default useFilters;