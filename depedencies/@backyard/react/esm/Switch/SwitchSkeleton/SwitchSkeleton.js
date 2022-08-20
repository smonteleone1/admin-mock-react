import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "withLabel", "animate", "className"];
import * as React from 'react';
import classnames from 'classnames';
import SwitchSkeletonWrapper from './styles';
import Skeleton from '../../Skeleton';
/**
 * Backyard's Switch Skeleton component
 * 
 * Returns a pill shaped Skeleton rect of a predefined height and width.
 * These can not be overwritten. Optional boolean parameter of `withLabel`
 * to display a Skeleton rect as text next to the switch.
 */

var SwitchSkeleton = /*#__PURE__*/React.forwardRef(function SwitchSkeleton(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$withLabel = _ref.withLabel,
      withLabel = _ref$withLabel === void 0 ? false : _ref$withLabel,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(SwitchSkeletonWrapper, _extends({
    className: classnames(className, 'switch--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: size === 'small' ? 'size_16' : 'size_24',
    width: size === 'small' ? '2.125rem' : '2.75rem',
    animate: animate,
    style: {
      borderRadius: '500px'
    }
  }), withLabel ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: "size_20",
    width: "size_84",
    animate: animate,
    className: "skeleton--label"
  }) : null);
});
SwitchSkeleton.bdsName = 'SwitchSkeleton';
export { SwitchSkeleton };
export default SwitchSkeleton;