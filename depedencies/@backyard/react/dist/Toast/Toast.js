"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Toast = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SuccessFilled = _interopRequireDefault(require("@backyard/icons/SuccessFilled"));

var _ErrorFilled = _interopRequireDefault(require("@backyard/icons/ErrorFilled"));

var _InfoFilled = _interopRequireDefault(require("@backyard/icons/InfoFilled"));

var _WarningFilled = _interopRequireDefault(require("@backyard/icons/WarningFilled"));

var _useAlert2 = _interopRequireDefault(require("../Alert/useAlert"));

var _ThemeProvider = require("../ThemeProvider");

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _ToastWrapper = _interopRequireDefault(require("./styles/ToastWrapper"));

var _excluded = ["children", "className", "closed", "closeDelay", "autoCloseAfter", "noClose", "noTimestamp", "date", "timestamp", "title", "subtitle", "action", "actionTo", "actionLinkProps", "elevation", "multiline", "iconProps", "size", "type", "shape", "onClose", "onActionClick", "style", "closeButtonProps", "width", "height"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Map of icons
 */
var Icons = {
  info: function info(props) {
    return /*#__PURE__*/React.createElement(_InfoFilled["default"], props);
  },
  error: function error(props) {
    return /*#__PURE__*/React.createElement(_ErrorFilled["default"], props);
  },
  success: function success(props) {
    return /*#__PURE__*/React.createElement(_SuccessFilled["default"], props);
  },
  warning: function warning(props) {
    return /*#__PURE__*/React.createElement(_WarningFilled["default"], props);
  }
};
/**
 * Backyard React Toast
 *
 * Component for displaying severity levels of 'success', 'info', 'warning', 'error' with a timestamp
 *
 * This component is similar to `Alert`
 *
 * The toast is closeable by default
 *
 * By default, a local timestamp is created when the toast is created
 * An external pre-computed timestamp and text can be supplied via `timestamp` prop
 * An external pre-computed JS Date can be given via `date` prop as well
 *
 * The toast is always multiline
 *
 *  <Toast
 *      type="info"
 *      title="Note"
 *  >
 *      This is the subtitle of the toast.
 *  </Toast>
 */

var Toast = /*#__PURE__*/React.forwardRef(function Toast(_ref, ref) {
  var _div;

  var children = _ref.children,
      className = _ref.className,
      _ref$closed = _ref.closed,
      closedProp = _ref$closed === void 0 ? false : _ref$closed,
      _ref$closeDelay = _ref.closeDelay,
      closeDelay = _ref$closeDelay === void 0 ? 0 : _ref$closeDelay,
      autoCloseAfter = _ref.autoCloseAfter,
      _ref$noClose = _ref.noClose,
      noClose = _ref$noClose === void 0 ? false : _ref$noClose,
      _ref$noTimestamp = _ref.noTimestamp,
      noTimestamp = _ref$noTimestamp === void 0 ? false : _ref$noTimestamp,
      dateProp = _ref.date,
      _ref$timestamp = _ref.timestamp,
      timestampProp = _ref$timestamp === void 0 ? 'Just Now' : _ref$timestamp,
      titleProp = _ref.title,
      subtitleProp = _ref.subtitle,
      action = _ref.action,
      actionTo = _ref.actionTo,
      actionLinkProps = _ref.actionLinkProps,
      _ref$elevation = _ref.elevation,
      elevation = _ref$elevation === void 0 ? true : _ref$elevation,
      _ref$multiline = _ref.multiline,
      multiline = _ref$multiline === void 0 ? true : _ref$multiline,
      iconPropsProp = _ref.iconProps,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'standard' : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type,
      shapeProp = _ref.shape,
      onClose = _ref.onClose,
      onActionClick = _ref.onActionClick,
      styleProp = _ref.style,
      closeButtonProps = _ref.closeButtonProps,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Toast'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Hold ref to get event target

  var innerRef = (0, _useForwardedRef["default"])(ref); // Current date
  // Maintains current date even when other states change, like the theme

  var date = React.useMemo(function () {
    return dateProp || new Date();
  }, [dateProp]); // Get relevant icon from icon map

  var Icon = Icons[type]; // Create local timestamp

  var timestamp = React.useMemo(function () {
    if (dateProp) {
      var hours = "".concat(date.getHours()).padStart(2, '0');
      var minutes = "".concat(date.getMinutes()).padStart(2, '0');
      var seconds = "".concat(date.getSeconds()).padStart(2, '0');
      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }

    return timestampProp;
  }, [dateProp, timestampProp]);

  var _useAlert = (0, _useAlert2["default"])({
    component: 'toast',
    innerRef: innerRef,
    onClose: onClose,
    closeDelay: closeDelay,
    onActionClick: onActionClick,
    autoCloseAfter: autoCloseAfter,
    closed: closedProp,
    action: action,
    actionTo: actionTo,
    actionLinkProps: actionLinkProps,
    noClose: noClose,
    size: size,
    closeButtonProps: closeButtonProps,
    title: titleProp,
    children: children,
    subtitle: subtitleProp,
    type: type,
    multiline: multiline,
    width: width,
    elevation: elevation,
    height: height,
    style: styleProp,
    iconProps: iconPropsProp
  }),
      closed = _useAlert.closed,
      actionLink = _useAlert.actionLink,
      closeButton = _useAlert.closeButton,
      title = _useAlert.title,
      subtitle = _useAlert.subtitle,
      style = _useAlert.style,
      iconProps = _useAlert.iconProps; // Memoize timestamp render


  var timestampText = React.useMemo(function () {
    return !noTimestamp && timestamp ? _div || (_div = /*#__PURE__*/React.createElement("div", {
      className: "toast-timestamp"
    }, timestamp)) : null;
  }, [noTimestamp, timestamp]);
  /**
   * Layout:
   *  <div wrapper>
   *      <span icon />
   *      <span>
   *          <div title />
   *          <div subtitle />
   *          <div timestamp />
   *      </span>
   *      <span close />
   *  </div>
   */

  return !closed ? /*#__PURE__*/React.createElement(_ToastWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("toast type--".concat(type, " size--").concat(size, " shape--").concat(shape), className, multiline && "multiline"),
    multiline: multiline,
    style: style
  }, props, {
    ref: innerRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "toast-icon"
  }, /*#__PURE__*/React.createElement(Icon, iconProps)), /*#__PURE__*/React.createElement("div", {
    className: 'toast-body' + (multiline ? " multiline" : "")
  }, title, subtitle, /*#__PURE__*/React.createElement("div", {
    className: "toast-sub-body"
  }, timestampText, actionLink)), closeButton) : null;
});
exports.Toast = Toast;
Toast.bdsName = 'Toast';
var _default = Toast;
exports["default"] = _default;