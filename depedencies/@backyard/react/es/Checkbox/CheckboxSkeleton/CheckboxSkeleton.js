import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "labelWidth", "helperWidth", "withLabel", "withHelper", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import SkeletonWrapper from './styles';
/**
 * Backard CheckboxSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <CheckboxSkeleton />
*/

const CheckboxSkeleton = /*#__PURE__*/React.forwardRef(function CheckboxSkeleton(_ref, ref) {
  let {
    animate = false,
    labelWidth = 'size_84',
    helperWidth = 'size_84',
    withLabel = false,
    withHelper = false,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(SkeletonWrapper, _extends({
    clasName: classnames(className, 'Checkbox--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: "size_20",
    width: "size_20",
    animate: animate
  }), withLabel ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: "size_20",
    width: labelWidth,
    animate: animate,
    className: "label--skeleton"
  }) : null), withHelper ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: "size_16",
    width: helperWidth,
    className: "helper-text--skeleton",
    animate: animate
  }) : null);
});
CheckboxSkeleton.bdsName = 'CheckboxSkeleton';
export { CheckboxSkeleton };
export default CheckboxSkeleton;