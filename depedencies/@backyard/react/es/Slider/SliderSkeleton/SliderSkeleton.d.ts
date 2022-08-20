import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyards Slider skeleton component
 *
 * Returns a series of Skeleton Rects in either a horizontal row or a
 * vertical stack depending on the orientation prop. Option prop for showing
 * a text input available only in the horizontal orientation.
 *
 * <SliderSkeleton />
 */
declare const SliderSkeleton: BDSForwardRef<SliderSkeletonProps>;
declare type SliderSkeletonRef = HTMLDivElement;
interface SliderSkeletonProps {
    orientation?: string;
    animate?: boolean;
    showInput?: boolean;
    className?: string;
}
export { SliderSkeleton };
export type { SliderSkeletonProps, SliderSkeletonRef };
export default SliderSkeleton;
