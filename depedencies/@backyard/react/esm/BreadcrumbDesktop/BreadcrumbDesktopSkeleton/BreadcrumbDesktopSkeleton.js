import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "width", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
var BreadcrumbDesktopSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbDesktopSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    height: "size_24",
    width: width || '15rem',
    animate: animate,
    className: classnames(className, 'breadcrumb-desktop--skeleton')
  }, props, {
    ref: ref
  }));
});
BreadcrumbDesktopSkeleton.bdsName = 'BreadcrumbDesktopSkeleton';
export { BreadcrumbDesktopSkeleton };
export default BreadcrumbDesktopSkeleton;