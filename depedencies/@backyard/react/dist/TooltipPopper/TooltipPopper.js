"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TooltipPopper = void 0;
exports.testReset = testReset;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

require("core-js/es/array/find");

require("core-js/es/promise");

require("core-js/es/object/assign");

var _useControlled3 = _interopRequireDefault(require("../utils/hooks/useControlled"));

var _useRandomId = _interopRequireDefault(require("../utils/hooks/useRandomId"));

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

var _usePopupState = require("../utils/hooks/usePopupState");

var _persistSyntheticEvent = _interopRequireDefault(require("../utils/functions/persistSyntheticEvent"));

var _ThemeProvider = require("../ThemeProvider");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _excluded = ["children", "className", "container", "disablePortal", "enterDelay", "enterNextDelay", "id", "keepMounted", "leaveDelay", "onClose", "onOpen", "open", "defaultOpen", "placement", "popperModifiers", "popperOptions", "tooltip", "title"],
    _excluded2 = ["open"],
    _excluded3 = ["onMouseEnter", "onMouseLeave"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var hysteresisOpen = false;
var hysteresisTimer = null;

function testReset() {
  hysteresisOpen = false;
  clearTimeout(hysteresisTimer);
}

var flipArrow = function flipArrow(placement) {
  return {
    'bottom-end': 'top-start',
    'bottom-start': 'top-end',
    bottom: 'top',
    'left-end': 'right-start',
    'left-start': 'right-end',
    left: 'right',
    'right-end': 'left-start',
    'right-start': 'left-end',
    right: 'left',
    'top-end': 'bottom-start',
    'top-start': 'bottom-end',
    top: 'bottom'
  }[placement];
};
/**
 * Backyard React TooltipPopper
 *
 * @todo Comments
 */


var TooltipPopper = /*#__PURE__*/React.forwardRef(function TooltipPopper(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      container = _ref.container,
      _ref$disablePortal = _ref.disablePortal,
      disablePortal = _ref$disablePortal === void 0 ? false : _ref$disablePortal,
      _ref$enterDelay = _ref.enterDelay,
      enterDelay = _ref$enterDelay === void 0 ? 200 : _ref$enterDelay,
      _ref$enterNextDelay = _ref.enterNextDelay,
      enterNextDelay = _ref$enterNextDelay === void 0 ? 0 : _ref$enterNextDelay,
      idProp = _ref.id,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? false : _ref$keepMounted,
      _ref$leaveDelay = _ref.leaveDelay,
      leaveDelay = _ref$leaveDelay === void 0 ? 200 : _ref$leaveDelay,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      openProp = _ref.open,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$popperModifiers = _ref.popperModifiers,
      popperModifiers = _ref$popperModifiers === void 0 ? [] : _ref$popperModifiers,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {} : _ref$popperOptions,
      tooltip = _ref.tooltip,
      title = _ref.title,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TooltipPoppper'
  });

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      referenceElement = _React$useState2[0],
      setReferenceElement = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      popperElement = _React$useState4[0],
      setPopperElement = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      arrowElement = _React$useState6[0],
      setArrowElement = _React$useState6[1];

  var popperRef = (0, _useForkRef["default"])(setPopperElement, ref);
  var enterTimer = React.useRef();
  var leaveTimer = React.useRef();
  var id = (0, _useRandomId["default"])(idProp);

  var _useControlled = (0, _useControlled3["default"])({
    controlled: openProp,
    "default": defaultOpen,
    name: "Backyard->TooltipPopper->[id=\"".concat(id, "\"]")
  }),
      _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
      open = _useControlled2[0],
      setOpen = _useControlled2[1];

  var popupState = (0, _usePopupState.usePopupState)({
    variant: 'popper',
    popupId: id
  });

  var _bindPopper = (0, _usePopupState.bindPopper)(popupState),
      hovering = _bindPopper.open,
      popperProps = (0, _objectWithoutProperties2["default"])(_bindPopper, _excluded2);

  var _bindHover = (0, _usePopupState.bindHover)(popupState),
      onMouseEnter = _bindHover.onMouseEnter,
      onMouseLeave = _bindHover.onMouseLeave,
      hoverProps = (0, _objectWithoutProperties2["default"])(_bindHover, _excluded3);

  React.useEffect(function () {
    return function () {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  var handleOpen = function handleOpen(event) {
    clearTimeout(hysteresisTimer);
    hysteresisOpen = true;
    setOpen(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event) {
    clearTimeout(hysteresisTimer);
    hysteresisTimer = setTimeout(function () {
      hysteresisOpen = false;
    }, 800 + leaveDelay);
    setOpen(false);

    if (onClose) {
      onClose(event);
    }
  };

  var handleEnter = function handleEnter(event) {
    onMouseEnter(event);
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hysteresisOpen && enterNextDelay) {
      (0, _persistSyntheticEvent["default"])(event);
      enterTimer.current = setTimeout(function () {
        handleOpen(event);
      }, hysteresisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  var handleLeave = function handleLeave(event) {
    onMouseLeave(event);
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    (0, _persistSyntheticEvent["default"])(event);
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveDelay);
  };

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, (0, _extends2["default"])({
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement,
        padding: 8
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 16]
      }
    }, {
      name: 'eventListeners',
      options: {
        scroll: open,
        resize: open
      }
    }].concat((0, _toConsumableArray2["default"])(popperModifiers)),
    placement: placement
  }, popperOptions)),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  var place = attributes.popper ? attributes.popper['data-popper-placement'] : placement;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(children, (0, _extends2["default"])({}, hoverProps, {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    ref: setReferenceElement
  })), open || keepMounted ? /*#__PURE__*/React.createElement(_Portal["default"], {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/React.createElement(_Tooltip["default"], (0, _extends2["default"])({
    id: id
  }, tooltip.props, attributes.popper, popperProps, {
    ref: popperRef,
    arrowProps: {
      ref: setArrowElement,
      style: styles.arrow
    },
    arrow: flipArrow(place),
    style: (0, _extends2["default"])({}, styles.popper, {
      zIndex: theme.zIndex.tooltip,
      opacity: openProp || hovering ? 1 : 0
    })
  }, props))) : null);
});
exports.TooltipPopper = TooltipPopper;
TooltipPopper.bdsName = 'TooltipPopper';
var _default = TooltipPopper;
exports["default"] = _default;