import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { IconButtonRef, IconButtonProps } from '../IconButton';
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
declare const ProgressStep: BDSForwardRef<ProgressStepProps>;
declare type ProgressStepRef = IconButtonRef;
interface ProgressStepProps extends IconButtonProps {
    /**
     * Caption of the progress step
     */
    caption?: string;
    /**
     * `ProgressStepContent` can be passed to give context to
     * `ProgressStepContext` and `ProgressStepperContext`
     */
    children?: React.ReactNode;
    /**
     * DOM Class names
     */
    className?: string;
    /**
     * Default icon to use on step complete
     */
    completeIcon?: React.ReactElement;
    /**
     * Mark the step as disabled,
     * will also disable the button
     */
    disabled?: boolean;
    /**
     * Default error icon to use on step error
     */
    errorIcon?: React.ReactElement;
    /**
     * Icon of the progress step button,
     * will override the `label` prop and any default icon
     * set by `completeIcon`, `errorIcon`, and `successIcon`
     */
    icon?: React.ReactElement;
    /**
     * The position of the progress step within the progress stepper
     */
    index?: number;
    /**
     * Label text of the button for the progress step
     */
    label?: string;
    /**
     * Whether or not the progress step is rendered last
     */
    last?: boolean;
    /**
     * Trigger function for when step is completed
     */
    onComplete?: () => void;
    /**
     * Trigger function for when step encounters error
     */
    onError?: () => void;
    /**
     * Trigger function for when the step is selected
     */
    onSelected?: () => void;
    /**
     * Trigger function for when step resolves an error
     */
    onSuccess?: () => void;
    /**
     * Whether or not the progress step is selected
     */
    selected?: boolean;
    /**
     * Size of the progress step
     */
    size?: 'small' | 'large';
    /**
     * Default success icon to use on step success
     */
    successIcon?: React.ReactElement;
    /**
     * State of the progress step
     */
    state?: 'enabled' | 'active' | 'complete' | 'success' | 'error' | 'disabled';
    /**
     * Title of the progress step
     */
    title?: string;
    /**
     * Progress Step wrapper props
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
}
export { ProgressStep };
export type { ProgressStepRef, ProgressStepProps };
export default ProgressStep;
