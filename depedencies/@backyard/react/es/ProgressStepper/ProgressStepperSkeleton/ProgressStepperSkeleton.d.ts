import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
declare const ProgressStepperSkeleton: BDSForwardRef<ProgressStepperSkeletonProps>;
declare type ProgressStepperSkeletonRef = HTMLDivElement;
interface ProgressStepperSkeletonProps {
    animate?: boolean;
    steps?: number;
    size?: string;
    withCaption?: boolean;
    className?: string;
    direction?: string;
}
export { ProgressStepperSkeleton };
export type { ProgressStepperSkeletonProps, ProgressStepperSkeletonRef };
export default ProgressStepperSkeleton;
