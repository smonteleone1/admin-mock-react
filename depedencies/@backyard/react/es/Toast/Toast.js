import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "closed", "closeDelay", "autoCloseAfter", "noClose", "noTimestamp", "date", "timestamp", "title", "subtitle", "action", "actionTo", "actionLinkProps", "elevation", "multiline", "iconProps", "size", "type", "shape", "onClose", "onActionClick", "style", "closeButtonProps", "width", "height"];
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

const Icons = {
  info: props => /*#__PURE__*/React.createElement(InfoFilled, props),
  error: props => /*#__PURE__*/React.createElement(ErrorFilled, props),
  success: props => /*#__PURE__*/React.createElement(SuccessFilled, props),
  warning: props => /*#__PURE__*/React.createElement(WarningFilled, props)
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

const Toast = /*#__PURE__*/React.forwardRef(function Toast(_ref, ref) {
  var _div;

  let {
    children,
    className,
    closed: closedProp = false,
    closeDelay = 0,
    autoCloseAfter,
    noClose = false,
    noTimestamp = false,
    date: dateProp,
    timestamp: timestampProp = 'Just Now',
    title: titleProp,
    subtitle: subtitleProp,
    action,
    actionTo,
    actionLinkProps,
    elevation = true,
    multiline = true,
    iconProps: iconPropsProp,
    size = 'standard',
    type = 'info',
    shape: shapeProp,
    // = 'rounded',
    onClose,
    onActionClick,
    style: styleProp,
    closeButtonProps,
    width,
    height
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Toast'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Hold ref to get event target

  const innerRef = useForwardedRef(ref); // Current date
  // Maintains current date even when other states change, like the theme

  const date = React.useMemo(() => dateProp || new Date(), [dateProp]); // Get relevant icon from icon map

  const Icon = Icons[type]; // Create local timestamp

  const timestamp = React.useMemo(() => {
    if (dateProp) {
      const hours = `${date.getHours()}`.padStart(2, '0');
      const minutes = `${date.getMinutes()}`.padStart(2, '0');
      const seconds = `${date.getSeconds()}`.padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

    return timestampProp;
  }, [dateProp, timestampProp]);
  const {
    closed,
    actionLink,
    closeButton,
    title,
    subtitle,
    style,
    iconProps
  } = useAlert({
    component: 'toast',
    innerRef,
    onClose,
    closeDelay,
    onActionClick,
    autoCloseAfter,
    closed: closedProp,
    action,
    actionTo,
    actionLinkProps,
    noClose,
    size,
    closeButtonProps,
    title: titleProp,
    children,
    subtitle: subtitleProp,
    type,
    multiline,
    width,
    elevation,
    height,
    style: styleProp,
    iconProps: iconPropsProp
  }); // Memoize timestamp render

  const timestampText = React.useMemo(() => !noTimestamp && timestamp ? _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "toast-timestamp"
  }, timestamp)) : null, [noTimestamp, timestamp]);
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
    className: classNames(`toast type--${type} size--${size} shape--${shape}`, className, multiline && "multiline"),
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