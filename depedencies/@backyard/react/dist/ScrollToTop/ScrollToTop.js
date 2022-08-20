"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollToTop = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _ChevronUp2 = _interopRequireDefault(require("@backyard/icons/ChevronUp"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _functions = require("../utils/functions");

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

var _ThemeProvider = require("../ThemeProvider");

var _FAB = _interopRequireDefault(require("./styles/FAB"));

var _ScrollToTopWrapper = _interopRequireDefault(require("./styles/ScrollToTopWrapper"));

var _ChevronUp;

var _excluded = ["children", "scrollToRef", "rightPosition", "bottomPosition", "hide", "noAnimation", "showAt", "container", "disablePortal", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'ScrollToTop');
  var fabRef = React.useRef(null);
  var wrapperRef = React.useRef();
  var handleRef = (0, _useForkRef["default"])(wrapperRef, ref);

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      scrollTo = _React$useState2[0],
      setScrollTo = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
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
      (0, _functions.ownerWindow)().scrollTo(0, 0);
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
      if ((0, _functions.ownerWindow)().pageYOffset >= showAt) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
      /**
       * Blur the FAB once the window.scrollY reaches or is below the showAT value.
       * This is to reset the focus to the <body> element of the page and reset the focus flow.
       */


      if ((0, _functions.ownerWindow)().pageYOffset <= showAt) {
        var _fabRef$current;

        (_fabRef$current = fabRef.current) === null || _fabRef$current === void 0 ? void 0 : _fabRef$current.blur();
      }
    };

    onScroll();
    (0, _functions.ownerWindow)().addEventListener('scroll', onScroll);
    return function () {
      return (0, _functions.ownerWindow)().removeEventListener('scroll', onScroll);
    };
  }, [noAnimation, showAt, fabRef]);
  React.useEffect(function () {
    setScrollTo(scrollToRef);
  }, [scrollToRef]);
  return /*#__PURE__*/React.createElement(_Portal["default"], {
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/React.createElement(_ScrollToTopWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("fab scroll-to-top", (hide || !showFab) && 'hide', _classnames["default"], !noAnimation && 'animate') // @ts-ignore
    ,
    style: {
      right: "var(--bds-sizes-".concat(rightPosition, ")"),
      bottom: "var(--bds-sizes-".concat(bottomPosition, ")")
    }
  }, props, {
    ref: handleRef
  }), children, /*#__PURE__*/React.createElement(_FAB["default"], {
    variant: "primary",
    color: "interactive",
    shape: "circle",
    onClick: scrollToTop,
    ref: fabRef
  }, _ChevronUp || (_ChevronUp = /*#__PURE__*/React.createElement(_ChevronUp2["default"], null)))));
});
exports.ScrollToTop = ScrollToTop;
ScrollToTop.bdsName = 'ScrollToTop';
var _default = ScrollToTop;
exports["default"] = _default;