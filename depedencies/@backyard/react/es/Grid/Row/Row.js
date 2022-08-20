import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children"];
import * as React from 'react';
import classNames from 'classnames';
import { GridRow as RowBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
const Row = /*#__PURE__*/React.forwardRef(function Row(_ref, ref) {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
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