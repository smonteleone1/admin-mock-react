import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "labelWidth", "helperWidth", "withLabel", "withHelper", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import SkeletonWrapper from './styles';
/**
 * Backard RadioSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <RadioSkeleton />
*/

var RadioSkeleton = /*#__PURE__*/React.forwardRef(function RadioSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$labelWidth = _ref.labelWidth,
      labelWidth = _ref$labelWidth === void 0 ? 'size_84' : _ref$labelWidth,
      _ref$helperWidth = _ref.helperWidth,
      helperWidth = _ref$helperWidth === void 0 ? 'size_84' : _ref$helperWidth,
      _ref$withLabel = _ref.withLabel,
      withLabel = _ref$withLabel === void 0 ? false : _ref$withLabel,
      _ref$withHelper = _ref.withHelper,
      withHelper = _ref$withHelper === void 0 ? false : _ref$withHelper,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(SkeletonWrapper, _extends({
    clasName: classnames(className, 'radio--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
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
RadioSkeleton.bdsName = 'RadioSkeleton';
export { RadioSkeleton };
export default RadioSkeleton;