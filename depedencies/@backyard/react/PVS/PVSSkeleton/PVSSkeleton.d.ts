import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyards PVSSkeleton component
 *
 * Returns a series of Skeleton circles based on the value of the
 * items prop. Sizing and spacing of each swatch matches that of the
 * default PVS component.
 *
 * <PVSSkeleton />
 */
declare const PVSSkeleton: BDSForwardRef<PVSSkeletonProps>;
declare type PVSSkeletonRef = HTMLDivElement;
interface PVSSkeletonProps {
    animate?: boolean;
    items?: number;
    className?: string;
}
export { PVSSkeleton };
export type { PVSSkeletonProps, PVSSkeletonRef };
export default PVSSkeleton;
