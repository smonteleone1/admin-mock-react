import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["step", "children", "className", "connector", "nonLinear", "direction", "size", "steps"];
import * as React from 'react';
import classNames from 'classnames';
import FormGroup from '../FormGroup';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import ProgressStepConnector from './ProgressStepConnector';
import ProgressStepperContext from './ProgressStepperContext';
import ProgressStep from './ProgressStep';
import ProgressStepperWrapper from './styles/ProgressStepperWrapper';
const defaultConnector = /*#__PURE__*/React.createElement(ProgressStepConnector, null);
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

const ProgressStepper = /*#__PURE__*/React.forwardRef(function ProgressStepper(_ref, ref) {
  let {
    step: stepProp = 0,
    children,
    className,
    connector = defaultConnector,
    nonLinear = false,
    direction = 'row',
    size = 'small',
    steps: stepsProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'ProgressStepper'); // Hold the current step of the stepper

  const [step, setStep] = React.useState(stepProp); // Hold the steps in array format...

  const stepsArray = stepsProp ? // If steps provided, declare each `ProgressStep`
  stepsProp.map((stepProps, index) => /*#__PURE__*/React.createElement(ProgressStep, _extends({
    key: index
  }, stepProps))) : // Else use `children`
  React.Children.toArray(children); // Map each step to track whether it's selected or last

  const steps = stepsArray.map((stepEl, index) => {
    return /*#__PURE__*/React.cloneElement(stepEl, _extends({
      index,
      size,
      selected: step === index,
      last: index + 1 === stepsArray.length
    }, stepEl.props));
  }); // Memoize context value with external changes

  const contextValue = React.useMemo(() => ({
    step,
    setStep,
    connector,
    nonLinear,
    direction
  }), [step, connector, nonLinear, direction]); // Side effect to update current step when changed externally

  React.useEffect(() => {
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