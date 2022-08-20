import * as React from 'react';
import BackyardBaseProps from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { FormGroupRef, FormGroupProps } from '../FormGroup';
import type { ProgressStepProps } from './ProgressStep';
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
declare const ProgressStepper: BDSForwardRef<ProgressStepperProps>;
declare type ProgressStepperRef = FormGroupRef;
declare type ProgressStepperOverrideProps = 'size';
interface ProgressStepperProps extends BackyardBaseProps<ProgressStepperRef, ProgressStepperOverrideProps> {
    /**
     * Two or more `<ProgressStep />` components
     * As an alternative, `steps` can also be used instead
     */
    children?: React.ReactNode;
    /**
     * DOM class name
     */
    className?: string;
    /**
     * An element to be placed between each step
     */
    connector?: React.ReactElement;
    /**
     * The stepper orientation (layout flow direction)
     */
    direction?: FormGroupProps['direction'];
    /**
     * Height override of the progress stepper group
     * Defaults to 100% of the progress stepper wrapper
     */
    height?: string;
    /**
     * If set the `Stepper` will not assist in controlling steps for linear flow
     */
    nonLinear?: boolean;
    /**
     * Size of each progress step
     */
    size?: 'small' | 'large';
    /**
     * Set the active step (zero based index)
     * Set to -1 to not select any steps
     */
    step?: number;
    /**
     * List of steps to create steps via data structure
     * Alternatively, `children` can be used for a declarative approach
     */
    steps?: React.PropsWithRef<ProgressStepProps>[];
    /**
     * Whether or not the progress stepper wrapper will
     * stretch height and width to fit 100% of its container
     */
    stretch?: boolean;
    /**
     * Width override of the progress stepper group
     * Defaults to 100% of the progress stepper wrapper
     */
    width?: string;
}
export { ProgressStepper };
export type { ProgressStepperRef, ProgressStepperProps };
export default ProgressStepper;
