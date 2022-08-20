"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStep = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkmark3 = _interopRequireDefault(require("@backyard/icons/Checkmark"));

var _Close2 = _interopRequireDefault(require("@backyard/icons/Close"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ProgressStepperContext = _interopRequireDefault(require("./ProgressStepperContext"));

var _ProgressStepContext = _interopRequireDefault(require("./ProgressStepContext"));

var _ProgressStepWrapper = _interopRequireDefault(require("./styles/ProgressStepWrapper"));

var _Checkmark, _Close, _Checkmark2;

var _excluded = ["caption", "children", "className", "completeIcon", "disabled", "errorIcon", "icon", "index", "label", "last", "onComplete", "onError", "onSelected", "onSuccess", "selected", "size", "successIcon", "state", "title", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Progress Step
 *
 * `ProgressStep` is used as a child of `ProgressStepper` to provide the current step of the stepper to the user.
 * Note: `ProgressStep` __must__ be a child of `ProgressStepper`
 *
 * The `ProgressStep` calculates whether or not it is selected through the supplied `step` prop of the parent `ProgressStepper`.
 *
 * When the `disabled` prop is true, the button and text becomes disabled from the user.
 *
 * The content of the button is determined by the following in respective order of importance:
 *  * `icon` prop - ex. <CreditCard />
 *  * `label` prop - ex. "A"
 *  * `index + 1` number of the step
 *
 * Example:
 * ```
 *  <ProgressStep
 *      icon={<CreditCard />}
 *      title="Credit Card"
 *      caption="Enter your credit card information"
 *  />
 * ```
 */
var ProgressStep = /*#__PURE__*/React.forwardRef(function ProgressStep(_ref, ref) {
  var caption = _ref.caption,
      children = _ref.children,
      className = _ref.className,
      _ref$completeIcon = _ref.completeIcon,
      completeIcon = _ref$completeIcon === void 0 ? _Checkmark || (_Checkmark = /*#__PURE__*/React.createElement(_Checkmark3["default"], null)) : _ref$completeIcon,
      disabled = _ref.disabled,
      _ref$errorIcon = _ref.errorIcon,
      errorIcon = _ref$errorIcon === void 0 ? _Close || (_Close = /*#__PURE__*/React.createElement(_Close2["default"], null)) : _ref$errorIcon,
      icon = _ref.icon,
      index = _ref.index,
      label = _ref.label,
      last = _ref.last,
      onComplete = _ref.onComplete,
      onError = _ref.onError,
      onSelected = _ref.onSelected,
      onSuccess = _ref.onSuccess,
      selected = _ref.selected,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      _ref$successIcon = _ref.successIcon,
      successIcon = _ref$successIcon === void 0 ? _Checkmark2 || (_Checkmark2 = /*#__PURE__*/React.createElement(_Checkmark3["default"], null)) : _ref$successIcon,
      stateProp = _ref.state,
      title = _ref.title,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  /**
   * Map of props for each state the step's button can be in
   */
  var buttonStateProps = {
    enabled: {
      variant: 'secondary',
      shape: 'circle',
      color: 'neutral',
      size: 'small',
      ariaTitle: title
    },
    active: {
      variant: 'primary',
      shape: 'circle',
      color: 'interactive',
      size: 'small',
      ariaTitle: title
    },
    complete: {
      variant: 'primary',
      shape: 'circle',
      color: 'interactive',
      size: 'small',
      ariaTitle: title
    },
    success: {
      variant: 'primary',
      shape: 'circle',
      color: 'interactive',
      size: 'small',
      ariaTitle: title
    },
    error: {
      variant: 'secondary',
      shape: 'circle',
      color: 'red',
      size: 'small',
      ariaTitle: title
    },
    disabled: {
      variant: 'secondary',
      shape: 'circle',
      size: 'small',
      disabled: true,
      ariaTitle: title
    }
  }; // Get stepper context

  var _React$useContext = React.useContext(_ProgressStepperContext["default"]),
      step = _React$useContext.step,
      connector = _React$useContext.connector,
      direction = _React$useContext.direction,
      nonLinear = _React$useContext.nonLinear; // Default state is enabled


  var state = 'enabled'; // If state prop is given and not reset to null,

  if (stateProp !== undefined && stateProp !== null) {
    // Use state prop
    state = stateProp;
  } else if (step === index) {
    // Else if current step from stepper is its index, it is active
    state = 'active';
  } else if (!nonLinear && step > index) {
    // Else if the stepper is non-linear and the step is passed the index,
    // step is complete
    state = 'complete';
  } else if (!nonLinear && step < index) {
    // Else if the stepper is non-linear and the step is before the index,
    // step is enabled and ready
    state = 'enabled';
  } // Memoize the context value of the progress step to update/pass to any children


  var contextValue = React.useMemo(function () {
    return {
      index: index,
      last: last,
      label: index + 1,
      disabled: disabled,
      state: state
    };
  }, [index, last, disabled, stateProp]); // Get button props from state

  var buttonProps = buttonStateProps[state]; // The default label content can be overridden by an icon or a given label prop

  var labelContent = icon || label || contextValue.label; // Map and get the content for the button depending on the state

  var buttonContent = {
    enabled: labelContent,
    active: labelContent,
    complete: completeIcon,
    success: successIcon,
    error: errorIcon,
    disabled: labelContent
  }[state] || labelContent; // Side effect to trigger the `onSelected` function when the step is selected

  React.useEffect(function () {
    if (!disabled) {
      if (selected && onSelected) {
        onSelected();
      }
    }
  }, [selected]); // Side effect to trigger `onComplete`, `onError`, or `onSuccess` when the state updates

  React.useEffect(function () {
    if (!disabled) {
      switch (state) {
        case 'complete':
          if (onComplete) {
            onComplete();
          }

          break;

        case 'error':
          if (onError) {
            onError();
          }

          break;

        case 'success':
          if (onSuccess) {
            onSuccess();
          }

          break;

        default: // Do nothing

      }
    }
  }, [state]);
  /**
   * Layout:
   *  <div>
   *      <div connector? />
   *      <IconButton />
   *      <span label>
   *          <h5 title />
   *          <span caption />
   *      </span>
   *      ...
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_ProgressStepContext["default"].Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ProgressStepWrapper["default"], (0, _extends2["default"])({}, wrapperProps, {
    className: (0, _classnames["default"])("progress-step size--".concat(size, " direction--").concat(direction), !disabled ? state : 'disabled', wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.className)
  }), connector && index !== 0 ? connector : null, /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    "aria-label": title
  }, buttonProps, {
    disabled: disabled
  }, props, {
    className: (0, _classnames["default"])('progress-step-button', className, selected && !disabled && 'focus'),
    ref: ref
  }), buttonContent), /*#__PURE__*/React.createElement("span", {
    className: "progress-step-label",
    "aria-disabled": disabled
  }, title ? /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "h5"
  }, title) : null, caption ? /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "caption",
    color: "text_tertiary"
  }, caption) : null)), children));
});
exports.ProgressStep = ProgressStep;
ProgressStep.bdsName = 'ProgressStep';
var _default = ProgressStep;
exports["default"] = _default;