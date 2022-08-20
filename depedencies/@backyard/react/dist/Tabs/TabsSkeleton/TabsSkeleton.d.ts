import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyards TabsSkeleton component
 *
 * Returns a Skeleton Rect of a predefined height that changes between two
 * values depending on if the viewport is 'desktop' or 'mobile.' Width
 * defaults to 100% but can be overwritten if needed.
 *
 * <TabsSkeleton />
 */
declare const TabsSkeleton: BDSForwardRef<TabsSkeletonProps>;
declare type TabsSkeletonRef = HTMLDivElement;
interface TabsSkeletonProps {
    width?: string;
    animate?: boolean;
    className?: string;
}
export { TabsSkeleton };
export type { TabsSkeletonProps, TabsSkeletonRef };
export default TabsSkeleton;
