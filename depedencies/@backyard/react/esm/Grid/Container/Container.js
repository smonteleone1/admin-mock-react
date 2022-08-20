import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import * as React from 'react';
import classNames from 'classnames';
import { GridContainer as ContainerBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
var Container = /*#__PURE__*/React.forwardRef(function Container(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Container');
  return /*#__PURE__*/React.createElement(ContainerBase, _extends({
    className: classNames('containers', className)
  }, props, {
    ref: ref
  }), children);
});
Container.bdsName = 'Container';
export { Container };
export default Container;