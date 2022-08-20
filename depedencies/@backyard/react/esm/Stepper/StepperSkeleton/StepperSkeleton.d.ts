import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
/**
 * Backyard React File Upload Skeleton
 */
declare const StepperSkeleton: BDSForwardRef<StepperSkeletonProps>;
declare type StepperSkeletonRef = SkeletonRef;
declare type StepperSkeletonOverrideProps = 'label';
interface StepperSkeletonProps extends Omit<SkeletonProps, StepperSkeletonOverrideProps> {
    /**
     * Whether or not buttons are hidden
     */
    hideButtons?: boolean;
    /**
     * Whether or not label is visible
     */
    label?: boolean;
}
export { StepperSkeleton };
export type { StepperSkeletonProps, StepperSkeletonRef };
export default StepperSkeleton;
