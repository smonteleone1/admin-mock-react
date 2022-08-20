import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard's Switch Skeleton component
 *
 * Returns a pill shaped Skeleton rect of a predefined height and width.
 * These can not be overwritten. Optional boolean parameter of `withLabel`
 * to display a Skeleton rect as text next to the switch.
 */
declare const SwitchSkeleton: BDSForwardRef<SwitchSkeletonProps>;
declare type SwitchSkeletonRef = HTMLDivElement;
interface SwitchSkeletonProps {
    animate?: boolean;
    size?: string;
    withLabel?: boolean;
    className?: string;
}
export { SwitchSkeleton };
export type { SwitchSkeletonProps, SwitchSkeletonRef };
export default SwitchSkeleton;
