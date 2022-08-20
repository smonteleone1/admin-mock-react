"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _ThemeProvider = require("../ThemeProvider");

var _ProgressStepConnector = _interopRequireDefault(require("./ProgressStepConnector"));

var _ProgressStepperContext = _interopRequireDefault(require("./ProgressStepperContext"));

var _ProgressStep = _interopRequireDefault(require("./ProgressStep"));

var _ProgressStepperWrapper = _interopRequireDefault(require("./styles/ProgressStepperWrapper"));

var _excluded = ["step", "children", "className", "connector", "nonLinear", "direction", "size", "steps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultConnector = /*#__PURE__*/React.createElement(_ProgressStepConnector["default"], null);
/**
 * Backyard React Progress Stepper
 *
 * `ProgressStepper` is used to provide steps to the user to navigate through a wizard-like form.
 *
 * The `step` prop, or the stepper's current step, must be controlled externally for the stepper to update.
 * This allows the developer to manage any content that `ProgressStepper` is providing navigation to externally.
 *
 * By default the stepper is linear, meaning each step behind the current `step` state is counted as completed.
 * This behavior can be turned off with the `nonLinear` flag prop, then each step's `state` can be set to `complete`
 * independently of the rest of the steps, so the user can complete each step in any order.
 *
 * There are two methods to providing steps:
 *
 * 1) Declaratively through `children` with the `ProgressStep` component
 * 2) Structurally through `steps` which takes any `ProgressStepProps` property
 *
 * Example:
 * ```
 *  <ProgressStepper
 *      direction="row"
 *      step={step}
 *  >
 *      <ProgressStep
 *          title="First Step"
 *          caption="caption Text for step one"
 *          onClick={() => setStep(0)}
 *      />
 *      <ProgressStep
 *          state={states[1]}
 *          title="Second Step"
 *          caption="caption text for step two"
 *      />
 *      <ProgressStep
 *          state={states[2]}
 *          title="Third Step"
 *          caption="caption text for step three"
 *      />
 *  </ProgressStepper>
 * ```
 *
 * Example:
 * ```
 *  <ProgressStepper
 *      nonLinear
 *      direction="row"
 *      step={step}
 *      steps={[{
 *          title: 'First Step',
 *          caption: 'caption Text for step one',
 *          onClick: () => setStep(0)
 *      }, {
 *          title: 'Second Step',
 *          caption: 'caption text for step two',
 *          onClick: () => setStep(1)
 *      }, {
 *          disabled: true,
 *          title: 'Third Step',
 *          caption: 'caption text for step three (disabled)',
 *          onClick: () => setStep(2)
 *      }, {
 *          title: 'Fourth Step',
 *          caption: 'caption text for step four',
 *          onClick: () => setStep(3)
 *      }]}
 *  />
 * ```
 */

var ProgressStepper = /*#__PURE__*/React.forwardRef(function ProgressStepper(_ref, ref) {
  var _ref$step = _ref.step,
      stepProp = _ref$step === void 0 ? 0 : _ref$step,
      children = _ref.children,
      className = _ref.className,
      _ref$connector = _ref.connector,
      connector = _ref$connector === void 0 ? defaultConnector : _ref$connector,
      _ref$nonLinear = _ref.nonLinear,
      nonLinear = _ref$nonLinear === void 0 ? false : _ref$nonLinear,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      stepsProp = _ref.steps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'ProgressStepper'); // Hold the current step of the stepper

  var _React$useState = React.useState(stepProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1]; // Hold the steps in array format...


  var stepsArray = stepsProp ? // If steps provided, declare each `ProgressStep`
  stepsProp.map(function (stepProps, index) {
    return /*#__PURE__*/React.createElement(_ProgressStep["default"], (0, _extends2["default"])({
      key: index
    }, stepProps));
  }) : // Else use `children`
  React.Children.toArray(children); // Map each step to track whether it's selected or last

  var steps = stepsArray.map(function (stepEl, index) {
    return /*#__PURE__*/React.cloneElement(stepEl, (0, _extends2["default"])({
      index: index,
      size: size,
      selected: step === index,
      last: index + 1 === stepsArray.length
    }, stepEl.props));
  }); // Memoize context value with external changes

  var contextValue = React.useMemo(function () {
    return {
      step: step,
      setStep: setStep,
      connector: connector,
      nonLinear: nonLinear,
      direction: direction
    };
  }, [step, connector, nonLinear, direction]); // Side effect to update current step when changed externally

  React.useEffect(function () {
    if (stepProp !== step) {
      setStep(stepProp);
    }
  }, [stepProp]);
  /**
   * Layout:
   * ```
   *  <div wrapper>
   *      <FormGroup>
   *          ...
   *      </FormGroup>
   *  <div>
   * ```
   */

  return /*#__PURE__*/React.createElement(_ProgressStepperContext["default"].Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(_ProgressStepperWrapper["default"], {
    className: "progress-stepper-wrapper"
  }, /*#__PURE__*/React.createElement(_FormGroup["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('progress-stepper', className),
    direction: contextValue.direction
  }, props, {
    ref: ref
  }), steps)));
});
exports.ProgressStepper = ProgressStepper;
ProgressStepper.bdsName = 'ProgressStepper';
var _default = ProgressStepper;
exports["default"] = _default;