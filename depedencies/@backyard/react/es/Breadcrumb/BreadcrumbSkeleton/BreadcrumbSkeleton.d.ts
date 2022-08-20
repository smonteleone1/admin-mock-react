import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { BreadcrumbDesktopSkeletonProps, BreadcrumbDesktopSkeletonRef } from '../../BreadcrumbDesktop/BreadcrumbDesktopSkeleton';
import type { BreadcrumbMobileSkeletonProps, BreadcrumbMobileSkeletonRef } from '../../BreadcrumbMobile/BreadcrumbMobileSkeleton';
declare const BreadcrumbSkeleton: BDSForwardRef<BreadcrumbSkeletonProps>;
declare type BreadcrumbSkeletonRef = BreadcrumbMobileSkeletonRef | BreadcrumbDesktopSkeletonRef;
interface BreadcrumbSkeletonProps extends BreadcrumbMobileSkeletonProps, BreadcrumbDesktopSkeletonProps {
    /**
     * Whether or not the animate the skeleton component
     */
    animate?: boolean;
    /**
     * Width of the skeleton
     */
    width?: string;
    /**
     * Class name of the component
     */
    className?: string;
    /**
     * Override which skeleton to render
     *
     * @default 'auto'
     */
    render?: 'auto' | 'desktop' | 'mobile';
}
export { BreadcrumbSkeleton };
export type { BreadcrumbSkeletonProps, BreadcrumbSkeletonRef };
export default BreadcrumbSkeleton;
