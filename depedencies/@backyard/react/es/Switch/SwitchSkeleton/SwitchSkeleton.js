import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["size", "withLabel", "animate", "className"];
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

const SwitchSkeleton = /*#__PURE__*/React.forwardRef(function SwitchSkeleton(_ref, ref) {
  let {
    size = 'large',
    withLabel = false,
    animate = false,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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