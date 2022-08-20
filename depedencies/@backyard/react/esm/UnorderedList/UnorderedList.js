import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "density", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import { UnorderedListWrapper } from './styles/UnorderedListWrapper';
var UnorderedList = /*#__PURE__*/React.forwardRef(function UnorderedList(_ref, ref) {
  var children = _ref.children,
      density = _ref.density,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'UnorderedList');
  return /*#__PURE__*/React.createElement(UnorderedListWrapper, _extends({
    className: classNames(className, density && "density--".concat(density)),
    ref: ref
  }, props), children);
});
UnorderedList.bdsName = 'UnorderedList';
export { UnorderedList };
export default UnorderedList;