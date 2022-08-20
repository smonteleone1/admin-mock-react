import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var _excluded = ["indeterminate", "checked"];
import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '../../Checkbox';
var SelectColumnWrapper = styled.div.withConfig({
  displayName: "useSelectColumn__SelectColumnWrapper",
  componentId: "sc-5ixt1m-0"
})(["&&& > .cell-content{display:flex;align-items:center;justify-content:center;}"]);

var useSelectColumn = function useSelectColumn(theme, enableRowSelection) {
  var addSelectColumn = function addSelectColumn(hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [{
        id: 'selection',
        Header: function Header(_ref) {
          var getToggleAllPageRowsSelectedProps = _ref.getToggleAllPageRowsSelectedProps;

          var _getToggleAllPageRows = getToggleAllPageRowsSelectedProps({
            className: 'row-selection-all'
          }),
              indeterminate = _getToggleAllPageRows.indeterminate,
              checked = _getToggleAllPageRows.checked,
              props = _objectWithoutProperties(_getToggleAllPageRows, _excluded);

          return /*#__PURE__*/React.createElement(Checkbox, _extends({
            checked: checked || indeterminate,
            indeterminate: indeterminate
          }, props));
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          var isSubRow = row.id.indexOf('.') > -1;
          return !isSubRow ? /*#__PURE__*/React.createElement(Checkbox, row.getToggleRowSelectedProps({
            className: 'row-selection'
          })) : null;
        },
        Filter: function Filter() {
          return null;
        },
        width: theme.sizes.size_56,
        minWidth: theme.sizes.size_56,
        maxWidth: theme.sizes.size_56,
        Wrapper: SelectColumnWrapper
      }].concat(_toConsumableArray(columns));
    });
  };

  return enableRowSelection ? addSelectColumn : function () {
    return null;
  };
};

export { useSelectColumn };
export default useSelectColumn;