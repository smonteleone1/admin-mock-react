import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _DataTableHeader, _DataTableBody, _DataTableFooter;

const _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import DataTableContentWrapper from './styles/DataTableContentWrapper';
import DataTableHeader from '../DataTableHeader';
import DataTableBody from '../DataTableBody';
import DataTableFooter from '../DataTableFooter';
import { useDataTable } from '../hooks';
/**
 * Backyard React Data Table Content
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header, body, and footer of the data table, without the toolbar
 */

const DataTableContent = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    getTableProps,
    disableFooter,
    disableScrollbar,
    showToolbar,
    shape
  } = useDataTable();
  return /*#__PURE__*/React.createElement(DataTableContentWrapper, getTableProps(_extends({
    className: classNames(`data-table-content shape--${shape}`, className, disableFooter && 'no-footer', disableScrollbar && 'disable-scrollbar', !showToolbar && 'no-toolbar')
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: `data-table-content-scrollable shape--${shape} no-footer` + (!showToolbar ? " no-toolbar" : "")
  }, _DataTableHeader || (_DataTableHeader = /*#__PURE__*/React.createElement(DataTableHeader, null)), _DataTableBody || (_DataTableBody = /*#__PURE__*/React.createElement(DataTableBody, null))), _DataTableFooter || (_DataTableFooter = /*#__PURE__*/React.createElement(DataTableFooter, null)));
};

export { DataTableContent };
export default DataTableContent;