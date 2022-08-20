import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _pt from "prop-types";
var _excluded = ["children", "padding"];
import * as React from 'react';
import CarouselItemWrapper from './styles/CarouselItemWrapper';
/**
 * Wrapper for content that is to be included within the Carousel component.
 *
 * ex.
 * <CarouselItem>
 *     <Button>Button 1</Button>
 * </CarouselItem>
 */

var CarouselItem = /*#__PURE__*/React.forwardRef(function CarouselItem(_ref, ref) {
  var children = _ref.children,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'size_16' : _ref$padding,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(CarouselItemWrapper, _extends({
    className: "carousel-item",
    padding: padding
  }, props, {
    ref: ref
  }), children);
});
process.env.NODE_ENV !== "production" ? CarouselItem.propTypes = {
  padding: _pt.oneOfType([_pt.oneOf(['none']), _pt.any, _pt.string])
} : void 0;
export { CarouselItem };
export default CarouselItem;