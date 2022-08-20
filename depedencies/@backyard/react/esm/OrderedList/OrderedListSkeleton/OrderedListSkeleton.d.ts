import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backard OrderedListSkeleton component.
 *
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by
 * default.
 *
 * <OrderedListSkeleton />
*/
declare const OrderedListSkeleton: BDSForwardRef<OrderedListSkeletonProps>;
declare type OrderedListSkeletonRef = HTMLDivElement;
interface OrderedListSkeletonProps {
    animate?: boolean;
    density?: string;
    items?: number;
    width?: string;
    className?: string;
}
export { OrderedListSkeleton };
export type { OrderedListSkeletonProps, OrderedListSkeletonRef };
export default OrderedListSkeleton;
