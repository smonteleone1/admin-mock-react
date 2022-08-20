import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "sm", "md", "lg", "xl"];
import * as React from 'react';
import classNames from 'classnames';
import { GridColumn as ColumnBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
var Column = /*#__PURE__*/React.forwardRef(function Column(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Column');
  var cols = [];

  if (sm) {
    cols.push("sm-".concat(sm));
  }

  if (md) {
    cols.push("md-".concat(md));
  }

  if (lg) {
    cols.push("lg-".concat(lg));
  }

  if (xl) {
    cols.push("xl-".concat(xl));
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