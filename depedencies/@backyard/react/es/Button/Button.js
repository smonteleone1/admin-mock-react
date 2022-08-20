import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "variant", "iconAfter", "iconBefore", "shape", "color", "disabled", "size", "fullWidth", "elevation", "style", "type", "onClick", "onKeyDown", "onFocus"];
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

const Button = /*#__PURE__*/React.forwardRef(function Button(_ref, ref) {
  let {
    children,
    className,
    variant = 'primary',
    iconAfter: iconAfterProp,
    iconBefore: iconBeforeProp,
    shape: shapeProp,
    // = 'rounded',
    color = 'interactive',
    disabled = false,
    size = 'medium',
    fullWidth = false,
    elevation = false,
    style,
    type = 'button',
    onClick,
    onKeyDown,
    onFocus
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  const {
    shape: shapeContext
  } = theme.context;
  const innerRef = useForwardedRef(ref); // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // If `iconBefore` defined, insert into <span>

  const iconBefore = iconBeforeProp && /*#__PURE__*/React.createElement("span", {
    className: "btn-start-icon"
  }, iconBeforeProp); // If `iconAfter` defined, insert into <span>

  const iconAfter = iconAfterProp && /*#__PURE__*/React.createElement("span", {
    className: "btn-end-icon"
  }, iconAfterProp);
  /**
   * Handles `onFocus` event of button
   * Triggers defined `onFocus` from props if available
   *
   * @param {Event} event - DOM event
   */

  const handleFocus = event => {
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


  const handleClick = event => {
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


  const handleKeyDown = event => {
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

  const createVariantStyles = (variant, color) => {
    switch (variant) {
      case 'secondary':
      case 'tertiary':
      case 'ghost':
      case 'inverse':
        return {
          '--btn-base': color === 'neutral' ? theme.color.border_default : theme.color[`action_${color}`],
          '--btn-base-subdued': variant === 'inverse' ? theme.color.surface_default : theme.color[`action_${color}_subdued`],
          '--btn-hover': theme.color[`action_${color}_subdued_hover`],
          '--btn-pressed': theme.color[`action_${color}_subdued_pressed`],
          '--btn-focus': color === 'neutral' ? theme.color.border_default : theme.color[`action_${color}`],
          '--btn-text': color === 'neutral' ? theme.color.text_primary : theme.color[`text_${color}`],
          '--btn-icon': color === 'neutral' ? theme.color.icon_primary : theme.color[`icon_${color}`],
          '--btn-disabled': theme.color.text_disabled,
          '--btn-disabled-subdued': theme.color.surface_subdued
        };

      default:
        return {
          '--btn-base': theme.color[`action_${color}`],
          '--btn-hover': theme.color[`action_${color}_hover`],
          '--btn-pressed': theme.color[`action_${color}_pressed`],
          '--btn-focus': color === 'neutral' ? theme.color.border_default : theme.color.focus_inverse,
          '--btn-text': color === 'neutral' ? theme.color.text_primary : theme.color.text_solid_inverse,
          '--btn-icon': color === 'neutral' ? theme.color.icon_primary : theme.color.icon_solid_inverse,
          '--btn-disabled': theme.color.text_disabled,
          '--btn-onDisabled': theme.color.text_disabled_inverse
        };
    }
  }; // Side effect for when button changes disabled state,


  React.useEffect(() => {
    // If button is disabled,
    if (disabled) {
      // Blur button from focus
      innerRef.current?.blur();
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
    className: classnames(`backyard button size--${size} variant--${variant} color--${color} shape--${shape}`, className, fullWidth && 'full-width', elevation && (variant === 'primary' || variant === 'tertiary' || variant === 'inverse') && 'elevation', disabled && "disabled"),
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