import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ArrowLeft, _ArrowRight;

const _excluded = ["children", "noScrollbar", "noButtons", "scrollDistance", "carouselButtonProps", "leftIcon", "rightIcon"];
import * as React from 'react';
import ArrowLeft from '@backyard/icons/ArrowLeft';
import ArrowRight from '@backyard/icons/ArrowRight';
import IconButton from '../IconButton';
import useForkRef from '../utils/hooks/useForkRef';
import useHasOverflow from '../utils/hooks/useHasOverflow';
import CarouselWrapper from './styles/CarouselWrapper';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
/**
 * A carousel may contain buttons the link the user to another page or site, or it may be a slider containing imagery
 * and details for products. Each image and information should like the user to the respective product page.
 *
 * Details for the product variation may include price, name, and a quick “add to cart” button for ease of shopping.
 *
 * Interactive arrows on both the left and right allow the user to view more options that may be hidden due to the
 * width restriction of a screen. To show there are more options, a slider will be visible below the product version
 * on web, and pagination dots on the mobile version.
 *
 * The button carousel is a type of horizontal navigation. As the user clicks on a button, they are brought
 * to the respective page.
 *
 * ex.
 * <Carousel noScrollbar
 *           scrollDistance={200}>
 *      <CarouselItem>
 *          <Button>Button 1</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 2</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 3</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 4</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 5</Button>
 *      </CarouselItem>
 * </Carousel>
 */

const Carousel = /*#__PURE__*/React.forwardRef(function Carousel(_ref, ref) {
  let {
    children,
    noScrollbar,
    noButtons,
    scrollDistance = 100,
    carouselButtonProps,
    leftIcon,
    rightIcon
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme(); // Validate theme hook

  validateBackyardTheme(theme, 'Carousel'); // Throws custom error if both noButtons and noScrollbar are truthy at the same time.

  if (noScrollbar && noButtons && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    throw Error(`Backyard: For accessibility reasons, the Carousel component \n` + `can only have one of the following props true at a time: \n\n` + `noButtons \n` + `noScrollbar \n\n` + `For reference to this components api, please refer to: \n\n` + `https://stage.carbon.lowes.com/bds/documentation/ComponentAPI/Carousel \n\n`);
  }

  const contentRef = React.useRef();
  const handleRef = useForkRef(contentRef, ref);
  const [isFarLeft, setIsFarLeft] = React.useState(true);
  const [isFarRight, setIsFarRight] = React.useState(false);
  const hasOverflow = useHasOverflow(contentRef);
  /**
   * Scrolls the content either left or right by either the default scroll distance or the
   * calculated distance from the scrollbar
   *
   * @param direction: number - either 1 or -1 depending if you wanna scroll left (1) or right (-1)
   */

  const scrollContent = direction => {
    contentRef.current.scrollLeft -= scrollDistance * direction;
  };
  /**
   *  Checks the scroll position of the Carousel to determine if the user is at the end or beginning of the content
   */


  const checkStartEnd = () => {
    const {
      scrollLeft,
      scrollWidth,
      offsetWidth
    } = contentRef.current;
    setIsFarLeft(scrollLeft === 0);
    setIsFarRight(scrollLeft + offsetWidth === scrollWidth);
  };

  React.useEffect(() => {
    checkStartEnd();
  }, [hasOverflow]);

  const handleResize = () => {
    checkStartEnd();
  };

  return /*#__PURE__*/React.createElement(CarouselWrapper // key={React.Children.count(children)}
  , _extends({
    className: 'carousel-content' + (noScrollbar ? " no-scrollbar" : ""),
    onScroll: checkStartEnd,
    onResize: handleResize
  }, props, {
    ref: handleRef
  }), !noButtons ? /*#__PURE__*/React.createElement(IconButton, _extends({
    className: 'carousel-button-left' + (!isFarLeft ? " show-button" : ""),
    size: "small",
    variant: "inverse",
    color: "interactive",
    shape: "circle",
    elevation: true
  }, carouselButtonProps, {
    onClick: () => scrollContent(1)
  }), leftIcon || _ArrowLeft || (_ArrowLeft = /*#__PURE__*/React.createElement(ArrowLeft, null))) : null, children, !noButtons ? /*#__PURE__*/React.createElement(IconButton, _extends({
    className: 'carousel-button-right' + (!isFarRight ? " show-button" : ""),
    size: "small",
    variant: "inverse",
    color: "interactive",
    shape: "circle",
    elevation: true
  }, carouselButtonProps, {
    onClick: () => scrollContent(-1)
  }), rightIcon || _ArrowRight || (_ArrowRight = /*#__PURE__*/React.createElement(ArrowRight, null))) : null);
});
Carousel.bdsName = 'Carousel';
export { Carousel };
export default Carousel;