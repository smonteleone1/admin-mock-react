import * as React from 'react';
import type { IconButtonProps, IconButtonRef } from '../IconButton';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React PaginationItem
 *
 * @todo Comments
 */
declare const PaginationItem: BDSForwardRef<PaginationItemProps>;
declare type PaginationItemRef = IconButtonRef;
declare type PaginationItemOverrideProps = 'shape' | 'type';
interface PaginationItemProps extends Omit<IconButtonProps, PaginationItemOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * The active color
     */
    color?: 'interactive';
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component?: React.ReactElement;
    /**
     * Whether or not the item will be disabled
     */
    disabled?: boolean;
    /**
     * The current page number
     */
    page?: number;
    /**
     * Whether the pagination item is selected
     */
    selected?: boolean;
    /**
     * Shape of the pagination item
     */
    shape?: 'squared' | 'rounded' | 'circle';
    /**
     * The size of the pagination item
     */
    size?: 'small' | 'medium';
    /**
     * The type of pagination item
     */
    type?: 'dot' | 'page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis';
    /**
     * The pagination item variant
     */
    variant?: 'ghost' | 'primary';
}
export { PaginationItem };
export type { PaginationItemProps, PaginationItemRef };
export default PaginationItem;
