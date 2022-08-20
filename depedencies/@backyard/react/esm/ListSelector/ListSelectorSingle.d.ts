import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { ListOptionProps } from '../ListOption';
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { UseListSelectorProps } from './useListSelector';
/**
 * Backyard React List Selector Single
 *
 * @internal
 *
 * Single selection list handler component
 */
declare const ListSelectorSingle: BDSForwardRef<ListSelectorSingleProps>;
declare type ListSelectorSingleRef = HTMLUListElement;
declare type ListSelectorSingleOverrideProps = 'selected' | 'onChange' | 'onClick' | 'value' | 'width';
interface ListSelectorSingleProps extends BackyardBaseProps<ListSelectorSingleRef, ListSelectorSingleOverrideProps>, UseListSelectorProps {
    /**
     * Enables the global key down listener to listen for arrow key interactions
     */
    enableGlobalKeyDown?: boolean;
    /**
     * List item to render
     */
    renderItem?: (props: ListOptionProps, ref?: React.Ref<any>) => React.ReactElement;
    /**
     * Width override for ListWrapper
     * Can be given a token (such as `size_128`) or other value (like `15rem`)
     */
    width?: keyof BackyardToken['sizes'] | string;
    /**
     * Default value of the list selector
     */
    defaultValue?: string | number;
    /**
     * Value of the list selector
     */
    value?: string | number;
    /**
     * Shape of the list
     */
    shape?: 'rounded' | 'squared';
}
export { ListSelectorSingle };
export type { ListSelectorSingleProps, ListSelectorSingleRef };
export default ListSelectorSingle;
