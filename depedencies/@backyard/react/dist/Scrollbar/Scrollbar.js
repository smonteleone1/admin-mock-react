"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Scrollbar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _resizeObserver = require("@juggle/resize-observer");

var _ownerDocument = _interopRequireDefault(require("../utils/functions/ownerDocument"));

var _ownerWindow = _interopRequireDefault(require("../utils/functions/ownerWindow"));

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

var _useHasOverflow = _interopRequireDefault(require("../utils/hooks/useHasOverflow"));

var _useRandomId = _interopRequireDefault(require("../utils/hooks/useRandomId"));

var _ThemeProvider = require("../ThemeProvider");

var _styles = require("./styles");

var _excluded = ["children", "className", "id", "onScroll", "onResize", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A styled scrollbar for use with the Backyard Design System.
 *
 * TODO Implement a vertical scrollbar for the Y axis. Currently only provides a horizontal scrollbar for the X axis.
 *
 * ex:
 * <Scrollbar>
 *     Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin landjaeger rump alcatra capicola chicken
 *     pork chop. Filet mignon tenderloin drumstick burgdoggen swine shoulder picanha meatball ham venison chislic
 *     landjaeger andouille beef ribs jerky. Strip steak kevin sirloin cow picanha pork loin jowl chuck short loin
 *     shoulder sausage flank, brisket drumstick. Landjaeger ham pig meatball chuck ribeye. Kevin filet mignon
 *     pastrami turducken. Spare ribs pastrami chicken, meatball rump ball tip bacon kevin pork belly shoulder
 *     venison capicola cow pig ground round. Shank beef turducken, leberkas chuck tri-tip hamburger pork ham spare
 *     ribs kielbasa.
 * </Scrollbar>
 *
 * note:
 * To override/change the scrollbar styling please target the following css classes:
 *   - .scrollbar-container
 *   - .scrollbar-track
 *   - .scrollbar-knob
 * To override/change the content styling please target the following css classes:
 *   - .content-container
 */
var Scrollbar = /*#__PURE__*/React.forwardRef(function Scrollbar(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      idProp = _ref.id,
      onScroll = _ref.onScroll,
      onResize = _ref.onResize,
      wrapperProps = _ref.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Scrollbar');
  var id = (0, _useRandomId["default"])(idProp);
  var wrapperRef = React.useRef();
  var contentRef = React.useRef();
  var scrollBarKnobRef = React.useRef();
  var scrollbarRef = React.useRef();
  var scrollbarContentRef = React.useRef();
  var handleRef = (0, _useForkRef["default"])(contentRef, ref);
  var hasOverflow = (0, _useHasOverflow["default"])(contentRef);

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      isUsingScrollbar = _React$useState2[0],
      setIsUsingScrollbar = _React$useState2[1];

  var currXPos = 0;
  /**
   * Retrieves the current clientX position of the mouse or touch point
   * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
   * @return the current position of mouse/touch point on the screen
   */

  var getXPos = function getXPos(event) {
    if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend' || event.type === 'touchcancel') {
      var touch = event.touches[0] || event.changedTouches[0];
      return touch.clientX;
    }

    return event.clientX;
  };
  /**
   * Moves the scrollbar to either the newPosition if provided or calculates the proper
   * location depending on the contents current scroll position.
   * @param {number} newPosition - distance in pixels to move the the scrollbar knob within the scrollbar track
   */


  var moveScrollbar = function moveScrollbar(newPosition) {
    var scrollbarKnob = scrollBarKnobRef.current; // check if scrollbar is shown to prevent unnecessary calculations

    if (scrollbarRef.current.offsetParent && scrollbarKnob) {
      if (!newPosition && newPosition !== 0 && !isUsingScrollbar) {
        var _contentRef$current = contentRef.current,
            scrollLeft = _contentRef$current.scrollLeft,
            scrollWidth = _contentRef$current.scrollWidth,
            clientWidth = _contentRef$current.clientWidth;
        var scrollPercentage = scrollLeft / scrollWidth;
        scrollbarKnob.style.left = "".concat(Math.round(scrollPercentage * clientWidth), "px");
      } else {
        scrollbarKnob.style.left = "".concat(newPosition, "px");
      }
    }

    if (onScroll) {
      onScroll();
    }
  };
  /**
   * Finds the scroll distance depending how how far the scrollbar knob has been moved.
   * Then moves the scrollbar and content accordingly/
   * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
   */


  var calculateScrollDistance = function calculateScrollDistance(event) {
    var scrollbarKnob = scrollBarKnobRef.current;
    var newMouseXPos = currXPos - getXPos(event);
    var leftPosition = scrollbarKnob.offsetLeft - newMouseXPos;
    currXPos = getXPos(event); // move knob

    if (leftPosition < 0) {
      // stop scrollbar at far left
      moveScrollbar(0); // move content

      contentRef.current.scrollTo({
        left: 0
      });
    } else if (leftPosition + scrollbarKnob.clientWidth >= contentRef.current.clientWidth) {
      // stop scrollbar at far right
      moveScrollbar(contentRef.current.clientWidth - scrollbarKnob.scrollWidth); // move content

      contentRef.current.scrollTo({
        left: contentRef.current.scrollWidth
      });
    } else {
      // position scrollbar within container
      moveScrollbar(leftPosition); // move content

      var distance = leftPosition / contentRef.current.clientWidth * contentRef.current.scrollWidth;
      contentRef.current.scroll(Math.round(distance), 0);
    }
  };
  /**
   * Gets nearest DOM document that owns modal ref
   */


  var getDoc = function getDoc() {
    return (0, _ownerDocument["default"])(scrollbarRef.current);
  };
  /**
   * Cleans up all mouse/touch event handlers.
   */


  var cleanupDrag = function cleanupDrag() {
    var scrollbarKnob = scrollBarKnobRef.current;
    scrollbarKnob.onmouseup = null;
    getDoc().onmouseup = null;
    scrollbarKnob.onmousemove = null;
    getDoc().onmousemove = null;
    setIsUsingScrollbar(false);
  };
  /**
   * Sets up all mouse/touch event handlers
   */


  var setupDrag = function setupDrag() {
    getDoc().onmouseup = cleanupDrag;
    getDoc().ontouchend = cleanupDrag;
    getDoc().onmousemove = calculateScrollDistance;
    getDoc().ontouchmove = calculateScrollDistance;
    setIsUsingScrollbar(true);
  };
  /**
   * Calculates the padding of the wrapper's left padding, margin, border
   * @return {number} total - left spacing of wrapper (left-padding + left-margin + left-border)
   */


  var getGutterSpacing = function getGutterSpacing() {
    return parseInt((0, _ownerWindow["default"])().getComputedStyle(wrapperRef.current).getPropertyValue('padding-left').replace('px', ''), 10) + parseInt((0, _ownerWindow["default"])().getComputedStyle(wrapperRef.current).getPropertyValue('margin-left').replace('px', ''), 10) + parseInt((0, _ownerWindow["default"])().getComputedStyle(wrapperRef.current).getPropertyValue('border-left').replace('px', ''), 10);
  };
  /**
   * snaps middle of knob to pointer position
   * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
   */


  var snapToPointer = function snapToPointer(event) {
    var knobWidth = scrollBarKnobRef.current.clientWidth;
    var containerMargin = wrapperRef.current.getBoundingClientRect().left;
    var gutterSpacing = getGutterSpacing();
    moveScrollbar(currXPos - knobWidth / 2 - containerMargin - gutterSpacing);
    calculateScrollDistance(event);
  };
  /**
   * sets up how to handle mouse event when user initiates dragging the scrollbar
   * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
   */


  var dragHandler = function dragHandler(event) {
    currXPos = getXPos(event);
    snapToPointer(event);
    setupDrag();
  }; // calculates the scrollbar width depending on the amount of overflow


  var calculateScrollbarWidth = function calculateScrollbarWidth() {
    var _contentRef$current2 = contentRef.current,
        offsetWidth = _contentRef$current2.offsetWidth,
        scrollWidth = _contentRef$current2.scrollWidth;
    var visibleRatio = offsetWidth / scrollWidth;
    return Math.round(visibleRatio * offsetWidth);
  }; // builds out and sets up the init state of the scrollbar


  var buildScrollbar = function buildScrollbar() {
    var knob = scrollBarKnobRef.current;
    var scrollbarWidth = calculateScrollbarWidth();
    var container = contentRef.current;

    if (knob && hasOverflow) {
      container.scrollLeft = currXPos;
      knob.style.width = "".concat(scrollbarWidth, "px");
    }
  };

  React.useEffect(function () {
    // Call handler right away so state gets updated with initial window size
    buildScrollbar(); // Add event listener

    (0, _ownerWindow["default"])().addEventListener('resize', buildScrollbar); // Remove event listener on cleanup

    return function () {
      return (0, _ownerWindow["default"])().removeEventListener('resize', buildScrollbar);
    };
  }, [contentRef, hasOverflow]);
  var ro = new _resizeObserver.ResizeObserver(function () {
    var knob = scrollBarKnobRef.current;
    var scrollbarWidth = calculateScrollbarWidth();
    knob.style.width = "".concat(scrollbarWidth, "px");

    if (onResize) {
      onResize();
    }
  });
  React.useEffect(function () {
    ro.observe(scrollbarContentRef.current);
    return function () {
      return ro.disconnect();
    };
  }, [scrollbarContentRef]);
  /**
   * Layout:
   * <div>
   *     <div>{content}</div>
   *     <scrollbar/>
   * </div>
   */

  return /*#__PURE__*/React.createElement(_styles.ScrollbarWrapper, (0, _extends2["default"])({}, wrapperProps, {
    className: className,
    ref: wrapperRef
  }), /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: "content-container",
    onScroll: function onScroll() {
      moveScrollbar();
    },
    id: id
  }, props, {
    ref: handleRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "scrollbar-content",
    ref: scrollbarContentRef
  }, children)), /*#__PURE__*/React.createElement(_styles.ScrollbarContainerWrapper, {
    className: 'scrollbar-container' + (!hasOverflow ? " hide-scrollbar" : ""),
    onMouseDown: dragHandler,
    onTouchStart: dragHandler,
    ref: scrollbarRef
  }, /*#__PURE__*/React.createElement(_styles.ScrollbarTrackWrapper, {
    className: "scrollbar-track"
  }, /*#__PURE__*/React.createElement(_styles.ScrollbarKnobWrapper, {
    className: "scrollbar-knob",
    role: "scrollbar",
    "aria-controls": id,
    ref: scrollBarKnobRef
  }))));
});
exports.Scrollbar = Scrollbar;
Scrollbar.bdsName = 'Scrollbar';
var _default = Scrollbar;
exports["default"] = _default;