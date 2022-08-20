import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "hideButtons", "hideScrollbar", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Carousel Skeleton
 */

var CarouselSkeleton = /*#__PURE__*/React.forwardRef(function CarouselSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$hideButtons = _ref.hideButtons,
      hideButtons = _ref$hideButtons === void 0 ? false : _ref$hideButtons,
      _ref$hideScrollbar = _ref.hideScrollbar,
      hideScrollbar = _ref$hideScrollbar === void 0 ? false : _ref$hideScrollbar,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'CarouselSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('carousel--skeleton', className)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, !hideButtons ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    shape: shape,
    animate: animate,
    style: {
      minWidth: '2.625rem',
      minHeight: '2.625rem',
      marginRight: theme.sizes.size_8
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: "20.5rem"
  }, props, {
    ref: ref
  })), !hideScrollbar ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: theme.sizes.size_4,
    style: {
      marginTop: theme.sizes.size_32
    }
  }) : null), !hideButtons ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    shape: shape,
    animate: animate,
    style: {
      minWidth: '2.625rem',
      minHeight: '2.625rem',
      marginLeft: theme.sizes.size_8
    }
  }) : null));
});
CarouselSkeleton.bdsName = 'CarouselSkeleton';
export { CarouselSkeleton };
export default CarouselSkeleton;