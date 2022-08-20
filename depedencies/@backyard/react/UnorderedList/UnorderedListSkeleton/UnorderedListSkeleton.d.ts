import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backard UnorderedListSkeleton component.
 *
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by
 * default.
 *
 * <UnorderedListSkeleton />
*/
declare const UnorderedListSkeleton: BDSForwardRef<UnorderedListSkeletonProps>;
declare type UnorderedListSkeletonRef = HTMLDivElement;
interface UnorderedListSkeletonProps {
    animate?: boolean;
    density?: string;
    items?: number;
    width?: string;
    className?: string;
}
export { UnorderedListSkeleton };
export type { UnorderedListSkeletonProps, UnorderedListSkeletonRef };
export default UnorderedListSkeleton;
