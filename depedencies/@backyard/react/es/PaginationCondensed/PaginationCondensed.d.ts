import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { PaginationItemProps } from '../Pagination/PaginationItem';
/**
 * Backyard React Pagination Condensed
 *
 * Condensed version of Pagination
 */
declare const PaginationCondensed: BDSForwardRef<PaginationCondensedProps>;
declare type PaginationCondensedRef = HTMLElement;
declare type PaginationCondensedOverrideProps = 'size' | 'onChange';
interface PaginationCondensedProps extends BackyardBaseProps<PaginationCondensedRef, PaginationCondensedOverrideProps> {
    /**
     * Number of pages at the beginning and end
     */
    boundaryCount?: number;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Number of pages
     */
    count?: number;
    /**
     * The page selected by default when the component is uncontrolled
     */
    defaultPage?: number;
    /**
     * Whether or not all pagination items are disabled
     */
    disabled?: boolean;
    /**
     * Function that maps to a string for generating aria labels
     *
     * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous')
     * @param {number} page The page number to format
     * @param {bool} selected If true, the current page is selected
     * @returns {string}
     */
    getItemAriaLabel?: (type: PaginationItemProps['type'], page: number, selected: boolean) => string;
    /**
     * Whether or not to hide the first button
     */
    showFirstButton?: boolean;
    /**
     * Whether or not to hide the next button
     */
    hideNextButton?: boolean;
    /**
     * Whether or not to hide the previous button.
     */
    hidePrevButton?: boolean;
    /**
     * Whether or not to hide the last button
     */
    showLastButton?: boolean;
    /**
     * `onChange` trigger function
     * @argument {Event} event - DOM event
     * @argument {number} value - page number
     */
    onChange?: (event: React.ChangeEvent, value: number) => void;
    /**
     * The current page (controlled)
     */
    page?: number;
    /**
     * Renders pagination item
     * Useful if something other than buttons are needed
     *
     * @param {object} params The props to spread on a PaginationItem.
     * @returns {ReactNode}
     */
    renderItem?: (props: React.PropsWithChildren<PaginationItemProps>, index: number) => React.ComponentClass;
    /**
     * Number of pages before and after the current page
     */
    siblingCount?: number;
    /**
     * The size of the pagination items
     * Note: Only used with the `dotted` variant
     */
    size?: 'medium' | 'small';
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared' | 'circle';
    /**
     * The variant to use
     */
    variant?: 'condensed';
    step?: number;
    min?: number;
    max?: number;
}
export { PaginationCondensed };
export type { PaginationCondensedProps, PaginationCondensedRef };
export default PaginationCondensed;
