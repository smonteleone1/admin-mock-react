"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Popover = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

require("core-js/es/array/find");

require("core-js/es/promise");

require("core-js/es/object/assign");

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

var _ThemeProvider = require("../ThemeProvider");

var _Portal = _interopRequireDefault(require("../Portal"));

var _excluded = ["anchorEl", "children", "className", "container", "disablePortal", "id", "keepMounted", "onClose", "onOpen", "offset", "open", "placement", "popperModifiers", "popperOptions", "pop"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Popover
 *
 * @todo Comments
 * @todo Additional Tests
 */
var Popover = /*#__PURE__*/React.forwardRef(function Popover(_ref, ref) {
  var anchorEl = _ref.anchorEl,
      children = _ref.children,
      className = _ref.className,
      container = _ref.container,
      _ref$disablePortal = _ref.disablePortal,
      disablePortal = _ref$disablePortal === void 0 ? false : _ref$disablePortal,
      idProp = _ref.id,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? false : _ref$keepMounted,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? [0, 9] : _ref$offset,
      open = _ref.open,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$popperModifiers = _ref.popperModifiers,
      popperModifiers = _ref$popperModifiers === void 0 ? [] : _ref$popperModifiers,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {} : _ref$popperOptions,
      pop = _ref.pop,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Popover');

  var _React$useState = React.useState(anchorEl),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      referenceElement = _React$useState2[0],
      setReferenceElement = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      popperElement = _React$useState4[0],
      setPopperElement = _React$useState4[1];

  var popperRef = (0, _useForkRef["default"])(setPopperElement, ref);
  React.useEffect(function () {
    return setReferenceElement(anchorEl);
  }, [anchorEl]);

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, (0, _extends2["default"])({
    modifiers: [{
      name: 'offset',
      options: {
        offset: offset
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, children ? /*#__PURE__*/React.cloneElement(children, {
    ref: setReferenceElement
  }) : null, open || keepMounted ? /*#__PURE__*/React.createElement(_Portal["default"], {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/React.cloneElement(pop, (0, _extends2["default"])({}, attributes.popper, props, {
    ref: popperRef,
    style: (0, _extends2["default"])({}, styles.popper, {
      zIndex: 2,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'all' : 'none'
    }, pop.props.style)
  }))) : null);
});
exports.Popover = Popover;
Popover.bdsName = 'Popover';
var _default = Popover;
exports["default"] = _default;