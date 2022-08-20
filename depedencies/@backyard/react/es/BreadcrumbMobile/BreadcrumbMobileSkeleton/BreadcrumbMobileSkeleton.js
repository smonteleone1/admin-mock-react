import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "width", "className", "iconButtonSkeletonProps", "typographySkeletonProps"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import IconButtonSkeleton from '../../IconButton/IconButtonSkeleton';
import BreadcrumbMobileSkeletonWrapper from './styles/BreadcrumbMobileSkeletonWrapper';
const BreadcrumbMobileSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbMobileSkeleton(_ref, ref) {
  let {
    animate = false,
    width,
    className,
    iconButtonSkeletonProps,
    typographySkeletonProps
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
    }, typographySkeletonProps?.style)
  })));
});
BreadcrumbMobileSkeleton.bdsName = 'BreadcrumbMobileSkeleton';
export { BreadcrumbMobileSkeleton };
export default BreadcrumbMobileSkeleton;