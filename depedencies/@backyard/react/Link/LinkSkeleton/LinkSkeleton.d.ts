import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
declare const LinkSkeleton: BDSForwardRef<LinkSkeletonProps>;
declare type LinkSkeletonRef = HTMLDivElement;
interface LinkSkeletonProps {
    animate?: boolean;
    width?: string;
    size?: string;
    className?: string;
}
export { LinkSkeleton };
export type { LinkSkeletonProps, LinkSkeletonRef };
export default LinkSkeleton;
