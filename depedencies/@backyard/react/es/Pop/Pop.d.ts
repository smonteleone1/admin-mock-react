import * as React from 'react';
import { PopoverProps } from '../Popover';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
declare const Pop: BDSForwardRef<PopProps & {
    ref?: any;
}>;
declare type PopRef = HTMLElement;
declare type PopOverrideProps = 'onChange' | 'onFocus' | 'onKeyDown';
interface PopProps extends BackyardBaseProps<PopRef, PopOverrideProps> {
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][];
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][];
    /**
     * Amount in milliseconds to delay closing the popover
     * when a value is selected from the list
     */
    delayClose?: number;
    /**
     * Amount in milliseconds to delay opening the popover
     */
    delayOpen?: number;
    /**
     * Shape of the input and the popover.
     */
    shape?: 'rounded' | 'squared';
    onChange?: (event: React.ChangeEvent, value: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onFocus?: (event: React.FocusEvent, value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    pop?: React.ReactElement;
    anchor: React.ReactElement;
    open?: boolean;
    value?: string;
    isSearch?: boolean;
    popoverProps?: Partial<PopoverProps>;
    popperProps?: Partial<PopoverProps>;
}
export { Pop };
export type { PopRef, PopProps };
export default Pop;
