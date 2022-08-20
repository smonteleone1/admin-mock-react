import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyards ToggleSkeleton component
 *
 * Returns a Skeleton rect with a predefined height related to
 * the value of the size prop. Defauts to a 2 button instance of
 * a toggle but can be overwritten to contain more button instances.
 * Each increase of the button instances will increase the width
 * of the component.
 *
 * <ToggleSkeleton />
 */
declare const ToggleSkeleton: BDSForwardRef<ToggleSkeletonProps>;
declare type ToggleSkeletonRef = HTMLDivElement;
interface ToggleSkeletonProps {
    instances?: number;
    size?: string;
    animate?: boolean;
    className?: string;
}
export { ToggleSkeleton };
export type { ToggleSkeletonProps, ToggleSkeletonRef };
export default ToggleSkeleton;
