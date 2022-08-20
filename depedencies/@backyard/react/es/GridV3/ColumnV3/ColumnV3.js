import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "start", "end", "direction", "justifyContent", "justifyItems", "alignContent", "alignItems", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { GridColumn as ColumnBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
const ColumnV3 = /*#__PURE__*/React.forwardRef(function Column(_ref, ref) {
  let {
    className,
    children,
    start,
    end,
    justifyContent,
    justifyItems,
    alignItems,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
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