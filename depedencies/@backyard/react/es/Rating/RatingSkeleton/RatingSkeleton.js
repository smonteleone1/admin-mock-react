import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["size", "withValue", "animate", "classNames"];
import * as React from 'react';
import classnames from 'classnames';
import { RatingSkeletonWrapper } from './styles';
import Skeleton from '../../Skeleton';
/**
 * Backyard's Ratings Skeleton component
 * 
 * Returns a set of Skeleton circles which each has a size determined
 * by the value of the size prop. Optional paramter of `withValue` to
 * determine if a Skeleton rect for a value should be shown. The label
 * shows scales in size determined by the value of the size prop also.
 * 
 * <RatingSkeleton />
 */

const RatingSkeleton = /*#__PURE__*/React.forwardRef(function RatingSkeleton(_ref, ref) {
  let {
    size = 'medium',
    withValue = false,
    animate = false,
    classNames
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  let starHeight = 'size_16';
  let starWidth = 'size_16';
  let textHeight = 'size_20';
  let textWidth = 'size_32';

  switch (size) {
    case 'jumbo':
      starHeight = 'size_32';
      starWidth = 'size_32';
      textHeight = 'size_28';
      textWidth = 'size_44';
      break;

    case 'large':
      starHeight = 'size_24';
      starWidth = 'size_24';
      textHeight = 'size_24';
      textWidth = 'size_36';
      break;

    case 'small':
      textHeight = 'size_18';
      textWidth = 'size_28';
      break;

    default:
      starHeight = 'size_24';
      starWidth = 'size_24';
      textHeight = 'size_24';
      textWidth = 'size_36';
      break;
  }

  return /*#__PURE__*/React.createElement(RatingSkeletonWrapper, _extends({
    className: classnames(`rating--skeleton size--${size}`, classNames)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), withValue ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: textHeight,
    width: textWidth,
    animate: animate
  }) : null);
});
RatingSkeleton.bdsName = 'RatingSkeleton';
export { RatingSkeleton };
export default RatingSkeleton;