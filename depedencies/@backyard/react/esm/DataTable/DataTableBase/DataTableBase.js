import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _DataTableToolbar, _DataTableContent;

var _excluded = ["children", "className", "height", "style"];
import * as React from 'react';
import classNames from 'classnames';
import DataTableBaseWrapper from './styles/DataTableBaseWrapper';
import DataTableToolbar from '../DataTableToolbar';
import DataTableContent from '../DataTableContent';
import { useDataTable } from '../hooks';
/**
 * Backyard React Data Table Base
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 */

var DataTableBase = function DataTableBase(_ref) {
  var children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useDataTable = useDataTable(),
      showToolbar = _useDataTable.showToolbar,
      shape = _useDataTable.shape;

  return /*#__PURE__*/React.createElement(DataTableBaseWrapper, _extends({
    className: classNames("data-table shape--".concat(shape), className),
    style: _extends({
      height: height
    }, style)
  }, props), showToolbar && (_DataTableToolbar || (_DataTableToolbar = /*#__PURE__*/React.createElement(DataTableToolbar, null))), _DataTableContent || (_DataTableContent = /*#__PURE__*/React.createElement(DataTableContent, null)));
};

export { DataTableBase };
export default DataTableBase;