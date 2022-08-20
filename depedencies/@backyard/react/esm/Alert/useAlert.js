import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _Close;

import * as React from 'react';
import classNames from 'classnames';
import Close from '@backyard/icons/Close';
import Link from '../Link';
import IconButton from '../IconButton';
import { useBackyardTheme } from '../ThemeProvider';

var useAlert = function useAlert(_ref) {
  var _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'alert' : _ref$component,
      innerRef = _ref.innerRef,
      onClose = _ref.onClose,
      closeDelay = _ref.closeDelay,
      onActionClick = _ref.onActionClick,
      autoCloseAfter = _ref.autoCloseAfter,
      closedProp = _ref.closed,
      action = _ref.action,
      actionTo = _ref.actionTo,
      actionLinkProps = _ref.actionLinkProps,
      noClose = _ref.noClose,
      size = _ref.size,
      closeButtonProps = _ref.closeButtonProps,
      titleProp = _ref.title,
      children = _ref.children,
      subtitleProp = _ref.subtitle,
      type = _ref.type,
      multiline = _ref.multiline,
      width = _ref.width,
      elevation = _ref.elevation,
      height = _ref.height,
      styleProp = _ref.style,
      iconPropsProp = _ref.iconProps;
  var theme = useBackyardTheme(); // State of whether or not <Alert> is closed

  var _React$useState = React.useState(closedProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */


  function getEvent(event) {
    return event;
  }
  /**
   * Handles `onClick` event of the close icon
   * Triggers defined `onClose` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleClose = function handleClose(event) {
    // If not closed,
    if (!closed) {
      // If `onClose` prop defined,
      if (onClose) {
        // Trigger `onClose` prop function
        onClose(getEvent(event), event.target);
      } // Close alert after delay


      if (closeDelay) {
        setTimeout(function () {
          return setClosed(true);
        }, closeDelay);
      } else {
        setClosed(true);
      }
    }
  };
  /**
   * Handles `onClick` event of action link
   * Triggers defined `onActionClick` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleActionClick = function handleActionClick(event) {
    // If not closed,
    if (!closed) {
      // If `onActionClick` prop defined,
      if (onActionClick) {
        // Trigger `onActionClick` prop function
        onActionClick(getEvent(event), event.target);
      }
    }
  };
  /**
   * Handles `onKeyDown` event of `input`
   * Triggers defined `onKeyDown` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleCloseKeyDown = function handleCloseKeyDown(event) {
    // If not closed,
    if (!closed) {
      // Get key from event
      var key = event.key; // If space or enter key pressed,

      if (['Enter'].includes(key)) {
        // Prevent default
        event.preventDefault(); // Close

        handleClose(getEvent(event));
      }
    }
  }; // Side effect for when component mounts...
  // eslint-disable-next-line consistent-return


  React.useEffect(function () {
    // If auto close after defined and set to a time,
    if (autoCloseAfter > 0) {
      // Set auto close timeout...
      var autoClose = setTimeout(function () {
        // Handle close
        handleClose({
          target: innerRef.current
        });
      }, autoCloseAfter); // When component unmounts...

      return function () {
        // If auto close timeout defined,
        if (autoClose) {
          // Clear timeout
          clearTimeout(autoClose);
        }
      };
    }
  }, []); // Side effect for when closedProp changes externally...

  React.useEffect(function () {
    // If closedProp is true and not closed,
    if (closedProp && !closed) {
      // Handle close
      handleClose({
        target: innerRef.current
      });
    } // If closedProp is false and is closed,


    if (!closedProp && closed) {
      // Set not closed
      setClosed(false);
    }
  }, [closedProp]); // If action defined, include link

  var actionLink = React.useMemo(function () {
    return action ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(component, "-action")
    }, /*#__PURE__*/React.createElement(Link, _extends({
      underline: component === 'toast' ? 'never' : 'always',
      to: actionTo,
      size: "medium",
      onClick: handleActionClick
    }, actionLinkProps), action)) : null;
  }, [action, actionTo, actionLinkProps]); // If noClose is not true, include close

  var closeButton = React.useMemo(function () {
    return !noClose ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(component, "-close")
    }, /*#__PURE__*/React.createElement(IconButton, _extends({
      variant: "ghost",
      color: "neutral",
      size: size === 'jumbo' ? 'medium' : 'small',
      "aria-label": "Close ".concat(component)
    }, closeButtonProps, {
      className: classNames('close-button', closeButtonProps === null || closeButtonProps === void 0 ? void 0 : closeButtonProps.className),
      onClick: function onClick(event) {
        handleClose(getEvent(event));

        if (closeButtonProps !== null && closeButtonProps !== void 0 && closeButtonProps.onClick) {
          closeButtonProps.onClick(getEvent(event));
        }
      },
      onKeyDown: function onKeyDown(event) {
        handleCloseKeyDown(getEvent(event));

        if (closeButtonProps !== null && closeButtonProps !== void 0 && closeButtonProps.onKeyDown) {
          closeButtonProps.onKeyDown(getEvent(event));
        }
      }
    }), _Close || (_Close = /*#__PURE__*/React.createElement(Close, null)))) : null;
  }, [noClose, size, closeButtonProps]); // Memoize title render

  var title = React.useMemo(function () {
    return titleProp ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(component, "-title")
    }, titleProp) : null;
  }, [titleProp]); // Memoize subtitle render

  var subtitle = React.useMemo(function () {
    return (// Subtitle defined by either `children` or `subtitle` prop
      children || subtitleProp ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(component, "-subtitle")
      }, children || subtitleProp) : null
    );
  }, [children, subtitleProp]); // Memoize colors

  var colors = React.useMemo(function () {
    return {
      info: {
        surface: 'var(--bds-color-surface-blue)',
        surface_subdued: 'var(--bds-color-surface-blue-subdued)'
      },
      warning: {
        surface: 'var(--bds-color-surface-gold)',
        surface_subdued: 'var(--bds-color-surface-gold-subdued)'
      },
      success: {
        surface: 'var(--bds-color-surface-green)',
        surface_subdued: 'var(--bds-color-surface-green-subdued)'
      },
      error: {
        surface: 'var(--bds-color-surface-red)',
        surface_subdued: 'var(--bds-color-surface-red-subdued)'
      }
    }[type];
  }, [type]); // Memoize sizes

  var sizes = React.useMemo(function () {
    return {
      standard: {
        // Height of the alert
        height: multiline ? 'auto' : 'var(--bds-sizes-size-56)',
        // Size of the icon
        icon: 'size_24'
      },
      medium: {
        // Height of the alert
        height: multiline ? 'auto' : 'var(--bds-sizes-size-56)',
        // Size of the icon
        icon: 'size_24'
      },
      jumbo: {
        // Height of the alert
        height: multiline ? 'auto' : 'var(--bds-sizes-size-64)',
        // Size of the icon
        icon: 'size_32'
      }
    }[size];
  }, [size, multiline]); // Memoize style cssvars

  var style = React.useMemo(function () {
    return _extends({
      // Fonts
      '--style-alert-font-family': theme.font.family[theme.context.font],
      '--style-alert-title-font-weight': theme.context.font === 'roboto' ? 'var(--bds-font-weight-medium)' : 'var(--bds-font-weight-semibold)',
      // Colors
      '--style-alert-color-icon': colors.surface,
      '--style-alert-color-indicator': colors.surface,
      '--style-alert-color-background': colors.surface_subdued,
      // Misc.
      '--style-alert-multiline-display': multiline ? 'block' : 'inline-block',
      '--style-alert-width': theme.sizes[width] || width || 'auto',
      '--style-alert-height': theme.sizes[height] || height || sizes.height,
      '--style-alert-elevation': elevation ? // If elevation is true,
      elevation === true ? // Use default elevation
      'var(--bds-shadows-shadow-03)' : // Else, use defined elevation
      theme.shadows[elevation] || elevation : 'none'
    }, styleProp);
  }, [styleProp, theme, colors, multiline, elevation]); // Memoize icon props

  var iconProps = React.useMemo(function () {
    return _extends({
      size: sizes.icon
    }, iconPropsProp);
  }, [sizes, iconPropsProp]);
  return {
    getEvent: getEvent,
    handleClose: handleClose,
    handleActionClick: handleActionClick,
    handleCloseKeyDown: handleCloseKeyDown,
    actionLink: actionLink,
    closeButton: closeButton,
    title: title,
    subtitle: subtitle,
    colors: colors,
    sizes: sizes,
    style: style,
    iconProps: iconProps,
    closed: closed
  };
};

export { useAlert };
export default useAlert;