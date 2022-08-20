import type { BDSForwardRef } from '../../utils/typings';
import type { SkeletonProps } from '../../Skeleton';
declare const BreadcrumbDesktopSkeleton: BDSForwardRef<BreadcrumbDesktopSkeletonProps>;
declare type BreadcrumbDesktopSkeletonRef = HTMLDivElement;
interface BreadcrumbDesktopSkeletonProps extends SkeletonProps {
    /**
     * Whether or not to pulse animate skeleton
     */
    animate?: boolean;
    /**
     * Width of the breadcrumb skeleton
     */
    width?: string;
    /**
     * Class name of the component
     */
    className?: string;
}
export { BreadcrumbDesktopSkeleton };
export type { BreadcrumbDesktopSkeletonProps, BreadcrumbDesktopSkeletonRef };
export default BreadcrumbDesktopSkeleton;
