import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children"];
import * as React from 'react';
import classNames from 'classnames';
import { GridContainer as ContainerBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
const Container = /*#__PURE__*/React.forwardRef(function Container(_ref, ref) {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
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