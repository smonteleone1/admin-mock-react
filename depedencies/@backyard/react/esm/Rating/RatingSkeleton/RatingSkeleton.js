import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "withValue", "animate", "classNames"];
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

var RatingSkeleton = /*#__PURE__*/React.forwardRef(function RatingSkeleton(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$withValue = _ref.withValue,
      withValue = _ref$withValue === void 0 ? false : _ref$withValue,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, _excluded);

  var starHeight = 'size_16';
  var starWidth = 'size_16';
  var textHeight = 'size_20';
  var textWidth = 'size_32';

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
    className: classnames("rating--skeleton size--".concat(size), classNames)
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