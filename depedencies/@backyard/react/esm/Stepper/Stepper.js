import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _Minus, _Plus;

var _excluded = ["className", "disabled", "incrementNumLabel", "decrementNumLabel", "incrementProps", "decrementProps", "iconDescription", "id", "label", "max", "min", "hideButtons", "onBlur", "onFocus", "onChange", "step", "roundToStep", "value", "defaultValue", "ariaLabel", "shape", "size", "state", "style", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';
import Minus from '@backyard/icons/Minus';
import Plus from '@backyard/icons/Plus';
import IconButton from '../IconButton';
import TextInput from '../TextInput';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import StepperWrapper from './styles/StepperWrapper';
/**
 * Clamps value to a minimum number
 *
 * @param {number} min
 * @param {number} value
 * @returns {number} Minimum-clamped value
 */

var clampMin = function clampMin(min, value) {
  return isNaN(min) || !min && min !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.max(min, value);
};
/**
 * Clamps value to a maximum number
 *
 * @param {number} max
 * @param {number} value
 * @returns {number} Maximum-clamped value
 */


var clampMax = function clampMax(max, value) {
  return isNaN(max) || !max && max !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.min(max, value);
};
/**
 * Clamps value between a minimum and a maximum
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value value between min and max
 */


var clampBetween = function clampBetween(min, max, value) {
  return clampMin(min, clampMax(max, value));
};
/**
 * Backyard React Stepper
 *
 * Stepper component consists of a minus and plus button, and a text input
 * along with some useful logic to handle max, mins, and steps.
 * The text input for `Stepper` will only accept numbers.
 *
 *  <Stepper step={2} max={10} label="Qty." />
 *
 * When the `min` value is reached, the minus will become disabled and the user
 * will not be able to type a number that is less than it.
 * The same is vice-versa for `max`
 *
 * The `step` prop allows for increments and decrements from the button clicks to
 * step by the value given.
 *
 * The `roundToStep` prop will use the `min` value as a base and only allow values
 * that `step` factors into with a base of `min`. This includes the user typing.
 * For example, if `min=1`, `step=3`, and `max=12`, then the only possible values the
 * stepper can be are [1, 4, 7, 10]. Max (12) in this case cannot be reached because we are
 * stepping by 3s from a base of 1. If the user attempts to type in a value of 8, then the
 * value will round to the nearest possible step, which is 7 in this case.
 */


var Stepper = /*#__PURE__*/React.forwardRef(function Stepper(_ref, ref) {
  var className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      incrementNumLabel = _ref.incrementNumLabel,
      decrementNumLabel = _ref.decrementNumLabel,
      incrementProps = _ref.incrementProps,
      decrementProps = _ref.decrementProps,
      _ref$iconDescription = _ref.iconDescription,
      iconDescription = _ref$iconDescription === void 0 ? 'Increment or Decrement Number' : _ref$iconDescription,
      id = _ref.id,
      label = _ref.label,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 999 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$hideButtons = _ref.hideButtons,
      hideButtons = _ref$hideButtons === void 0 ? false : _ref$hideButtons,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$roundToStep = _ref.roundToStep,
      roundToStep = _ref$roundToStep === void 0 ? false : _ref$roundToStep,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'Stepper number input field with increment and decrement buttons' : _ref$ariaLabel,
      shapeProp = _ref.shape,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'default' : _ref$state,
      style = _ref.style,
      wrapperProps = _ref.wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme({
    validate: true,
    name: 'Stepper'
  }); // Get backyard shape from context

  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Inner Ref of `input`

  var innerRef = useForwardedRef(ref); // Controlled value of Stepper

  var _React$useState = React.useState(valueProp || Number(clampMin(min, defaultValue))),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1]; // Manage state of previous value


  var _React$useState3 = React.useState(Number(clampMin(min, defaultValue))),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      previous = _React$useState4[0],
      setPrevious = _React$useState4[1]; // Value prop side effects...


  React.useEffect(function () {
    // Set new controlled value
    if (valueProp !== value) {
      setValue(valueProp || Number(clampMin(min, defaultValue)));
    }
  }, [valueProp]);
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */

  var handleChange = function handleChange(event) {
    // If `input` not disabled,
    if (!disabled) {
      // Don't bubble up event
      persistSyntheticEvent(event); // New Value, unclamped until blur

      var newValue = event.target.value; // Set previous state value and new value

      setPrevious(value);
      setValue(newValue); // Force target to `input`
      // eslint-disable-next-line no-param-reassign

      event.target = _extends({}, innerRef.current, {
        value: newValue
      }); // If `onChange` prop defined,

      if (onChange) {
        // Trigger `onChange` function
        // Provides `Event` type and object containing current and previous values
        onChange(event, {
          current: String(newValue),
          previous: String(value)
        });
      }
    }
  };
  /**
   * Handles `onFocus` event for `input`
   * Selects full number on focus
   *
   * @param event
   */


  var handleFocus = function handleFocus(event) {
    if (!disabled) {
      var _innerRef$current;

      // Select all text in input
      innerRef === null || innerRef === void 0 ? void 0 : (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.select(); // If `onFocus` defined,

      if (onFocus) {
        // Fire custom `onFocus`
        onFocus(event);
      }
    }
  };
  /**
   * Handles `onBlur` event of `input`
   * Triggers defined `onBlur` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleBlur = function handleBlur(event) {
    // If `input` not disabled,
    if (!disabled) {
      // Don't bubble up event
      persistSyntheticEvent(event); // Clamp new value to be between min and max

      var newValue = clampBetween(min, max, event.target.value); // If rounding to step enabled,

      if (roundToStep) {
        // Get factor from factoring step from new value
        var factor = (newValue - min) / step; // If factor is not an integer,

        if (!Number.isInteger(factor)) {
          // Get distance from integer (0.0 - 1.0)
          var distance = factor * 10 % 10 / 10; // Calculate new step up and step down, base min

          var stepUp = newValue + step - (newValue - min) % step;
          var stepDown = newValue - (newValue - min) % step; // If closer to next integer,

          if (distance >= 0.5 && stepUp <= max) {
            // Round new value to step up
            newValue = stepUp;
          } else {
            // Else, closer to previous integer,
            // Round new value to step down
            newValue = stepDown;
          }
        }
      } // Set previous state value and new value


      setPrevious(value);
      setValue(newValue); // Force target to `input`
      // eslint-disable-next-line no-param-reassign

      event.target = _extends({}, innerRef.current, {
        value: newValue
      }); // If `onBlur` prop defined,

      if (onBlur) {
        // Trigger `onBlur` function
        // Provides `Event` type and object containing current and previous values
        onBlur(event, {
          current: String(newValue),
          previous: String(value)
        });
      } // If `onChange` prop defined,


      if (onChange) {
        // Trigger `onChange` function
        // Provides `Event` type and object containing current and previous values
        onChange(event, {
          current: String(newValue),
          previous: String(value)
        });
      }
    }
  };
  /**
   * Handles `onClick` event of `IconButton`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   * @param {string} action - 'increment' or 'decrement'
   */


  var handleButtonClick = function handleButtonClick(event, action) {
    // Convert value to number if string
    var newValue = typeof value === 'string' ? Number(value) : value; // Determine whether or not value is between min and max

    var isBetweenMinAndMax = action === 'increment' ? max !== undefined && newValue < max || max === undefined : min !== undefined && newValue > min || min === undefined; // If `input` is not disabled and value is between min and max,

    if (!disabled && isBetweenMinAndMax) {
      // Perform increment or decrement action on value
      newValue = clampBetween(min, max, action === 'increment' ? newValue + step : newValue - step); // If rounding to step enabled,

      if (roundToStep) {
        // Get factor from factoring step from new value
        var factor = (newValue - min) / step; // If factor is not an integer,

        if (!Number.isInteger(factor)) {
          // Get distance from integer (0.0 - 1.0)
          var distance = factor * 10 % 10 / 10;
          var stepUp = newValue + step - (newValue - min) % step;
          var stepDown = newValue - (newValue - min) % step; // If closer to next integer,

          if (distance >= 0.5 && stepUp <= max) {
            // Round new value to step up
            newValue = stepUp;
          } else {
            // Else, closer to previous integer,
            // Round new value to step down
            newValue = stepDown;
          }
        }
      } // Don't bubble event


      persistSyntheticEvent(event); // Force target to `input` instead of `IconButton`
      // eslint-disable-next-line no-param-reassign

      event.target = _extends({}, innerRef.current, {
        value: newValue
      }); // Set previous value and current value states

      setPrevious(value);
      setValue(newValue); // If `onChange` prop defined,

      if (onChange) {
        // Trigger `onChange` function
        // Provides `Event` type and object containing the action, current, and previous values
        onChange(event, {
          action: action,
          current: String(newValue),
          previous: String(value)
        });
      }
    }
  }; // Stepper styles


  var stepperStyles = React.useMemo(function () {
    return {
      // Length (width/height) of the stepper text input
      '--style-stepper-length': {
        jumbo: 'var(--bds-sizes-size-64)',
        large: 'var(--bds-sizes-size-56)',
        medium: 'var(--bds-sizes-size-48)',
        small: 'var(--bds-sizes-size-40)'
      }[size],
      '--style-stepper-font-family': theme.font.family[theme.context.font]
    };
  }, [theme.name, size]);
  var buttonSize = React.useMemo(function () {
    return {
      jumbo: 'large',
      large: 'medium',
      medium: 'small',
      small: 'extra_small'
    }[size];
  }, [size]);
  /**
   * Layout:
   *
   *  <StepperWrapper>
   *      <div>
   *          <IconButton minus />
   *          <input />
   *          <IconButton plus />
   *      </div>
   *      <label />
   *  </StepperWrapper>
   */

  return /*#__PURE__*/React.createElement(StepperWrapper, _extends({
    className: "stepper--wrapper"
  }, wrapperProps, {
    style: _extends({}, stepperStyles, style, wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.style)
  }), /*#__PURE__*/React.createElement("div", {
    className: "stepper--fields shape--".concat(shape, " size--").concat(size, " state--").concat(state) + (disabled ? " disabled" : "")
  }, !hideButtons ? /*#__PURE__*/React.createElement(IconButton, _extends({
    className: "stepper--decrement",
    variant: "ghost",
    color: "interactive",
    size: buttonSize,
    shape: "circle",
    disabled: disabled || value <= min || roundToStep && value - step < min,
    onClick: function onClick(event) {
      return handleButtonClick(event, 'decrement');
    },
    "aria-label": incrementNumLabel || iconDescription,
    "aria-live": "polite",
    "aria-atomic": "true"
  }, decrementProps), _Minus || (_Minus = /*#__PURE__*/React.createElement(Minus, null))) : null, /*#__PURE__*/React.createElement(TextInput, _extends({
    key: "stepper__".concat(state),
    "aria-label": ariaLabel,
    label: ariaLabel,
    hiddenLabel: true,
    className: classNames("backyard stepper", className),
    "data-value-current": typeof value !== 'undefined' ? value : '',
    "data-value-previous": typeof value !== 'undefined' ? previous : '',
    disabled: disabled,
    id: id,
    max: max,
    min: min,
    step: step,
    type: "number",
    pattern: "[0-9]*",
    ref: innerRef,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    value: typeof value !== 'undefined' ? value : '',
    size: size,
    role: "spinbutton"
  }, props)), !hideButtons ? /*#__PURE__*/React.createElement(IconButton, _extends({
    className: "stepper--increment",
    variant: "ghost",
    color: "interactive",
    size: buttonSize,
    shape: "circle",
    disabled: disabled || value >= max || roundToStep && value + step > max,
    onClick: function onClick(event) {
      return handleButtonClick(event, 'increment');
    },
    "aria-label": incrementNumLabel || iconDescription,
    "aria-live": "polite",
    "aria-atomic": "true"
  }, incrementProps), _Plus || (_Plus = /*#__PURE__*/React.createElement(Plus, null))) : null), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "stepper--label"
  }, label) : null);
});
Stepper.bdsName = 'Stepper';
export { Stepper };
export default Stepper;