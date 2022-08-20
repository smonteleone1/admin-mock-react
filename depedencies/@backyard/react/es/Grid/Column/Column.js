import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "sm", "md", "lg", "xl"];
import * as React from 'react';
import classNames from 'classnames';
import { GridColumn as ColumnBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
const Column = /*#__PURE__*/React.forwardRef(function Column(_ref, ref) {
  let {
    className,
    children,
    sm,
    md,
    lg,
    xl
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Column');
  const cols = [];

  if (sm) {
    cols.push(`sm-${sm}`);
  }

  if (md) {
    cols.push(`md-${md}`);
  }

  if (lg) {
    cols.push(`lg-${lg}`);
  }

  if (xl) {
    cols.push(`xl-${xl}`);
  }

  return /*#__PURE__*/React.createElement(ColumnBase, _extends({
    className: classNames('col', className, cols)
  }, props, {
    ref: ref
  }), children);
});
Column.bdsName = 'Column';
export { Column };
export default Column;