import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronUp;

const _excluded = ["children", "scrollToRef", "rightPosition", "bottomPosition", "hide", "noAnimation", "showAt", "container", "disablePortal", "onClick"];
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

const ScrollToTop = /*#__PURE__*/React.forwardRef(function ScrollToTop(_ref, ref) {
  let {
    children,
    scrollToRef,
    rightPosition = 'size-32',
    bottomPosition = 'size-48',
    hide,
    noAnimation,
    showAt = 400,
    container,
    disablePortal,
    onClick
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'ScrollToTop');
  const fabRef = React.useRef(null);
  const wrapperRef = React.useRef();
  const handleRef = useForkRef(wrapperRef, ref);
  const [scrollTo, setScrollTo] = React.useState(null);
  const [showFab, setShowFab] = React.useState(false);
  /**
   * Scrolls the window back to the top if no `scrollTo` element was passed in.
   * Otherwise it scrolls to the passed in element.
   */

  const scrollToTop = event => {
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


  React.useEffect(() => {
    const onScroll = () => {
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
        fabRef.current?.blur();
      }
    };

    onScroll();
    ownerWindow().addEventListener('scroll', onScroll);
    return () => ownerWindow().removeEventListener('scroll', onScroll);
  }, [noAnimation, showAt, fabRef]);
  React.useEffect(() => {
    setScrollTo(scrollToRef);
  }, [scrollToRef]);
  return /*#__PURE__*/React.createElement(Portal, {
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/React.createElement(ScrollToTopWrapper, _extends({
    className: classNames("fab scroll-to-top", (hide || !showFab) && 'hide', classNames, !noAnimation && 'animate') // @ts-ignore
    ,
    style: {
      right: `var(--bds-sizes-${rightPosition})`,
      bottom: `var(--bds-sizes-${bottomPosition})`
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