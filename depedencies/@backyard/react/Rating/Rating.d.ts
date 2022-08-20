import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Rating
 *
 * @todo Comments
 */
declare const Rating: BDSForwardRef<RatingProps>;
declare type RatingRef = HTMLSpanElement;
declare type RatingOverrideProps = 'size' | 'onChange';
interface IconContainerProps extends React.HTMLProps<HTMLSpanElement> {
    value: number;
}
interface RatingProps extends BackyardBaseProps<RatingRef, RatingOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Number of ratings, if available
     * Automatically converts `Rating` component to a read-only component
     */
    count?: number;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: number;
    /**
     * The icon to display when empty.
     */
    emptyIcon?: React.ReactNode;
    /**
     * Label text when `Rating` component is empty (no stars selected)
     */
    emptyLabelText?: string;
    /**
     * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     *
     * @param {number} value The rating label's value to format.
     * @returns {string}
     */
    getLabelText?: (value: number) => string;
    /**
     * The icon to display.
     */
    icon?: React.ReactNode;
    /**
     * The component containing the icon.
     */
    IconContainerComponent?: React.ComponentClass<IconContainerProps>;
    /**
     * Maximum rating.
     */
    max?: number;
    /**
     * The name attribute of the radio input for forms
     * Required if interactive
     */
    name?: string;
    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback.
     * @param {number} value The new value.
     */
    onChange?: (event: React.ChangeEvent, value: number) => void;
    /**
     * Callback function that is fired when the hover state changes.
     *
     * @param {object} event The event source of the callback.
     * @param {number} value The new value.
     */
    onChangeHover?: (event: React.MouseEvent, value: number) => void;
    /**
     * @ignore
     */
    onMouseLeave?: (event: React.MouseEvent) => void;
    /**
     * @ignore
     */
    onMouseMove?: (event: React.MouseEvent) => void;
    /**
     * The minimum increment value change allowed.
     */
    precision?: number;
    /**
     * Whether or not rating component is interactive
     */
    interactive?: boolean;
    /**
     * The size of the rating.
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small';
    /**
     * The rating value.
     */
    value?: number;
}
export { Rating };
export { RatingProps, RatingRef };
export default Rating;
