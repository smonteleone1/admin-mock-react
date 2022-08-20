"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopover = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _canFocus = _interopRequireDefault(require("../utils/functions/canFocus"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var usePopover = function usePopover(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      containerRef = _ref.containerRef,
      referenceElement = _ref.referenceElement,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? [' ', 'ArrowUp', 'ArrowDown', 'Enter'] : _ref$openKeys,
      _ref$closeKeys = _ref.closeKeys,
      closeKeys = _ref$closeKeys === void 0 ? ['Escape'] : _ref$closeKeys,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? 300 : _ref$delayClose,
      _ref$delayOpen = _ref.delayOpen,
      delayOpen = _ref$delayOpen === void 0 ? 10 : _ref$delayOpen,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      onMouseDown = _ref.onMouseDown,
      ref = _ref.ref;

  // Holds state of whether or not the popover is open
  var _React$useState = React.useState(openProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // Hold the delay close timeout when defined


  var delayCloseTimeout = React.useRef(null); // Hold the delay open timeout when defined

  var delayOpenTimeout = React.useRef(null);
  /**
   * Opens the popover
   *
   * Triggers `onOpen` if defined
   */

  var handleOpen = function handleOpen() {
    // If popover is not open,
    if (!open) {
      // Open
      setOpen(true); // Trigger `onOpen`

      if (onOpen) {
        onOpen();
      }
    }
  };
  /**
   * Closes the popover
   *
   * Triggers `onClose` if defined
   */


  var handleClose = function handleClose() {
    // If popover is open,
    if (open) {
      // Close
      setOpen(false); // Trigger `onClose`

      if (onClose) {
        onClose();
      }
    }
  };
  /**
   * Close popover after delay
   */


  var closeAfterDelay = function closeAfterDelay() {
    delayCloseTimeout.current = setTimeout(handleClose, delayClose);
  };
  /**
   * Open popover after delay
   */


  var openAfterDelay = function openAfterDelay() {
    delayOpenTimeout.current = setTimeout(handleOpen, delayOpen);
  };
  /**
   * Handles `onKeyDown` event of `select`
   * Triggers defined `onKeyDown` from props if available
   *
   * @param {KeyboardEvent} event - DOM event
   */


  var handleKeyDown = function handleKeyDown(event) {
    // Get key from event
    var key = event.key; // If space or enter key pressed,
    // The native select doesn't respond to enter on MacOS, but it's recommended by
    // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html

    if (!disabled && openKeys.indexOf(key) !== -1) {
      // Prevent browser interactions
      event.preventDefault(); // Open popover

      openAfterDelay();
    } // If escape key pressed,


    if (!disabled && closeKeys.indexOf(key) !== -1) {
      // Prevent browser interactions
      event.preventDefault(); // Open popover

      closeAfterDelay();
    } // If `onKeyDown` prop defined,


    if (onKeyDown) {
      // Trigger `onKeyDown` prop function
      onKeyDown(event);
    }
  };
  /**
   * Handles `onBlur` event of `select`
   *
   * @param {FocusEvent} event - DOM event
   */


  var handleBlur = function handleBlur(event) {
    // If `onBlur` trigger defined,
    if (onBlur) {
      // Callback blur
      onBlur(event);
    }
  };
  /**
   * Handles the select mouse down interaction event
   *
   * @param event
   */


  var handleMouseDown = function handleMouseDown(event) {
    // If reference defined,
    if (!disabled && referenceElement) {
      // Prevent default mousedown
      event.preventDefault();
      var target = event.target; // Force focus target

      target.focus();
    }

    if (onMouseDown) {
      onMouseDown(event);
    }
  };
  /**
   * Remove focus event and close
   *
   * This function is used to close the popover when the user
   * tabs between focusable elements on the page.
   *
   * @param event focus event
   */


  var removeFocus = function removeFocus(event) {
    var _containerRef$current;

    // Get related target from 'focusout' event
    var target = event.relatedTarget; // Check for whether there is no target

    var noTarget = target === null; // Check whether or not focus is leaving parent container

    var leavingParent = !(containerRef !== null && containerRef !== void 0 && (_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(event.relatedTarget)); // If there is a target and focus is leaving parent container,

    if (!noTarget && leavingParent) {
      // If there is a current valid ref and the target can NOT be focused,
      if (ref !== null && ref !== void 0 && ref.current && !(0, _canFocus["default"])(ref.current, target)) {
        // Do not remove current focus
        // Because the target cannot receive focus
        return;
      } // Otherwise, focusout is valid
      // Close current open popover after delay


      closeAfterDelay();
    }
  };

  var clearPopoverTimeout = function clearPopoverTimeout(type) {
    switch (type) {
      case 'open':
        clearTimeout(delayOpenTimeout.current);
        break;

      case 'close':
      default:
        clearTimeout(delayCloseTimeout.current);
    }
  }; // Side effect for when the container ref changes...


  React.useEffect(function () {
    var _containerRef$current2;

    // Add 'focusout' event listener to container
    containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.addEventListener('focusout', removeFocus); // When the component unloads...

    return function () {
      var _containerRef$current3;

      // Remove 'focusout' event listener from container
      containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.removeEventListener('focusout', removeFocus);
    };
  }, [containerRef]); // Side effect for when the `open` prop changes externally
  // eslint-disable-next-line consistent-return

  React.useEffect(function () {
    if (openProp !== open) {
      return openProp ? handleOpen() : handleClose();
    }
  }, [openProp]); // Cleanup timeout

  React.useEffect(function () {
    return function () {
      clearTimeout(delayCloseTimeout.current);
      clearTimeout(delayOpenTimeout.current);
    };
  }, []);
  return {
    open: open,
    setOpen: setOpen,
    handleOpen: handleOpen,
    handleClose: handleClose,
    handleKeyDown: handleKeyDown,
    handleBlur: handleBlur,
    handleMouseDown: handleMouseDown,
    clearPopoverTimeout: clearPopoverTimeout,
    openAfterDelay: openAfterDelay,
    closeAfterDelay: closeAfterDelay
  };
};

exports.usePopover = usePopover;
var _default = usePopover;
exports["default"] = _default;