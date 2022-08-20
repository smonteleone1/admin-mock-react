import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["step", "children", "className", "connector", "nonLinear", "direction", "size", "steps"];
import * as React from 'react';
import classNames from 'classnames';
import FormGroup from '../FormGroup';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import ProgressStepConnector from './ProgressStepConnector';
import ProgressStepperContext from './ProgressStepperContext';
import ProgressStep from './ProgressStep';
import ProgressStepperWrapper from './styles/ProgressStepperWrapper';
var defaultConnector = /*#__PURE__*/React.createElement(ProgressStepConnector, null);
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
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'ProgressStepper'); // Hold the current step of the stepper

  var _React$useState = React.useState(stepProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1]; // Hold the steps in array format...


  var stepsArray = stepsProp ? // If steps provided, declare each `ProgressStep`
  stepsProp.map(function (stepProps, index) {
    return /*#__PURE__*/React.createElement(ProgressStep, _extends({
      key: index
    }, stepProps));
  }) : // Else use `children`
  React.Children.toArray(children); // Map each step to track whether it's selected or last

  var steps = stepsArray.map(function (stepEl, index) {
    return /*#__PURE__*/React.cloneElement(stepEl, _extends({
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

  return /*#__PURE__*/React.createElement(ProgressStepperContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(ProgressStepperWrapper, {
    className: "progress-stepper-wrapper"
  }, /*#__PURE__*/React.createElement(FormGroup, _extends({
    className: classNames('progress-stepper', className),
    direction: contextValue.direction
  }, props, {
    ref: ref
  }), steps)));
});
ProgressStepper.bdsName = 'ProgressStepper';
export { ProgressStepper };
export default ProgressStepper;