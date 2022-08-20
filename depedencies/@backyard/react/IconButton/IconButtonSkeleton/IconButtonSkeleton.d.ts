import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyards IconButtonSkeleton component
 *
 * Returns a Skeleton rect with a predefined height / width based on
 * the value of the size prop (ie. 'small', 'medium', 'large').
 *
 * <IconButtonSkeleton />
 */
declare const IconButtonSkeleton: BDSForwardRef<IconButtonSkeletonProps>;
declare type IconButtonSkeletonRef = HTMLDivElement;
interface IconButtonSkeletonProps {
    animate?: boolean;
    size?: string;
    className?: string;
}
export { IconButtonSkeleton };
export type { IconButtonSkeletonProps, IconButtonSkeletonRef };
export default IconButtonSkeleton;
