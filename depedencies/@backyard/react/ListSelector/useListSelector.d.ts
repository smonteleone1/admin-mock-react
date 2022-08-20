import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { ListOptionProps, ListOptionRef } from '../ListOption';
import type { ListSelectorSingleRef } from './ListSelectorSingle';
declare const useListSelector: ({ disabled, onChange, children, options, innerRef, defaultValue, value: valueProp, ...props }: UseListSelectorProps) => ListSelectorReturn;
interface ListSelectorReturn extends UseListSelectorProps {
    refs: React.MutableRefObject<React.RefObject<ListOptionRef>[]>;
    items: ListOptionProps[];
}
interface ListOptionInfo {
    container: ListSelectorSingleRef;
    item: ListOptionRef;
    index: number;
    label: string;
    value: any;
    text: string;
    disabled: boolean;
}
interface ListSelectorOption {
    label?: string;
    value?: string | number;
    disabled?: boolean;
    options?: ListSelectorOption[];
    [key: string]: any;
}
declare type ListSelectorOverrideProps = 'selected' | 'onChange' | 'width';
interface UseListSelectorProps extends BackyardBaseProps<ListSelectorSingleRef, ListSelectorOverrideProps> {
    /**
     * Whether or not list item is disabled
     */
    disabled?: boolean;
    /**
     * `onChange` function to trigger
     * @argument {React.ChangeEvent} event - DOM Event of `onChange`
     * @argument {ListOptionIfno} info -  Selected list item info
     */
    onChange?: (event: React.ChangeEvent, item: ListOptionInfo) => void;
    /**
     * Ref of the container List
     */
    innerref?: React.RefObject<ListSelectorSingleRef>;
    /**
     * Value of the list item
     */
    value?: string | number;
    /**
     * Forwarded ref from `List`
     */
    innerRef?: React.RefObject<ListSelectorSingleRef>;
    /**
     * List of selector options to render as list items
     *
     * Is required if `children` are not defined,
     * Will override `children` if both defined.
     */
    options?: ListSelectorOption[];
}
export { useListSelector };
export type { UseListSelectorProps, ListOptionInfo, ListSelectorOption };
export default useListSelector;
