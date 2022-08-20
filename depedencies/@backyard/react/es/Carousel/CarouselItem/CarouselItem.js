import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";
const _excluded = ["children", "padding"];
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

const CarouselItem = /*#__PURE__*/React.forwardRef(function CarouselItem(_ref, ref) {
  let {
    children,
    padding = 'size_16'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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