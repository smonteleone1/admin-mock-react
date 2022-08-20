import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React ButtonGroup
 */
declare const ButtonGroup: BDSForwardRef<ButtonGroupProps>;
declare type ButtonGroupRef = HTMLDivElement;
declare type ButtonOverrideProps = 'size';
interface ButtonGroupProps extends BackyardBaseProps<ButtonGroupRef, ButtonOverrideProps> {
    /**
     * Adds a classname to the button group.
     */
    className?: string;
    /**
     * The buttons passed to the button group
     */
    children?: React.ReactNode;
    /**
     * Color of the grouped buttons
     */
    color?: 'interactive' | 'neutral';
    /**
     * Shape of the whole group of buttons.
     */
    shape?: 'rounded' | 'squared';
    size?: 'medium' | 'small';
    variant: 'secondary' | 'ghost';
}
export type { ButtonGroupRef, ButtonGroupProps };
export { ButtonGroup };
export default ButtonGroup;
