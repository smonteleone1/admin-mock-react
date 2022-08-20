import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import * as React from 'react';
import classNames from 'classnames';
import { GridRow as RowBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
var Row = /*#__PURE__*/React.forwardRef(function Row(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Row');
  return /*#__PURE__*/React.createElement(RowBase, _extends({
    className: classNames('row', className)
  }, props, {
    ref: ref
  }), children);
});
Row.bdsName = 'Row';
export { Row };
export default Row;