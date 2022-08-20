import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
/**
 * Backyard React Gallery Skeleton
 */
declare const GallerySkeleton: BDSForwardRef<GallerySkeletonProps>;
declare type GallerySkeletonRef = SkeletonRef;
interface GallerySkeletonProps extends SkeletonProps {
    /**
     * Whether or not buttons are hidden
     */
    hideButtons?: boolean;
    /**
     * Number of thumbnails
     */
    thumbnails?: number;
}
export { GallerySkeleton };
export type { GallerySkeletonProps, GallerySkeletonRef };
export default GallerySkeleton;
