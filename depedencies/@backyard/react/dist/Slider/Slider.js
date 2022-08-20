"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Slider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _Stepper = _interopRequireDefault(require("../Stepper"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _TooltipPopper = _interopRequireDefault(require("../TooltipPopper"));

var _persistSyntheticEvent = _interopRequireDefault(require("../utils/functions/persistSyntheticEvent"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _functions = require("../utils/functions");

var _hooks = require("../utils/hooks");

var _ThemeProvider = require("../ThemeProvider");

var _SliderUtils = require("./SliderUtils");

var _SliderInputWrapper = _interopRequireDefault(require("./style/SliderInputWrapper"));

var _SliderLayoutWrapper = _interopRequireDefault(require("./style/SliderLayoutWrapper"));

var _SliderWrapper = _interopRequireDefault(require("./style/SliderWrapper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Slider = /*#__PURE__*/React.forwardRef(function Slider(_ref, ref) {
  var className = _ref.className,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? 1 : _ref$defaultValue,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$showInput = _ref.showInput,
      showInput = _ref$showInput === void 0 ? false : _ref$showInput,
      _ref$max = _ref.max,
      maxProp = _ref$max === void 0 ? 10 : _ref$max,
      _ref$min = _ref.min,
      minProp = _ref$min === void 0 ? 1 : _ref$min,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      thumbClassName = _ref.thumbClassName,
      tooltip = _ref.tooltip,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onChangeCommitted = _ref.onChangeCommitted,
      onMouseDown = _ref.onMouseDown,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
      shapeProp = _ref.shape,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      _ref$tooltipProps = _ref.tooltipProps,
      tooltipProps = _ref$tooltipProps === void 0 ? {} : _ref$tooltipProps,
      valueProp = _ref.value;
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Slider'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  /**
   * Different states of the thumb.
   */

  var _React$useState = React.useState(-1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      active = _React$useState4[0],
      setActive = _React$useState4[1];

  var _useIsFocusVisible = (0, _hooks.useIsFocusVisible)(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref; // the component that recieved touch event


  var touchId = React.useRef(null);
  var sliderRef = React.useRef(null);
  var handleFocusRef = (0, _hooks.useForkRef)(focusVisibleRef, sliderRef);
  var handleRef = (0, _hooks.useForkRef)(ref, handleFocusRef); // the state of the slider's value

  var _useControlled = (0, _hooks.useControlled)({
    controlled: valueProp,
    "default": defaultValue,
    name: 'Slider'
  }),
      _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1]; // the slider's visual orientation
  // 'vertical' or 'horizontal'


  var axis = orientation;
  /**
   * Calculates the position of the thumb and the width of the track.
   *
   * @param finger - the position of the pointer event
   */

  function getFingerNewValue(finger) {
    if (disabled) return undefined;
    var slider = sliderRef.current;

    var _slider$getBoundingCl = slider.getBoundingClientRect(),
        width = _slider$getBoundingCl.width,
        height = _slider$getBoundingCl.height,
        bottom = _slider$getBoundingCl.bottom,
        left = _slider$getBoundingCl.left;

    var percent = axis.indexOf('vertical') === 0 ? (bottom - finger.y) / height : (finger.x - left) / width;
    var newValue = (0, _SliderUtils.percentToValue)(percent, minProp, maxProp);
    newValue = (0, _SliderUtils.roundValueToStep)(newValue, step, minProp, maxProp);
    newValue = (0, _SliderUtils.clamp)(newValue, minProp, maxProp);
    return newValue;
  }
  /**
   * Handles the touchMove events on the thumb.
   * Triggers the `onChange` from props if available.
   */


  var handleTouchMove = (0, _hooks.useEventCallback)(function handleTouchMove(event) {
    if (disabled) return;
    var finger = (0, _SliderUtils.trackFinger)(event, touchId);

    if (!finger) {
      return;
    }

    var newValue = getFingerNewValue(finger);
    (0, _SliderUtils.focusThumb)(sliderRef, setActive);
    setValueState(newValue);

    if (onChange && valueDerived !== newValue) {
      onChange(event, String(newValue));
    }
  });
  /**
   * Handles the touchEnd event on the thumb.
   * Triggers the `onChangeCommitted` prop if available.
   */

  var handleTouchEnd = (0, _hooks.useEventCallback)(function handleTouchEnd(event) {
    if (disabled) return;
    var finger = (0, _SliderUtils.trackFinger)(event, touchId);

    if (!finger) {
      return;
    } // const newValue = getFingerNewValue(finger)


    setActive(false);
    touchId.current = undefined;
    var doc = (0, _functions.ownerDocument)(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  });
  /**
   * Handles the touchStart event on the thumb.
   * Triggers the `onChange` prop if available.
   */

  var handleTouchStart = (0, _hooks.useEventCallback)(function handleTouchStart(event) {
    event.preventDefault();
    if (disabled) return;
    var touch = event.changedTouches[0];

    if (touch != null) {
      touchId.current = touch.identifier;
    } // get the position of the pointer event


    var finger = (0, _SliderUtils.trackFinger)(event, touchId); // get the new calculated thumb position

    var newValue = getFingerNewValue(finger); // focus the thumb

    (0, _SliderUtils.focusThumb)(sliderRef, setActive);
    setValueState(newValue);

    if (onChange && valueDerived !== newValue) {
      onChange(event, String(newValue));
    }

    var doc = (0, _functions.ownerDocument)();
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  /**
   *
   * @param newValue
   * @param step
   * @param minProp
   * @param maxProp
   */

  var setCalculatedValue = function setCalculatedValue(newValue, stepArg, minArg, maxArg) {
    // rounds the value the thumb was dropped at to the nearest step
    var roundedValue = (0, _SliderUtils.roundValueToStep)(newValue, stepArg, minArg, maxArg); // clamps the thumb value to the correct value

    var clampedValue = (0, _SliderUtils.clamp)(roundedValue, minArg, maxArg);
    setValueState(clampedValue);
    return clampedValue;
  };
  /**
   * Handles the mouseDown event on the thumb.
   * Triggers the `onChange` prop if available.
   */


  var handleMouseDown = (0, _hooks.useEventCallback)(function handleMouseDown(event) {
    event.preventDefault();
    if (disabled) return;

    if (onMouseDown) {
      onMouseDown(event);
    }

    var finger = (0, _SliderUtils.trackFinger)(event, touchId);
    var newValue = getFingerNewValue(finger);
    (0, _SliderUtils.focusThumb)(sliderRef, setActive);
    setValueState(newValue);

    if (onChange && valueDerived !== newValue) {
      onChange(event, String(newValue));
    }

    var doc = (0, _functions.ownerDocument)(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });
  /**
   * Handles the keyDown event on the thumb and the input field.
   * Triggers the `onChange` and `onChangeCommitted` prop if available.
   */

  var handleKeyDown = (0, _hooks.useEventCallback)(function handleKeyDown(event) {
    var isInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (disabled) return;

    if (event.key === 'Home' || event.key === 'End' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'PageUp' || event.key === 'PageDown') {
      event.preventDefault();
      var newValue = valueDerived;

      switch (event.key) {
        case 'Home':
          newValue = setCalculatedValue(minProp, step, minProp, maxProp);
          break;

        case 'End':
          newValue = setCalculatedValue(maxProp, step, minProp, maxProp);
          break;
        // eslint-disable-next-line no-fallthrough

        case 'ArrowUp':
        case 'PageUp':
          newValue = setCalculatedValue(valueDerived + step, step, minProp, maxProp);
          break;
        // eslint-disable-next-line no-fallthrough

        case 'ArrowDown':
        case 'PageDown':
          // eslint-disable-next-line no-case-declarations
          var nearestFactor = (valueDerived - minProp) % step === 0 ? valueDerived - step : valueDerived - valueDerived % step;
          newValue = setCalculatedValue(nearestFactor, step, minProp, maxProp);
          break;

        default:
          return;
      }

      if (onChange) {
        onChange(event, String(newValue));
      }

      if (!isInput) {
        var index = Number(event.currentTarget.getAttribute('data-index')[0]);
        setFocusVisible(index);
      }
    } else {
      (0, _persistSyntheticEvent["default"])(event);
    }
  });
  /**
   * Handles the `onFocus` event on the thumb.
   * Triggers the `onFocus` prop if available.
   */

  var handleFocus = (0, _hooks.useEventCallback)(function handleFocus(event) {
    if (!disabled) {
      var index = Number(event.currentTarget.getAttribute('data-index')[0]);

      if (isFocusVisible(event)) {
        setFocusVisible(index);
      }

      if (onFocus) {
        onFocus(event);
      }
    }
  });
  /**
   * Handles the `onBlur` event on the thumb.
   * Triggers the `onBlur` prop if available.
   */

  var handleBlur = (0, _hooks.useEventCallback)(function (event) {
    if (disabled) return;

    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }

    if (onBlur) {
      onBlur(event);
    }
  });
  /**
   * Handles the `onInput` event on the input field.
   */

  var handleInput = (0, _hooks.useEventCallback)(function handleInputChange(event) {
    if (disabled) return; // parse the event value

    var eventValue = parseInt(event.currentTarget.value, 10); // if the current value of the thumb is less than or equal to the max prop value
    // and is greater than or equal to the min prop value
    // set the new value of the thumb

    if (eventValue && eventValue <= maxProp && eventValue >= minProp) {
      setValueState(eventValue);
    }
  });

  /**
   * Handles the `onChange` event on the input field.
   * Triggers the `onChange` prop if available.
   */
  var handleChange = function handleChange(event, info) {
    if (onChange && minProp <= Number(info.current) && Number(info.current) <= maxProp) {
      onChange(event, info.current);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event);
    }
  };
  /**
   * Use effect is triggered whenever the values for handleTouchEnd, handleTouchMove, or handleTouchStart
   * change.
   */


  React.useEffect(function () {
    if (disabled) return undefined;
    var slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart);
    var doc = (0, _functions.ownerDocument)(slider);
    return function () {
      slider.removeEventListener('touchstart', handleTouchStart);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    };
  }, [disabled, handleTouchEnd, handleTouchMove, handleTouchStart]); // determines if min, max, and step are valid values

  React.useEffect(function () {
    if ((maxProp - minProp) % step !== 0) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error("Error: The Slider component's max prop value ".concat(maxProp, " is not divisible by it's step prop value of ").concat(step, "."));
      }
    }
  }, [minProp, maxProp, step]); // the values used to calculate the width of the track

  var trackOffset = (0, _SliderUtils.valueToPercent)(minProp, minProp, maxProp);
  var trackLeap = (0, _SliderUtils.valueToPercent)(valueDerived, minProp, maxProp) - trackOffset; // the values used to calculate the position the thumb

  var offset = _SliderUtils.axisProps[orientation].offset(trackOffset);

  var leap = _SliderUtils.axisProps[orientation].leap(trackLeap); // the css used for the thumb's position


  var thumbPos = orientation === 'horizontal' ? {
    left: leap.width,
    transform: "translateX(-50%)"
  } : {
    bottom: leap.height,
    transform: "translateY(50%)"
  }; // the minimum value label

  var minLabel = /*#__PURE__*/React.createElement(_Typography["default"], {
    color: !disabled ? 'text_primary' : 'text_disabled',
    className: (0, _classnames["default"])('slider-min-label', orientation),
    variant: "body_1"
  }, minProp); // the maximum value label

  var maxLabel = /*#__PURE__*/React.createElement(_Typography["default"], {
    color: !disabled ? 'text_primary' : 'text_disabled',
    className: (0, _classnames["default"])('slider-max-label', orientation),
    variant: "body_1"
  }, maxProp); // the thumb component

  var thumb =
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  React.createElement("span", {
    className: (0, _classnames["default"])('thumb', orientation, thumbClassName, disabled && 'disabled', active && 'active'),
    tabIndex: disabled ? null : 0,
    role: "slider",
    "aria-label": "thumb",
    id: "thumb",
    "aria-valuenow": valueDerived,
    "data-index": "0",
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown(event);
    },
    onFocus: handleFocus,
    onBlur: handleBlur,
    style: (0, _extends2["default"])({}, thumbPos)
  }); // the minimum and maximum labels for the vertical orientation of the slider

  var verticalLabels = /*#__PURE__*/React.createElement("div", {
    className: "labels"
  }, orientation === 'vertical' && minLabel, orientation === 'vertical' && maxLabel);
  /**
   * Layout:
   *
   * Thumb: the circular component that the user can click on and move across the slider.
   *
   * Track: the line to the left of the thumb.
   *
   * Rail: the line the thumb slides across.
   *
   * <SliderLayoutWrapper>
   *   <minLabel />
   *   <SliderWrapper>
   *     <span rail />
   *     <span track />
   *     <span thumb />
   *   </SliderWrapper>
   *   <maxLabel />
   *   <verticalLabels />
   *   <SliderInputWrapper>
   *     <Stepper />
   *   </SliderInputWrapper
   * </SliderLayoutWrapper>
   */

  return /*#__PURE__*/React.createElement(_SliderLayoutWrapper["default"], {
    className: (0, _classnames["default"])('slider-layout-wrapper', orientation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-wrapper"
  }, orientation === 'horizontal' && minLabel, /*#__PURE__*/React.createElement(_SliderWrapper["default"], {
    className: (0, _classnames["default"])('slider', orientation, className, disabled && 'disabled'),
    onMouseDown: handleMouseDown,
    ref: handleRef
  }, /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])('rail', orientation, disabled && 'disabled')
  }), /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])('track', orientation, disabled && 'disabled'),
    style: (0, _extends2["default"])({}, leap, offset)
  }), tooltip ? /*#__PURE__*/React.createElement(_TooltipPopper["default"], (0, _extends2["default"])({
    popperOptions: {
      placement: orientation === 'horizontal' ? 'bottom' : 'right',
      modifiers: [{
        name: 'offset',
        enabled: true,
        options: {
          offset: function offset() {
            return [0, 8];
          }
        }
      }],
      strategy: 'absolute'
    },
    tooltip: /*#__PURE__*/React.createElement(_Tooltip["default"], (0, _extends2["default"])({
      shape: shape
    }, tooltipProps), valueDerived)
  }, popoverProps, popperProps), thumb) : thumb), orientation === 'horizontal' && maxLabel, orientation === 'vertical' && verticalLabels), /*#__PURE__*/React.createElement(_SliderInputWrapper["default"], {
    className: !showInput || orientation === 'vertical' ? 'slider-input--hidden' : 'slider-input--visible'
  }, /*#__PURE__*/React.createElement(_Stepper["default"], {
    disabled: disabled,
    hideButtons: true,
    value: Number(valueDerived),
    min: minProp,
    max: maxProp,
    step: step,
    onInput: handleInput,
    onChange: handleChange,
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown(event, true);
    }
  })));
});
exports.Slider = Slider;
Slider.bdsName = 'Slider';
var _default = Slider;
exports["default"] = _default;