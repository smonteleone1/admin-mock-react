import type { GalleryBaseProps, GalleryBaseRef } from './GalleryBase';
import type { GalleryProviderProps } from './GalleryProvider';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Gallery
 *
 * Gallery takes a list of items and render thumbnails and original sources as `img` tags.
 *
 * It provides functionality to handle clicking on thumbnails and navigation buttons for the
 * user to navigate through the list of gallery items, via the `GalleryProvider`, to all its children.
 *
 * Think of each `img` with original src as a Viewport Item,
 * and each `img` with the thumbnail as a Thumbnail item.
 *
 * Each Viewport Item and Thumbnail can be customized via
 * the `renderViewportItem` and `renderThumbnail` props in `GalleryItem`.
 *
 * This allows the UI/UX of the Gallery itself to be separated from the logic that handles state
 * as well as the logic that handles rendering individual viewport items or thumbnails.
 *
 * In special use-cases, instead of using Gallery, it is possible to wrap
 * `GalleryThumbnailGroup` and `GalleryViewport as children of `GalleryProvider` so that the layout
 * can be customized, such as in a `Modal`.
 *
 * See documentation site code examples for more.
 *
 * Example:
 * ```
 *  <Gallery
 *      items={[
 *          {
 *              original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
 *          }
 *      ]}
 *  />
 * ```
 */
declare const Gallery: BDSForwardRef<GalleryProps>;
declare type GalleryRef = GalleryBaseRef;
interface GalleryProps extends GalleryBaseProps {
    /**
     * Default selected item number
     *
     * Use this to let `GalleryProvider` handle state
     * Default: 0
     */
    defaultItem?: GalleryProviderProps['defaultItem'];
    /**
     * Whether or not the navigation buttons are rendered
     * Default: false
     */
    disableNavigation?: GalleryProviderProps['disableNavigation'];
    /**
     * Whether or not the thumbnails are rendered
     * Default: false
     */
    disableThumbnails?: GalleryBaseProps['disableThumbnails'];
    /**
     * Selected item number
     *
     * Use this to control `GalleryProvider`'s `item` state externally
     */
    item?: GalleryProviderProps['item'];
    /**
     * List of `GalleryItem`s that are passed to `GalleryProvider`
     *
     * These will be automatically rendered out from `Gallery`
     */
    items?: GalleryProviderProps['items'];
    /**
     * The maximum number of thumbnails that will be displayed
     *
     * Any thumbnails in excess of this will be joined into an `excess` thumbnail
     * that displays the number of thumbnails still available (ex. "+5")
     */
    maxThumbnails?: GalleryProviderProps['maxThumbnails'];
    /**
     * Override props for `GalleryProvider` to either override current functionality
     * or provide new context to children.
     *
     * Useful if your custom `GalleryViewportItem` needs more external data
     */
    override?: GalleryProviderProps['override'];
    /**
     * `onClick` handler for the excess thumbnails button
     *
     * (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
     */
    onExcessClick?: GalleryProviderProps['onExcessClick'];
    /**
     * `onChange` handler for when fires when displayed Gallery item has changes
     *
     * (event: (React.ChangeEvent | React.MouseEvent), item: number) => void
     */
    onChange?: GalleryProviderProps['onChange'];
    /**
     * `onClickNext` handler for when fires when next icon button is clicked
     *
     * (event: React.MouseEvent, item: number) => void
     */
    onClickNext?: GalleryProviderProps['onClickNext'];
    /**
     * `onClickPrevious` handler for when fires when previous icon button is clicked
     *
     * (event: React.MouseEvent, item: number) => void
     */
    onClickPrevious?: GalleryProviderProps['onClickPrevious'];
    /**
     * Shape of the gallery components
     */
    shape?: GalleryProviderProps['shape'];
    /**
     * Customized excess thumbnail text
     */
    excessRender?: GalleryProviderProps['excessRender'];
}
export { Gallery };
export type { GalleryProps, GalleryRef };
export default Gallery;
