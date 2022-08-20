import * as React from 'react';
import type { ButtonProps } from '../Button';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { ToggleValue } from './hooks/useToggleReducer';
/**
 * Backyard React Toggle Button
 *
 * Toggle button to be used as a child of `Toggle`
 *
 * Examples:
 *
 * - [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)
 *
 * API:
 *
 * - [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)
 */
declare const ToggleButton: BDSForwardRef<ToggleButtonProps>;
declare type ToggleButtonRef = HTMLButtonElement;
declare type ToggleButtonOverrideProps = 'color' | 'onClick' | 'onSelect' | 'onDeselect' | 'value' | 'size';
interface ToggleButtonProps extends Omit<ButtonProps, ToggleButtonOverrideProps> {
    /**
     * Aria label to give to toggle button
     * Defaults to 'toggle button'
     */
    ariaLabel?: string;
    /**
     * Component to render as
     */
    component?: React.ElementType;
    /**
     * Color of toggle button
     */
    state?: 'unselected' | 'selected';
    /**
     * Value of the toggle button
     */
    value?: ToggleValue;
    /**
     * onClick trigger function for when toggle button is clicked
     */
    onClick?: (event: React.MouseEvent, state: ToggleValue) => void;
    /**
     * onSelect trigger function for when toggle button is selected
     */
    onSelect?: (event: React.MouseEvent, value: ToggleValue) => void;
    /**
     * onDeselect trigger function for when toggle button is deselected
     *
     * Note: will trigger when a different button is selected when `exclusive`
     *  option is enabled, because button will be deselected in place of a new one
     */
    onDeselect?: (event: React.MouseEvent, value: ToggleValue) => void;
    size?: 'small';
}
export { ToggleButton };
export type { ToggleButtonRef, ToggleButtonProps };
export default ToggleButton;
