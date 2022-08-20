import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _DataTableHeader, _DataTableBody, _DataTableFooter;

var _excluded = ["children", "className"];
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

var DataTableContent = function DataTableContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useDataTable = useDataTable(),
      getTableProps = _useDataTable.getTableProps,
      disableFooter = _useDataTable.disableFooter,
      disableScrollbar = _useDataTable.disableScrollbar,
      showToolbar = _useDataTable.showToolbar,
      shape = _useDataTable.shape;

  return /*#__PURE__*/React.createElement(DataTableContentWrapper, getTableProps(_extends({
    className: classNames("data-table-content shape--".concat(shape), className, disableFooter && 'no-footer', disableScrollbar && 'disable-scrollbar', !showToolbar && 'no-toolbar')
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: "data-table-content-scrollable shape--".concat(shape, " no-footer") + (!showToolbar ? " no-toolbar" : "")
  }, _DataTableHeader || (_DataTableHeader = /*#__PURE__*/React.createElement(DataTableHeader, null)), _DataTableBody || (_DataTableBody = /*#__PURE__*/React.createElement(DataTableBody, null))), _DataTableFooter || (_DataTableFooter = /*#__PURE__*/React.createElement(DataTableFooter, null)));
};

export { DataTableContent };
export default DataTableContent;