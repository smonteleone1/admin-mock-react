import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _DataTableToolbar, _DataTableContent;

const _excluded = ["children", "className", "height", "style"];
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

const DataTableBase = _ref => {
  let {
    className,
    height,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    showToolbar,
    shape
  } = useDataTable();
  return /*#__PURE__*/React.createElement(DataTableBaseWrapper, _extends({
    className: classNames(`data-table shape--${shape}`, className),
    style: _extends({
      height
    }, style)
  }, props), showToolbar && (_DataTableToolbar || (_DataTableToolbar = /*#__PURE__*/React.createElement(DataTableToolbar, null))), _DataTableContent || (_DataTableContent = /*#__PURE__*/React.createElement(DataTableContent, null)));
};

export { DataTableBase };
export default DataTableBase;