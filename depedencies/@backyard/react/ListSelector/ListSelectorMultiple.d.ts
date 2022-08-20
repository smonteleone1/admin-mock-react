import * as React from 'react';
import type { ToggleProps, ToggleRef } from '../Toggle';
import type { OptionProps } from '../Select';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { BackyardToken } from '../utils/typings/BackyardProps';
import type { ListSelectorOption } from './useListSelector';
/**
 * Backyard React List Selector Multiple
 *
 * @internal
 *
 * Multiple selection list selection handler
 */
declare const ListSelectorMultiple: BDSForwardRef<ListSelectorMultipleProps & {
    ref?: any;
}>;
declare type ListSelectorMultipleRef = ToggleRef;
declare type ListSelectorMultipleOverrideProps = 'onChange' | 'defaultValue' | 'value' | 'children' | 'width';
interface ListSelectorMultipleProps extends Omit<ToggleProps, ListSelectorMultipleOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[];
    /**
     * Default value of the multiselect
     */
    defaultValue?: string[];
    /**
     * Enables the global key down listener to listen for arrow key interactions
     */
    enableGlobalKeyDown?: boolean;
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.MouseEvent, value: string[]) => void;
    /**
     * Options to define dropdown children from
     *
     * Required if `children` not defined.
     * Overrides `children` if defined.
     */
    options?: ListSelectorOption[];
    /**
     * Controlled value for dropdown
     */
    value?: string[];
    /**
     * Width override for ListWrapper
     * Can be given a token (such as `size_128`) or other value (like `15rem`)
     */
    width?: keyof BackyardToken['sizes'] | string;
}
export { ListSelectorMultiple };
export type { ListSelectorMultipleRef, ListSelectorMultipleProps };
export default ListSelectorMultiple;
