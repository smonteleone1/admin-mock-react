import * as React from 'react';
import type { ButtonProps, ButtonRef } from '../Button';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React List Option
 *
 * `ListOption` provides an option for `List` in the form of a custom button.
 *
 * Example:
 * ```
 *  <ListOption
 *      icon={<Location />}
 *  >
 *      New York
 *  </ListOption>
 * ```
 */
declare const ListOption: BDSForwardRef<ListOptionProps>;
/**
 * Option info provided for event triggers
 */
interface ListOptionValues {
    /**
     * Whether the option is disabled
     */
    disabled: ListOptionProps['disabled'];
    /**
     * Whether the option is selected
     */
    selected: ListOptionProps['selected'];
    /**
     * Value of the option
     */
    value: ListOptionProps['value'];
    /**
     * Label of the option
     */
    label: ListOptionProps['label'];
}
declare type ListOptionRef = ButtonRef;
declare type ListOptionOverrideProps = 'size' | 'onSelect' | 'onDeselect';
interface ListOptionProps extends BackyardBaseProps<ListOptionRef, ListOptionOverrideProps> {
    /**
     * Component wrapper of the list item
     * Can be an HTML tag (`li`) or component
     */
    component?: React.ComponentClass | any;
    /**
     * Whether or not the list item is disabled for selecting
     */
    disabled?: boolean;
    /**
     * Icon Component to place in list item
     */
    icon?: React.ReactElement;
    /**
     * Whether or not the list item is selected
     */
    selected?: boolean;
    /**
     * Value of list item
     */
    value?: string;
    /**
     * The size of component
     */
    size?: 'normal' | 'condensed' | ButtonProps['size'];
    /**
     * The shape of the list option
     */
    shape?: 'rounded' | 'squared';
    /**
     * Triggers when the list option is selected
     */
    onSelect?: (option: ListOptionValues) => void;
    /**
     * Triggers when the list option is deselected
     */
    onDeselect?: (option: ListOptionValues) => void;
}
export { ListOption };
export { ListOptionProps, ListOptionRef, ListOptionValues };
export default ListOption;
