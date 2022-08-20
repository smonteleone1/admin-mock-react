import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { OptionProps } from '../Select';
import type { ListOptionProps } from '../ListOption';
import type { ListSelectorMultipleProps, ListSelectorMultipleRef } from './ListSelectorMultiple';
import type { ListSelectorSingleProps, ListSelectorSingleRef } from './ListSelectorSingle';
/**
 * Backyard React List Selector (List)
 *
 * `List` provides a method for selecting a single or multiple option out of a list of options.
 *
 * It functions similarly to a `Select` or `Multiselect` but offers a different, more customized presentation to the user.
 *
 * For a non-selected list of options for a user to trigger actions from, use `Menu`.
 *
 * Example:
 * ```
 *  <List>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New York
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New Jersey
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Charlotte
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Atlanta
 *      </ListOption>
 *  </List>
 * ```
 */
declare const ListSelector: BDSForwardRef<ListSelectorProps>;
declare type ListSelectorRef = ListSelectorMultipleRef & ListSelectorSingleRef;
declare type ListSelectorExtend = ListSelectorSingleProps | ListSelectorMultipleProps;
declare type ListSelectorOverrideProps = 'value' | 'defaultValue' | 'onChange';
declare type ListSelectorValue = string | number;
interface ListSelectorProps extends Omit<ListSelectorExtend, ListSelectorOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[];
    /**
     * Whether or not list selector is multiple selection or single selection
     */
    multiple?: boolean;
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: ListSelectorMultipleProps['onChange'] | ListSelectorSingleProps['onChange'];
    /**
     * List item to render
     */
    renderItem?: (props: ListOptionProps, ref?: React.Ref<any>) => React.ReactElement;
    /**
     * Default value of the list selector
     */
    defaultValue?: ListSelectorValue | ListSelectorValue[];
    /**
     * Value of the list selector
     */
    value?: ListSelectorValue | ListSelectorValue[];
    /**
     * Shape of the first/last list item
     */
    shape?: 'rounded' | 'squared';
}
declare const List: BDSForwardRef<ListSelectorProps>;
export { ListSelector, List };
export type { ListSelectorProps, ListSelectorRef };
export default ListSelector;
