import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "container"];
import * as React from 'react';
import classNames from 'classnames';
import { GridContainer as ContainerBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
var ContainerV3 = /*#__PURE__*/React.forwardRef(function Container(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      container = _ref.container,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Container');
  return /*#__PURE__*/React.createElement(ContainerBase, _extends({
    className: classNames('container', className, container && "container--".concat(container))
  }, props, {
    ref: ref
  }), children);
});
ContainerV3.bdsName = 'Container';
export { ContainerV3 };
export default ContainerV3;