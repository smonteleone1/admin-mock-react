import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _div;

const _excluded = ["children", "className", "closed", "closeDelay", "autoCloseAfter", "noClose", "title", "subtitle", "action", "actionTo", "actionLinkProps", "elevation", "iconProps", "multiline", "size", "type", "shape", "onClose", "onActionClick", "style", "closeButtonProps", "width", "height"];
import * as React from 'react';
import classNames from 'classnames';
import SuccessFilled from '@backyard/icons/SuccessFilled';
import ErrorFilled from '@backyard/icons/ErrorFilled';
import InfoFilled from '@backyard/icons/InfoFilled';
import WarningFilled from '@backyard/icons/WarningFilled';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import useAlert from './useAlert';
import AlertWrapper from './styles/AlertWrapper';
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
 * Backyard React Alert
 *
 * Component for displaying severity levels of 'success', 'info', 'warning', 'error'
 *
 * The alert is closeable by default
 *
 * To include an action link, define the `action` prop with the text you want
 * The `actionTo` and `onActionClick` are helper props for accessing the link's `href` and `onClick` handler respectively
 * These can be overridden, along with other props, via defining the `actionProps` prop with an object of props
 *
 * The alert is single line by default: the title and subtitles are on the same line
 * To give the subtitle more room, `multiline` flag can be provided to convert the title and subtitle to block display
 *
 *  <Alert
 *      type="info"
 *      title="Note"
 *  >
 *      This is the subtitle of the alert.
 *  </Alert>
 */

const Alert = /*#__PURE__*/React.forwardRef(function Alert(_ref, ref) {
  let {
    children,
    className,
    closed: closedProp = false,
    closeDelay = 0,
    autoCloseAfter,
    noClose = false,
    title: titleProp,
    subtitle: subtitleProp,
    action,
    actionTo,
    actionLinkProps,
    elevation = true,
    iconProps: iconPropsProp,
    multiline = false,
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

  // Get Backyard Theme
  const theme = useBackyardTheme({
    validate: true,
    name: 'Alert'
  }); // Get shape context

  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Hold ref to get event target

  const innerRef = useForwardedRef(ref); // Get relevant icon from icon map

  const Icon = Icons[type];
  const {
    closed,
    actionLink,
    closeButton,
    title,
    subtitle,
    style,
    iconProps
  } = useAlert({
    component: 'alert',
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
  });
  /**
   * Layout:
   *  <div wrapper>
   *      <span icon />
   *      <span>
   *          <span title />
   *          <span subtitle />
   *      </span>
   *      <span action />
   *      <span close />
   *  </div>
   */

  return !closed ? /*#__PURE__*/React.createElement(AlertWrapper, _extends({
    className: classNames(`alert type--${type} size--${size} shape--${shape}`, className, multiline && "multiline"),
    multiline: multiline,
    style: style
  }, props, {
    ref: innerRef
  }), _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "alert-indicator"
  })), /*#__PURE__*/React.createElement("div", {
    className: "alert-icon"
  }, /*#__PURE__*/React.createElement(Icon, iconProps)), /*#__PURE__*/React.createElement("div", {
    className: 'alert-body' + (multiline ? " multiline" : "")
  }, title, subtitle, /*#__PURE__*/React.createElement("div", {
    className: "alert-sub-body"
  }, actionLink)), closeButton) : null;
});
Alert.bdsName = 'Alert';
export { Alert };
export default Alert;