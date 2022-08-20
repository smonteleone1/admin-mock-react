import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard ButtonSkeleton component
 *
 * Returns a Skeleton Rect with a predefined height depending on the
 * value passed to the size prop. The skeleton has a default width also
 * that can be overwritten depending on the width of the button with it's
 * label.
 *
 * <ButtonSkeleton />
 */
declare const ButtonSkeleton: BDSForwardRef<ButtonSkeletonProps>;
declare type ButtonSkeletonRef = HTMLDivElement;
interface ButtonSkeletonProps {
    size?: string;
    animate?: boolean;
    fullWidth?: boolean;
    width?: string;
    className?: string;
}
export { ButtonSkeleton };
export type { ButtonSkeletonProps, ButtonSkeletonRef };
export default ButtonSkeleton;
