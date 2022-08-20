import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * OrderedList component
 *
 * This component is used to geneate an ordered list (<ol>) within an app.
 *
 * Has one dependent component for usage -- ListItem
 */
declare const OrderedList: BDSForwardRef<OrderedListProps>;
declare type OrderedListRef = HTMLOListElement;
interface OrderedListProps extends BackyardBaseProps<OrderedListRef> {
    /**
     * Handles the vertical and horizontal spacing of the OrderedList
     * Needs only be applied to the outermost instance of a OrderdList
     */
    density?: 'normal' | 'comfort' | 'condensed';
}
export { OrderedList };
export type { OrderedListProps, OrderedListRef };
export default OrderedList;
