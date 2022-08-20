import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import type { IconButtonProps } from '../../IconButton';
declare type MonthSwitcherRef = HTMLDivElement;
interface ExportedMonthSwitcherProps {
    /**
     * Left arrow icon
     */
    leftArrowIcon?: React.ReactNode;
    /**
     * Right arrow icon
     */
    rightArrowIcon?: React.ReactNode;
    /**
     * Left arrow icon aria-label text
     */
    leftArrowButtonText?: string;
    /**
     * Right arrow icon aria-label text
     */
    rightArrowButtonText?: string;
    /**
     * Props to pass to left arrow button
     * @type {Partial<IconButtonProps>}
     */
    leftArrowButtonProps?: React.PropsWithRef<IconButtonProps>;
    /**
     * Props to pass to right arrow button
     * @type {Partial<IconButtonProps>}
     */
    rightArrowButtonProps?: React.PropsWithRef<IconButtonProps>;
}
interface MonthSwitcherProps extends ExportedMonthSwitcherProps, BackyardBaseProps<MonthSwitcherRef> {
    isLeftDisabled: boolean;
    isLeftHidden?: boolean;
    isRightDisabled: boolean;
    isRightHidden?: boolean;
    onLeftClick: () => void;
    onRightClick: () => void;
    text?: string;
    disableKeyboardControl?: boolean;
    shape?: 'rounded' | 'squared';
}
declare const MonthSwitcher: React.ForwardRefExoticComponent<MonthSwitcherProps>;
export { MonthSwitcher };
export type { MonthSwitcherProps, MonthSwitcherRef, ExportedMonthSwitcherProps };
export default MonthSwitcher;
