import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard's Ratings Skeleton component
 *
 * Returns a set of Skeleton circles which each has a size determined
 * by the value of the size prop. Optional paramter of `withValue` to
 * determine if a Skeleton rect for a value should be shown. The label
 * shows scales in size determined by the value of the size prop also.
 *
 * <RatingSkeleton />
 */
declare const RatingSkeleton: BDSForwardRef<RatingSkeletonProps>;
declare type RatingSkeletonRef = HTMLSpanElement;
interface RatingSkeletonProps {
    animate?: boolean;
    size?: string;
    withValue?: boolean;
    classNames?: string;
}
export { RatingSkeleton };
export type { RatingSkeletonProps, RatingSkeletonRef };
export default RatingSkeleton;
