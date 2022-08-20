import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "closed", "closeDelay", "autoCloseAfter", "noClose", "noTimestamp", "date", "timestamp", "title", "subtitle", "action", "actionTo", "actionLinkProps", "elevation", "multiline", "iconProps", "size", "type", "shape", "onClose", "onActionClick", "style", "closeButtonProps", "width", "height"];
import * as React from 'react';
import classNames from 'classnames';
import SuccessFilled from '@backyard/icons/SuccessFilled';
import ErrorFilled from '@backyard/icons/ErrorFilled';
import InfoFilled from '@backyard/icons/InfoFilled';
import WarningFilled from '@backyard/icons/WarningFilled';
import useAlert from '../Alert/useAlert';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import ToastWrapper from './styles/ToastWrapper';
/**
 * Map of icons
 */

var Icons = {
  info: function info(props) {
    return /*#__PURE__*/React.createElement(InfoFilled, props);
  },
  error: function error(props) {
    return /*#__PURE__*/React.createElement(ErrorFilled, props);
  },
  success: function success(props) {
    return /*#__PURE__*/React.createElement(SuccessFilled, props);
  },
  warning: function warning(props) {
    return /*#__PURE__*/React.createElement(WarningFilled, props);
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
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Toast'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Hold ref to get event target

  var innerRef = useForwardedRef(ref); // Current date
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

  var _useAlert = useAlert({
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

  return !closed ? /*#__PURE__*/React.createElement(ToastWrapper, _extends({
    className: classNames("toast type--".concat(type, " size--").concat(size, " shape--").concat(shape), className, multiline && "multiline"),
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
Toast.bdsName = 'Toast';
export { Toast };
export default Toast;