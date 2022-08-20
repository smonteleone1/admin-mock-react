import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard ButtonGroupSkeleton component
 *
 * Returns a Skeleton Rect with a predefined height based on the value of
 * the size prop passed. The width defaults to the width of a 4 button buttongroup
 * but can be overwritten to make it shorter or longer depending on need.
 *
 * <ButtonGroupSkeleton />
 */
declare const ButtonGroupSkeleton: BDSForwardRef<ButtonGroupSkeletonProps>;
declare type ButtonGroupSkeletonRef = HTMLDivElement;
interface ButtonGroupSkeletonProps {
    animate?: boolean;
    width?: string;
    size?: string;
    className?: string;
}
export { ButtonGroupSkeleton };
export type { ButtonGroupSkeletonProps, ButtonGroupSkeletonRef };
export default ButtonGroupSkeleton;
