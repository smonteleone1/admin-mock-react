import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Button
 *
 * Button for interacting via text.
 *
 * For Icon only buttons, see `IconButton` instead.
 *
 *  <Button
 *      variant='primary'
 *      color='commerce'
 *      iconAfter={<ChevronRight />}
 *  >
 *      Checkout
 *  </Button>
 */
declare const Button: BDSForwardRef<ButtonProps>;
declare type ButtonRef = HTMLButtonElement;
declare type ButtonOverrideProps = 'size' | 'color';
interface ButtonProps extends BackyardBaseProps<ButtonRef, ButtonOverrideProps> {
    /**
     * React Children
     */
    children?: React.ReactNode;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Variant of button
     * - Primary -> (Default) Solid Button w/ Background w/o Borders
     * - Secondary -> Outlined Button w/o Background w/ Borders
     * - Ghost -> No Background, No Borders
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'inverse';
    /**
     * Icon Node to display on right-side of button text
     *
     * Note: Do not use for an icon-only button, use `IconButton` for that
     */
    iconAfter?: React.ReactNode;
    /**
     * Icon Node to display on left-side of button text
     *
     * Note: Do not use for an icon-only button, use `IconButton` for that
     */
    iconBefore?: React.ReactNode;
    /**
     * Type of button
     * - Interactive -> (Default) Lowe's Primary Color Palette
     * - Commerce -> Lowe's Commerce Color Palette
     * - Contrast -> High Contrast Black/White Color Palette
     */
    color?: 'interactive' | 'green' | 'red' | 'neutral';
    /**
     * Shape of button
     * - Rounded -> Medium Border Radius
     * - Squared -> (Default) Zero Border Radius
     * - Circle -> Maximum Border Radius (FAB Button)
     */
    shape?: 'rounded' | 'squared' | 'circle' | 'custom';
    /**
     * Whether or not button is disabled
     */
    disabled?: boolean;
    /**
     * Size of Button
     * - Small -> Small Height/Spacing Button
     * - Medium -> (Default) Medium Height/Spacing Button
     * - Large -> Large Height/Spacing Button
     */
    size?: 'small' | 'medium' | 'large' | 'jumbo' | 'full-width' | 'extra_small';
    /**
     *
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Makes button 100% the width of the container
     */
    fullWidth?: boolean;
    /**
     * Adds elevation to the button
     */
    elevation?: boolean;
    /**
     * `onClick` trigger function
     * @argument {Event} event - DOM event
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * `onKeyDown` trigger function
     * @argument {Event} event - DOM event
     */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /**
     * `onFocus` trigger function
     * @argument {Event} event - DOM event
     */
    onFocus?: (event: React.FocusEvent) => void;
}
export { Button };
export type { ButtonProps, ButtonRef };
export default Button;
