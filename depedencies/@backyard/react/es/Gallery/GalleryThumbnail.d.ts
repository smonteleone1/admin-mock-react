import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import { GalleryProviderProps } from './GalleryProvider';
/**
 * Backyard React Gallery Default Thumbnail
 *
 * Default thumbnail to be rendered.
 * This can be overridden by the `renderThumbnail` prop.
 */
declare const GalleryDefaultThumbnail: BDSForwardRef<GalleryThumbnailProps>;
/**
 * Backyard React Product Gallery Thumbnail
 *
 * Handles the render of the thumbnail, and provides a button for the user to click on
 * and set the current selected item with.
 *
 * Example:
 * ```
 *  <GalleryThumbnail
 *      src="http://some.where/img.jpg"
 *      item={0}
 *  />
 * ```
 */
declare const GalleryThumbnail: BDSForwardRef<GalleryThumbnailProps>;
declare type GalleryThumbnailRef = HTMLImageElement;
interface GalleryThumbnailProps extends BackyardBaseProps<GalleryThumbnailRef> {
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Custom component to render in place of `img`
     *
     * Simpler than `renderThumbnail`
     */
    component?: React.ElementType;
    /**
     * List of `GalleryItem`s to be rendered
     */
    item?: GalleryProviderProps['item'];
    /**
     * Render a custom item inside of `GalleryThumbnail`
     *
     * Useful for any needs other than an `img` tag, such as creating a lazyloader,
     * or adding an overlay image to the thumbnail `img` tag.
     */
    renderThumbnail?: (props: GalleryThumbnailProps, ref?: React.Ref<GalleryThumbnailRef>) => React.ReactElement<GalleryThumbnailProps>;
    /**
     * Customized excess thumbnail text
     */
    excessRender?: GalleryProviderProps['excessRender'];
    /**
     * Variant of the thumbnail
     */
    variant?: 'excess' | 'dot' | 'content' | string;
    /**
     * Wrapper props to extend thumbnail button wrapper with
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    /**
     * maxThumbnails
     */
    maxThumbnails?: GalleryProviderProps['maxThumbnails'];
}
export { GalleryThumbnail, GalleryDefaultThumbnail };
export type { GalleryThumbnailProps, GalleryThumbnailRef };
export default GalleryThumbnail;
