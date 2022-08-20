import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "variant", "iconAfter", "iconBefore", "shape", "color", "disabled", "size", "fullWidth", "elevation", "style", "type", "onClick", "onKeyDown", "onFocus"];
import * as React from 'react';
import classnames from 'classnames';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import ButtonBase from './styles/ButtonBase';
import { useForwardedRef } from '../utils/hooks';
/**
 * Backyard React Button
 *
 * Button for interacting via text.
 *
 * For Icon only buttons, see `IconButton` instead.
 *
 *  <Button
 *      variant='primary'
 *      color='commerce'
 *      iconAfter={<ChevronRight />}
 *  >
 *      Checkout
 *  </Button>
 */

var Button = /*#__PURE__*/React.forwardRef(function Button(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      iconAfterProp = _ref.iconAfter,
      iconBeforeProp = _ref.iconBefore,
      shapeProp = _ref.shape,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      _ref$elevation = _ref.elevation,
      elevation = _ref$elevation === void 0 ? false : _ref$elevation,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onFocus = _ref.onFocus,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  var shapeContext = theme.context.shape;
  var innerRef = useForwardedRef(ref); // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // If `iconBefore` defined, insert into <span>

  var iconBefore = iconBeforeProp && /*#__PURE__*/React.createElement("span", {
    className: "btn-start-icon"
  }, iconBeforeProp); // If `iconAfter` defined, insert into <span>

  var iconAfter = iconAfterProp && /*#__PURE__*/React.createElement("span", {
    className: "btn-end-icon"
  }, iconAfterProp);
  /**
   * Handles `onFocus` event of button
   * Triggers defined `onFocus` from props if available
   *
   * @param {Event} event - DOM event
   */

  var handleFocus = function handleFocus(event) {
    // Persist event propagation
    persistSyntheticEvent(event); // If not disabled,

    if (!disabled) {
      // If `onFocus` prop defined,
      if (onFocus) {
        // Trigger `onFocus` prop function
        onFocus(event);
      }
    }
  };
  /**
   * Handles `onClick` event of button
   * Triggers defined `onClick` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleClick = function handleClick(event) {
    // Persist event propagation
    persistSyntheticEvent(event); // If not disabled,

    if (!disabled) {
      // If `onClick` prop defined,
      if (onClick) {
        // Trigger `onClick` prop function
        onClick(event);
      }
    }
  };
  /**
   * Handles `onKeyDown` event of button
   * Triggers defined `onKeyDown` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleKeyDown = function handleKeyDown(event) {
    // Persist event propagation
    persistSyntheticEvent(event);

    if (!disabled) {
      // If `onKeyDown` prop defined,
      if (onKeyDown) {
        // Trigger `onKeyDown` prop function
        onKeyDown(event);
      }
    }
  };

  var createVariantStyles = function createVariantStyles(variant, color) {
    switch (variant) {
      case 'secondary':
      case 'tertiary':
      case 'ghost':
      case 'inverse':
        return {
          '--btn-base': color === 'neutral' ? theme.color.border_default : theme.color["action_".concat(color)],
          '--btn-base-subdued': variant === 'inverse' ? theme.color.surface_default : theme.color["action_".concat(color, "_subdued")],
          '--btn-hover': theme.color["action_".concat(color, "_subdued_hover")],
          '--btn-pressed': theme.color["action_".concat(color, "_subdued_pressed")],
          '--btn-focus': color === 'neutral' ? theme.color.border_default : theme.color["action_".concat(color)],
          '--btn-text': color === 'neutral' ? theme.color.text_primary : theme.color["text_".concat(color)],
          '--btn-icon': color === 'neutral' ? theme.color.icon_primary : theme.color["icon_".concat(color)],
          '--btn-disabled': theme.color.text_disabled,
          '--btn-disabled-subdued': theme.color.surface_subdued
        };

      default:
        return {
          '--btn-base': theme.color["action_".concat(color)],
          '--btn-hover': theme.color["action_".concat(color, "_hover")],
          '--btn-pressed': theme.color["action_".concat(color, "_pressed")],
          '--btn-focus': color === 'neutral' ? theme.color.border_default : theme.color.focus_inverse,
          '--btn-text': color === 'neutral' ? theme.color.text_primary : theme.color.text_solid_inverse,
          '--btn-icon': color === 'neutral' ? theme.color.icon_primary : theme.color.icon_solid_inverse,
          '--btn-disabled': theme.color.text_disabled,
          '--btn-onDisabled': theme.color.text_disabled_inverse
        };
    }
  }; // Side effect for when button changes disabled state,


  React.useEffect(function () {
    // If button is disabled,
    if (disabled) {
      var _innerRef$current;

      // Blur button from focus
      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.blur();
    }
  }, [disabled]);
  /**
   * Layout:
   *
   *  <ButtonBase>
   *      <span>
   *          <icon (start) />
   *          ...
   *          <icon (end) />
   *      </span>
   *  </ButtonBase>
   */

  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    className: classnames("backyard button size--".concat(size, " variant--").concat(variant, " color--").concat(color, " shape--").concat(shape), className, fullWidth && 'full-width', elevation && (variant === 'primary' || variant === 'tertiary' || variant === 'inverse') && 'elevation', disabled && "disabled"),
    variant: variant,
    disabled: disabled,
    color: color,
    size: size,
    ref: innerRef,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    type: type,
    style: _extends({}, createVariantStyles(variant, color), style)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "label btn-label"
  }, iconBefore, children, iconAfter));
});
Button.bdsName = 'Button';
export { Button };
export default Button;