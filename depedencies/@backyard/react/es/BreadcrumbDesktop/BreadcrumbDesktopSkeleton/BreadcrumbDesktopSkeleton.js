import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "width", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
const BreadcrumbDesktopSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbDesktopSkeleton(_ref, ref) {
  let {
    animate = false,
    width,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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