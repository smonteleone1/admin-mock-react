import type { BDSForwardRef } from '../../utils/typings';
import type { SkeletonProps } from '../../Skeleton';
import type { IconButtonSkeletonProps } from '../../IconButton/IconButtonSkeleton';
declare const BreadcrumbMobileSkeleton: BDSForwardRef<BreadcrumbMobileSkeletonProps>;
declare type BreadcrumbMobileSkeletonRef = HTMLDivElement;
interface BreadcrumbMobileSkeletonProps extends SkeletonProps {
    /**
     * Whether or not to animate the skeleton component
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
     * Icon Button Skeleton props for overriding
     */
    iconButtonSkeletonProps?: IconButtonSkeletonProps;
    /**
     * Typography Skeleton props for overriding
     */
    typographySkeletonProps?: SkeletonProps;
}
export { BreadcrumbMobileSkeleton };
export type { BreadcrumbMobileSkeletonProps, BreadcrumbMobileSkeletonRef };
export default BreadcrumbMobileSkeleton;
