import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ChevronUp;

var _excluded = ["children", "scrollToRef", "rightPosition", "bottomPosition", "hide", "noAnimation", "showAt", "container", "disablePortal", "onClick"];
import ChevronUp from '@backyard/icons/ChevronUp';
import classNames from 'classnames';
import * as React from 'react';
import Portal from '../Portal';
import { ownerWindow } from '../utils/functions';
import useForkRef from '../utils/hooks/useForkRef';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import FAB from './styles/FAB';
import ScrollToTopWrapper from './styles/ScrollToTopWrapper';
/**
 * Backyard React Scroll To Top
 *
 * Provides a button to allow the user to have quick access back to the top of the page without scrolling up manually.
 *
 * Documentation:
 *
 * - [ScrollToTop](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/ScrollToTop)
 *
 * API:
 *
 * - [ScrollToTop API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ScrollToTop)
 *
 */

var ScrollToTop = /*#__PURE__*/React.forwardRef(function ScrollToTop(_ref, ref) {
  var children = _ref.children,
      scrollToRef = _ref.scrollToRef,
      _ref$rightPosition = _ref.rightPosition,
      rightPosition = _ref$rightPosition === void 0 ? 'size-32' : _ref$rightPosition,
      _ref$bottomPosition = _ref.bottomPosition,
      bottomPosition = _ref$bottomPosition === void 0 ? 'size-48' : _ref$bottomPosition,
      hide = _ref.hide,
      noAnimation = _ref.noAnimation,
      _ref$showAt = _ref.showAt,
      showAt = _ref$showAt === void 0 ? 400 : _ref$showAt,
      container = _ref.container,
      disablePortal = _ref.disablePortal,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'ScrollToTop');
  var fabRef = React.useRef(null);
  var wrapperRef = React.useRef();
  var handleRef = useForkRef(wrapperRef, ref);

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      scrollTo = _React$useState2[0],
      setScrollTo = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showFab = _React$useState4[0],
      setShowFab = _React$useState4[1];
  /**
   * Scrolls the window back to the top if no `scrollTo` element was passed in.
   * Otherwise it scrolls to the passed in element.
   */


  var scrollToTop = function scrollToTop(event) {
    if (scrollTo && scrollTo.current) {
      scrollTo.current.scrollIntoView();
    } else {
      ownerWindow().scrollTo(0, 0);
    }

    if (onClick) {
      onClick(event);
    }
  };
  /**
   * Checks how far the user has scrolled down the page.
   * When the distance is greater then the `showAt` value sets the 'showFab' state to true, else sets
   * to false and hides the fab from the screen.
   */


  React.useEffect(function () {
    var onScroll = function onScroll() {
      if (ownerWindow().pageYOffset >= showAt) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
      /**
       * Blur the FAB once the window.scrollY reaches or is below the showAT value.
       * This is to reset the focus to the <body> element of the page and reset the focus flow.
       */


      if (ownerWindow().pageYOffset <= showAt) {
        var _fabRef$current;

        (_fabRef$current = fabRef.current) === null || _fabRef$current === void 0 ? void 0 : _fabRef$current.blur();
      }
    };

    onScroll();
    ownerWindow().addEventListener('scroll', onScroll);
    return function () {
      return ownerWindow().removeEventListener('scroll', onScroll);
    };
  }, [noAnimation, showAt, fabRef]);
  React.useEffect(function () {
    setScrollTo(scrollToRef);
  }, [scrollToRef]);
  return /*#__PURE__*/React.createElement(Portal, {
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/React.createElement(ScrollToTopWrapper, _extends({
    className: classNames("fab scroll-to-top", (hide || !showFab) && 'hide', classNames, !noAnimation && 'animate') // @ts-ignore
    ,
    style: {
      right: "var(--bds-sizes-".concat(rightPosition, ")"),
      bottom: "var(--bds-sizes-".concat(bottomPosition, ")")
    }
  }, props, {
    ref: handleRef
  }), children, /*#__PURE__*/React.createElement(FAB, {
    variant: "primary",
    color: "interactive",
    shape: "circle",
    onClick: scrollToTop,
    ref: fabRef
  }, _ChevronUp || (_ChevronUp = /*#__PURE__*/React.createElement(ChevronUp, null)))));
});
ScrollToTop.bdsName = 'ScrollToTop';
export { ScrollToTop };
export default ScrollToTop;