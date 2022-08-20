import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
/**
 * Backyard React Carousel Skeleton
 */
declare const CarouselSkeleton: BDSForwardRef<CarouselSkeletonProps>;
declare type CarouselSkeletonRef = SkeletonRef;
interface CarouselSkeletonProps extends SkeletonProps {
    /**
     * Whether or not buttons are hidden
     */
    hideButtons?: boolean;
    /**
     * Whether or not scrollbar is hidden
     */
    hideScrollbar?: boolean;
}
export { CarouselSkeleton };
export type { CarouselSkeletonProps, CarouselSkeletonRef };
export default CarouselSkeleton;
