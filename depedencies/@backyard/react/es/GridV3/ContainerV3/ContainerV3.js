import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "container"];
import * as React from 'react';
import classNames from 'classnames';
import { GridContainer as ContainerBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
const ContainerV3 = /*#__PURE__*/React.forwardRef(function Container(_ref, ref) {
  let {
    className,
    children,
    container
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Container');
  return /*#__PURE__*/React.createElement(ContainerBase, _extends({
    className: classNames('container', className, container && `container--${container}`)
  }, props, {
    ref: ref
  }), children);
});
ContainerV3.bdsName = 'Container';
export { ContainerV3 };
export default ContainerV3;