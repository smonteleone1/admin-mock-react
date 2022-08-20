import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard's PillSkeleton component
 *
 * Returns a Skeleton circle with predefined heights and widths related
 * to the value of the variant prop (ie. 'pill', 'indicator').
 *
 * <PillSkeleton />
 */
declare const PillSkeleton: BDSForwardRef<PillSkeletonProps>;
declare type PillSkeletonRef = HTMLDivElement;
interface PillSkeletonProps {
    animate?: boolean;
    variant?: string;
    className?: string;
    size?: 'medium' | 'jumbo';
}
export { PillSkeleton };
export type { PillSkeletonProps, PillSkeletonRef };
export default PillSkeleton;
