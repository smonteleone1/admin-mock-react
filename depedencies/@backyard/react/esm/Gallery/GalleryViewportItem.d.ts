import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { GalleryProviderProps } from './GalleryProvider';
/**
 * Backyard React Gallery Default ViewportItem
 *
 * Default viewport item to be rendered.
 * This can be overridden by the `renderViewportItem` prop.
 */
declare const GalleryDefaultViewportItem: BDSForwardRef<GalleryViewportItemProps>;
/**
 * Backyard React Product Gallery Viewport Item
 *
 * Handles the render of the viewport item, and provides navigation buttons
 * for the user to click on and set the current selected item with.
 *
 * Example:
 * ```
 *  <GalleryViewportItem
 *      src="http://some.where/img.jpg"
 *      item={0}
 *  />
 * ```
 */
declare const GalleryViewportItem: BDSForwardRef<GalleryViewportItemProps>;
declare type GalleryViewportItemRef = HTMLImageElement;
interface GalleryViewportItemProps extends BackyardBaseProps<GalleryViewportItemRef> {
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
     * Render a custom item inside of `GalleryViewportItem`
     *
     * Useful for any needs other than an `img` tag, such as creating a lazyloader,
     * or a video viewer, or a 360 spinner, etc.
     */
    renderViewportItem?: (props: GalleryViewportItemProps, ref?: React.Ref<GalleryViewportItemRef>) => React.ReactElement<GalleryViewportItemProps>;
    /**
     * Variant of the thumbnail
     */
    variant?: 'excess' | 'dot' | 'content' | string;
    /**
     * Wrapper props to extend thumbnail button wrapper with
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
}
export { GalleryViewportItem, GalleryDefaultViewportItem };
export type { GalleryViewportItemProps, GalleryViewportItemRef };
export default GalleryViewportItem;
