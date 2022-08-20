import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "start", "end", "direction", "justifyContent", "justifyItems", "alignContent", "alignItems", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { GridColumn as ColumnBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
var ColumnV3 = /*#__PURE__*/React.forwardRef(function Column(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      start = _ref.start,
      end = _ref.end,
      direction = _ref.direction,
      justifyContent = _ref.justifyContent,
      justifyItems = _ref.justifyItems,
      alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Column');
  return /*#__PURE__*/React.createElement(ColumnBase, _extends({
    className: classNames('col', className),
    style: _extends({
      '--col-start': start,
      '--col-end': end,
      '--justify-content': justifyContent,
      '--justify-items': justifyItems,
      '--align-content': alignItems,
      '--align-items': alignItems
    }, style)
  }, props, {
    ref: ref
  }), children);
});
ColumnV3.bdsName = 'Column';
export { ColumnV3 };
export default ColumnV3;