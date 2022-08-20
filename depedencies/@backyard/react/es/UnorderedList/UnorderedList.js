import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "density", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import { UnorderedListWrapper } from './styles/UnorderedListWrapper';
const UnorderedList = /*#__PURE__*/React.forwardRef(function UnorderedList(_ref, ref) {
  let {
    children,
    density,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'UnorderedList');
  return /*#__PURE__*/React.createElement(UnorderedListWrapper, _extends({
    className: classNames(className, density && `density--${density}`),
    ref: ref
  }, props), children);
});
UnorderedList.bdsName = 'UnorderedList';
export { UnorderedList };
export default UnorderedList;