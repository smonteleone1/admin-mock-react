import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["indeterminate", "checked"];
import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '../../Checkbox';
const SelectColumnWrapper = styled.div.withConfig({
  displayName: "useSelectColumn__SelectColumnWrapper",
  componentId: "sc-5ixt1m-0"
})(["&&& > .cell-content{display:flex;align-items:center;justify-content:center;}"]);

const useSelectColumn = (theme, enableRowSelection) => {
  const addSelectColumn = hooks => {
    hooks.visibleColumns.push(columns => [{
      id: 'selection',
      Header: ({
        getToggleAllPageRowsSelectedProps
      }) => {
        const _getToggleAllPageRows = getToggleAllPageRowsSelectedProps({
          className: 'row-selection-all'
        }),
              {
          indeterminate,
          checked
        } = _getToggleAllPageRows,
              props = _objectWithoutPropertiesLoose(_getToggleAllPageRows, _excluded);

        return /*#__PURE__*/React.createElement(Checkbox, _extends({
          checked: checked || indeterminate,
          indeterminate: indeterminate
        }, props));
      },
      Cell: ({
        row
      }) => {
        const isSubRow = row.id.indexOf('.') > -1;
        return !isSubRow ? /*#__PURE__*/React.createElement(Checkbox, row.getToggleRowSelectedProps({
          className: 'row-selection'
        })) : null;
      },
      Filter: () => null,
      width: theme.sizes.size_56,
      minWidth: theme.sizes.size_56,
      maxWidth: theme.sizes.size_56,
      Wrapper: SelectColumnWrapper
    }, ...columns]);
  };

  return enableRowSelection ? addSelectColumn : () => null;
};

export { useSelectColumn };
export default useSelectColumn;