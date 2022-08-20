import _extends from "@babel/runtime/helpers/esm/extends";
// @todo never do the following...

/* eslint-disable */
// @ts-nocheck

/* istanbul ignore file */
import React from 'react';
import { actions, makePropGetter, ensurePluginOrder, useGetLatest, useMountedLayoutEffect } from './utils/publicUtils';
var pluginName = 'useRowSelect'; // Actions

actions.resetSelectedRows = 'resetSelectedRows';
actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
actions.toggleRowSelected = 'toggleRowSelected';
actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
export var useRowSelect = function useRowSelect(hooks) {
  hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
  hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
  hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
  hooks.prepareRow.push(prepareRow);
};
useRowSelect.pluginName = pluginName;

var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
  var instance = _ref.instance,
      row = _ref.row;
  var _instance$manualRowSe = instance.manualRowSelectedKey,
      manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
  var checked = false;

  if (row.original && row.original[manualRowSelectedKey]) {
    checked = true;
  } else {
    checked = row.isSelected;
  }

  return [props, {
    onChange: function onChange(e) {
      row.toggleRowSelected(e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: checked,
    title: 'Toggle Row Selected',
    indeterminate: row.isSomeSelected
  }];
};

var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
  var instance = _ref2.instance;
  return [props, {
    onChange: function onChange(e) {
      instance.toggleAllRowsSelected(e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: instance.isAllRowsSelected,
    title: 'Toggle All Rows Selected',
    indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
  }];
};

var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
  var instance = _ref3.instance;
  return [props, {
    onChange: function onChange(e) {
      instance.toggleAllPageRowsSelected(e.target.checked);
    },
    style: {
      cursor: 'pointer'
    },
    checked: instance.isAllPageRowsSelected,
    title: 'Toggle All Current Page Rows Selected',
    indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
      var id = _ref4.id;
      return instance.state.selectedRowIds[id];
    }))
  }];
}; // eslint-disable-next-line max-params


function reducer(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _extends({
      selectedRowIds: {}
    }, state);
  }

  if (action.type === actions.resetSelectedRows) {
    return _extends({}, state, {
      selectedRowIds: instance.initialState.selectedRowIds || {}
    });
  }

  if (action.type === actions.toggleAllRowsSelected) {
    var setSelected = action.value;
    var isAllRowsSelected = instance.isAllRowsSelected,
        rowsById = instance.rowsById,
        _instance$nonGroupedR = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
    var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
    //  Leave all the other rows that are selected alone.

    var selectedRowIds = _extends({}, state.selectedRowIds);

    if (selectAll) {
      Object.keys(nonGroupedRowsById).forEach(function (rowId) {
        selectedRowIds[rowId] = true;
      });
    } else {
      Object.keys(nonGroupedRowsById).forEach(function (rowId) {
        delete selectedRowIds[rowId];
      });
    }

    return _extends({}, state, {
      selectedRowIds: selectedRowIds
    });
  }

  if (action.type === actions.toggleRowSelected) {
    var id = action.id,
        _setSelected = action.value;
    var _rowsById = instance.rowsById,
        _instance$selectSubRo = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
        getSubRows = instance.getSubRows;
    var isSelected = state.selectedRowIds[id];
    var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

    if (isSelected === shouldExist) {
      return state;
    }

    var newSelectedRowIds = _extends({}, state.selectedRowIds);

    var handleRowById = function handleRowById(id) {
      var row = _rowsById[id];

      if (row && !row.isGrouped) {
        if (shouldExist) {
          newSelectedRowIds[id] = true;
        } else {
          delete newSelectedRowIds[id];
        }
      }

      if (row && selectSubRows && getSubRows(row)) {
        return getSubRows(row).forEach(function (row) {
          return handleRowById(row.id);
        });
      }
    };

    handleRowById(id);
    return _extends({}, state, {
      selectedRowIds: newSelectedRowIds
    });
  }

  if (action.type === actions.toggleAllPageRowsSelected) {
    var _setSelected2 = action.value;

    var page = instance.page,
        _rowsById2 = instance.rowsById,
        _instance$selectSubRo2 = instance.selectSubRows,
        _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
        isAllPageRowsSelected = instance.isAllPageRowsSelected,
        _getSubRows = instance.getSubRows;

    var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

    var _newSelectedRowIds = _extends({}, state.selectedRowIds);

    var _handleRowById = function _handleRowById(id) {
      var row = _rowsById2[id];

      if (row && !row.isGrouped) {
        if (_selectAll) {
          _newSelectedRowIds[id] = true;
        } else {
          delete _newSelectedRowIds[id];
        }
      }

      if (row && _selectSubRows && _getSubRows(row)) {
        return _getSubRows(row).forEach(function (row) {
          return _handleRowById(row.id);
        });
      }
    };

    page.forEach(function (row) {
      return _handleRowById(row.id);
    });
    return _extends({}, state, {
      selectedRowIds: _newSelectedRowIds
    });
  }

  return state;
}

function useInstance(instance) {
  var data = instance.data,
      rows = instance.rows,
      getHooks = instance.getHooks,
      plugins = instance.plugins,
      rowsById = instance.rowsById,
      _instance$nonGroupedR2 = instance.nonGroupedRowsById,
      nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
      _instance$autoResetSe = instance.autoResetSelectedRows,
      autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
      selectedRowIds = instance.state.selectedRowIds,
      _instance$selectSubRo3 = instance.selectSubRows,
      selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
      dispatch = instance.dispatch,
      page = instance.page,
      getSubRows = instance.getSubRows;
  ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
  var selectedFlatRows = React.useMemo(function () {
    var selectedFlatRows = [];
    rows.forEach(function (row) {
      var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
      row.isSelected = !!isSelected;
      row.isSomeSelected = isSelected === null;

      if (isSelected) {
        selectedFlatRows.push(row);
      }
    });
    return selectedFlatRows;
  }, [rows, selectSubRows, selectedRowIds, getSubRows]);
  var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
  var isAllPageRowsSelected = isAllRowsSelected;

  if (isAllRowsSelected) {
    if (Object.keys(nonGroupedRowsById).some(function (id) {
      return !selectedRowIds[id];
    })) {
      isAllRowsSelected = false;
    }
  }

  if (!isAllRowsSelected) {
    if (page && page.length && page.some(function (_ref5) {
      var id = _ref5.id;
      return !selectedRowIds[id];
    })) {
      isAllPageRowsSelected = false;
    }
  }

  var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
  useMountedLayoutEffect(function () {
    if (getAutoResetSelectedRows()) {
      dispatch({
        type: actions.resetSelectedRows
      });
    }
  }, [dispatch, data]);
  var toggleAllRowsSelected = React.useCallback(function (value) {
    return dispatch({
      type: actions.toggleAllRowsSelected,
      value: value
    });
  }, [dispatch]);
  var toggleAllPageRowsSelected = React.useCallback(function (value) {
    return dispatch({
      type: actions.toggleAllPageRowsSelected,
      value: value
    });
  }, [dispatch]);
  var toggleRowSelected = React.useCallback(function (id, value) {
    return dispatch({
      type: actions.toggleRowSelected,
      id: id,
      value: value
    });
  }, [dispatch]);
  var getInstance = useGetLatest(instance);
  var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
    instance: getInstance()
  });
  var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
    instance: getInstance()
  });

  _extends(instance, {
    selectedFlatRows: selectedFlatRows,
    isAllRowsSelected: isAllRowsSelected,
    isAllPageRowsSelected: isAllPageRowsSelected,
    toggleRowSelected: toggleRowSelected,
    toggleAllRowsSelected: toggleAllRowsSelected,
    getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
    getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
    toggleAllPageRowsSelected: toggleAllPageRowsSelected
  });
}

function prepareRow(row, _ref6) {
  var instance = _ref6.instance;

  row.toggleRowSelected = function (set) {
    return instance.toggleRowSelected(row.id, set);
  };

  row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
    instance: instance,
    row: row
  });
}

function getRowIsSelected(row, selectedRowIds, getSubRows) {
  if (selectedRowIds[row.id]) {
    return true;
  }

  var subRows = getSubRows(row);

  if (subRows && subRows.length) {
    var allChildrenSelected = true;
    var someSelected = false;
    subRows.forEach(function (subRow) {
      // Bail out early if we know both of these
      if (someSelected && !allChildrenSelected) {
        return;
      }

      if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    });
    return allChildrenSelected ? true : someSelected ? null : false;
  }

  return false;
}

export default useRowSelect;