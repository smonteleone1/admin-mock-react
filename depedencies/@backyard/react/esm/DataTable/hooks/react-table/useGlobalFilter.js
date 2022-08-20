import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["globalFilter"];
// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
import * as React from 'react';
import * as filterTypes from './utils/filterTypes';
import { getFilterMethod, shouldAutoRemoveFilter, getFirstDefined } from './utils/utils';
import { actions, useMountedLayoutEffect, functionalUpdate, useGetLatest } from './utils/publicUtils'; // Actions

actions.resetGlobalFilter = 'resetGlobalFilter';
actions.setGlobalFilter = 'setGlobalFilter';
export var useGlobalFilter = function useGlobalFilter(hooks) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};
useGlobalFilter.pluginName = 'useGlobalFilter';

function reducer(state, action, previousState, instance) {
  if (action.type === actions.resetGlobalFilter) {
    return _extends({}, state, {
      globalFilter: instance.initialState.globalFilter || undefined
    });
  }

  if (action.type === actions.setGlobalFilter) {
    var filterValue = action.filterValue;
    var userFilterTypes = instance.userFilterTypes;
    var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
    var newFilter = functionalUpdate(filterValue, state.globalFilter); //

    if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
      var globalFilter = state.globalFilter,
          stateWithoutGlobalFilter = _objectWithoutProperties(state, _excluded);

      return stateWithoutGlobalFilter;
    }

    return _extends({}, state, {
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
      type: actions.setGlobalFilter,
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
    var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

    if (!filterMethod) {
      console.warn("Could not find a valid 'globalFilter' option.");
      return rows;
    }

    allColumns.forEach(function (column) {
      var columnDisableGlobalFilter = column.disableGlobalFilter;
      column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
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
      _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
      globalFilteredRows = _React$useMemo2[0],
      globalFilteredFlatRows = _React$useMemo2[1],
      globalFilteredRowsById = _React$useMemo2[2];

  var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
  useMountedLayoutEffect(function () {
    if (getAutoResetGlobalFilter()) {
      dispatch({
        type: actions.resetGlobalFilter
      });
    }
  }, [dispatch, manualGlobalFilter ? null : data]);

  _extends(instance, {
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

export default useGlobalFilter;