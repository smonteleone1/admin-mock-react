import _extends from "@babel/runtime/helpers/esm/extends";

var _ChevronDown, _ChevronRight, _ChevronDown2, _ChevronRight2;

import * as React from 'react';
import styled from 'styled-components';
import ChevronDown from '@backyard/icons/ChevronDown';
import ChevronRight from '@backyard/icons/ChevronRight';
import IconButton from '../../IconButton';
const ExpandColumnWrapper = styled.div.withConfig({
  displayName: "useExpandColumn__ExpandColumnWrapper",
  componentId: "sc-1x37w8p-0"
})(["&&& > .cell-content{display:flex;align-items:center;justify-content:center;}"]);
const baseExpandButtonProps = {
  variant: 'ghost',
  color: 'interactive',
  size: 'extra_small',
  shape: 'rounded'
};

const useExpandColumn = (theme, enableRowExpansion) => {
  const addExpandColumn = hooks => {
    hooks.visibleColumns.push(columns => [{
      id: 'expansion',
      Header: ({
        getToggleAllRowsExpandedProps,
        isAllRowsExpanded
      }) => {
        return /*#__PURE__*/React.createElement(IconButton, _extends({}, baseExpandButtonProps, getToggleAllRowsExpandedProps()), isAllRowsExpanded ? _ChevronDown || (_ChevronDown = /*#__PURE__*/React.createElement(ChevronDown, null)) : _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)));
      },
      Cell: ({
        row
      }) => {
        return row.canExpand ? /*#__PURE__*/React.createElement(IconButton, _extends({}, baseExpandButtonProps, row.getToggleRowExpandedProps()), row.isExpanded ? _ChevronDown2 || (_ChevronDown2 = /*#__PURE__*/React.createElement(ChevronDown, null)) : _ChevronRight2 || (_ChevronRight2 = /*#__PURE__*/React.createElement(ChevronRight, null))) : null;
      },
      Filter: () => null,
      width: theme.sizes.size_56,
      minWidth: theme.sizes.size_56,
      maxWidth: theme.sizes.size_56,
      Wrapper: ExpandColumnWrapper
    }, ...columns]);
  };

  return enableRowExpansion ? addExpandColumn : () => null;
};

export { useExpandColumn };
export default useExpandColumn;