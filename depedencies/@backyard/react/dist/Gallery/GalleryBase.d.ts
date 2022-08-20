import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Product Gallery Base
 *
 * @internal
 *
 * This component is for the `Gallery` component to auto render with our base layout
 *
 * It is not needed for the functionality of the `Gallery
 */
declare const GalleryBase: BDSForwardRef<GalleryBaseProps>;
declare type GalleryBaseRef = HTMLDivElement;
declare type GalleryOverrideProps = 'onChange';
interface GalleryBaseProps extends BackyardBaseProps<GalleryBaseRef, GalleryOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string;
    disableThumbnails?: boolean;
    maxThumbnails?: number;
}
export { GalleryBase };
export type { GalleryBaseProps, GalleryBaseRef };
export default GalleryBase;
