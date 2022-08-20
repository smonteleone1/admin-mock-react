import * as React from 'react';
import type { ButtonGroupProps, ButtonGroupRef } from '../ButtonGroup';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { ToggleButtonProps } from './ToggleButton';
import type { ToggleState, ToggleValue } from './hooks/useToggleReducer';
/**
 * Backyard React Toggle
 *
 * Toggle wrapper to manage state of a group of `ToggleButton`s
 *
 * Examples:
 *
 * - [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)
 *
 * API:
 *
 * - [Toggle API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Toggle)
 * - inherits [ButtonGroup API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ButtonGroup)
 *
 * - [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)
 */
declare const Toggle: BDSForwardRef<ToggleProps>;
declare type ToggleOptions = {
    exclusive: ToggleProps['exclusive'];
    enforceSelected: ToggleProps['enforceSelected'];
};
declare type ToggleButtonGroupOverrideProps = 'state' | 'variant';
declare type ToggleRef = ButtonGroupRef;
declare type ToggleOverrideProps = 'onChange' | 'variant';
interface ToggleProps extends Omit<ButtonGroupProps, ToggleOverrideProps> {
    /**
     * Props to define a unselected toggle button
     */
    buttonProps?: ToggleButtonProps;
    /**
     * Props to define a selected toggle button
     */
    selectedButtonProps?: ToggleButtonProps;
    /**
     * Default value of the `Toggle`
     *
     * Can be a single `string` or an array of `string`s
     */
    defaultValue?: string | string[];
    /**
     * Controlled value of the `Toggle`
     *
     * Can be a single `string` or an array of `string`s
     */
    value?: string | string[];
    /**
     * Whether or not toggle buttons are exclusively toggled
     *
     * When enabled, `Toggle` values are a single `string`
     * When disabled, `Toggle` values are an array of `string`s
     */
    exclusive?: boolean;
    /**
     * Whether or not toggle should enforce at least one toggle
     * to be selected at all times
     *
     * When enabled, defaults `Toggle` value to value of first `ToggleButton` child
     * if `defaultValue` prop is not given
     */
    enforceSelected?: boolean;
    /**
     * Shape of the edges of the button group
     */
    shape?: 'rounded' | 'squared';
    /**
     * onChange trigger function for when toggled state changes
     */
    onChange?: (event: React.MouseEvent, state: ToggleValue) => void;
    /**
     * Toggle variants
     */
    variant?: 'secondary' | 'ghost';
}
export { Toggle };
export type { ToggleProps, ToggleRef, ToggleOptions, ToggleState, ToggleValue, ToggleButtonGroupOverrideProps };
export default Toggle;
