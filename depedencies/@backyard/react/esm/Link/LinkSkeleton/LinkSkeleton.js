import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "width", "size", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import { ThemeContext } from '../../ThemeProvider';
var LinkSkeleton = /*#__PURE__*/React.forwardRef(function LinkSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = React.useContext(ThemeContext);
  var height = '';

  if (theme.isDesktop) {
    height = size === 'medium' ? 'size_24' : 'size_20';
  } else {
    height = size === 'medium' ? 'size_20' : 'size_16';
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    height: height,
    width: width || '6rem',
    animate: animate,
    className: classnames(className, 'Link--skeleton')
  }, props, {
    ref: ref
  }));
});
LinkSkeleton.bdsName = 'LinkSkeleton';
export { LinkSkeleton };
export default LinkSkeleton;