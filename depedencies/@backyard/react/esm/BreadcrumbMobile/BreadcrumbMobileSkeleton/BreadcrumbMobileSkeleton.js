import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "width", "className", "iconButtonSkeletonProps", "typographySkeletonProps"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import IconButtonSkeleton from '../../IconButton/IconButtonSkeleton';
import BreadcrumbMobileSkeletonWrapper from './styles/BreadcrumbMobileSkeletonWrapper';
var BreadcrumbMobileSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbMobileSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      className = _ref.className,
      iconButtonSkeletonProps = _ref.iconButtonSkeletonProps,
      typographySkeletonProps = _ref.typographySkeletonProps,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BreadcrumbMobileSkeletonWrapper, _extends({
    className: classNames(className, 'breadcrumb-mobile--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(IconButtonSkeleton, _extends({
    size: "small",
    animate: animate
  }, iconButtonSkeletonProps)), /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    height: "size_24",
    width: width || '15rem',
    animate: animate
  }, typographySkeletonProps, {
    style: _extends({
      marginLeft: 'var(--bds-sizes-size-8)'
    }, typographySkeletonProps === null || typographySkeletonProps === void 0 ? void 0 : typographySkeletonProps.style)
  })));
});
BreadcrumbMobileSkeleton.bdsName = 'BreadcrumbMobileSkeleton';
export { BreadcrumbMobileSkeleton };
export default BreadcrumbMobileSkeleton;