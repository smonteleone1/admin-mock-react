import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backard BadgeSkeleton component.
 * Returns the skeleton state of the badge element with a defined height
 * and a variable width. The width should be set to the width of the
 * badge component in the designs. Take badge width and divide by 16
 * (ie. 112/16 = 7, so width would be 7rem)
 *
 * <BadgeSkeleton />
*/
declare const BadgeSkeleton: BDSForwardRef<BadgeSkeletonProps>;
declare type BadgeSkeletonRef = HTMLDivElement;
interface BadgeSkeletonProps {
    animate?: boolean;
    width?: string;
    className?: string;
    size?: 'medium' | 'jumbo';
}
export { BadgeSkeleton };
export type { BadgeSkeletonProps, BadgeSkeletonRef };
export default BadgeSkeleton;
