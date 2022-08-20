import * as React from 'react';
import { BDSFunctional } from '../utils/typings/BDSComponentProps';
import type GalleryItem from './types/GalleryItem';
import type { GalleryThumbnailRef } from './GalleryThumbnail';
/**
 * GalleryContext
 */
declare const GalleryContext: React.Context<GalleryContextValues>;
/**
 * GalleryConsumer
 */
declare const GalleryConsumer: React.Consumer<GalleryContextValues>;
/**
 * Backyard React Gallery Provider
 *
 * Provides values to children and handles state management of the `Gallery`.
 *
 * Use this component to supply your own custom layout.
 *
 * Example:
 * ```
 *  <GalleryProvider
 *      items={[
 *          {
 *              original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
 *          }
 *      ]}
 *  >
 *      <Grid.Row>
 *          <Grid.Column
 *              style={{
 *                  width: '6rem'
 *              }}
 *          >
 *              <GalleryThumbnailGroup
 *                  disableMobile
 *                  maxThumbnails={20}
 *                  direction="column"
 *                  style={{ maxHeight: '32rem' }}
 *              />
 *          </Grid.Column>
 *          <Grid.Column />
 *          <Grid.Column sm={8}>
 *              <GalleryViewport />
 *          </Grid.Column>
 *      </Grid.Row>
 *  </GalleryProvider>
 * ```
 */
declare const GalleryProvider: BDSFunctional<GalleryProviderProps>;
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(GalleryContext)`
 */
interface GalleryContextValues {
    /**
     * Current selected item number
     * Default: 0
     */
    item: GalleryProviderProps['item'];
    /**
     * Set the current selected item number
     */
    setItem: (newState: React.SetStateAction<GalleryProviderProps['item']>) => number;
    /**
     * List of `GalleryItem`s to be rendered/managed
     */
    items: GalleryProviderProps['items'];
    /**
     * Whether or not the navigation buttons are disabled in the `GalleryViewport`
     */
    disableNavigation: GalleryProviderProps['disableNavigation'];
    /**
     * The maximum number of thumbnails to be displayed
     *
     * Any thumbnails more than this are joined into an `excess` thumbnail
     */
    maxThumbnails: GalleryProviderProps['maxThumbnails'];
    /**
     * `onClick` handler for the excess thumbnail
     */
    onExcessClick?: GalleryProviderProps['onExcessClick'];
    /**
    * `onChange` handler for when fires when displayed Gallery item has changes
    */
    onChange?: GalleryProviderProps['onChange'];
    /**
    * `onClickNext` handler for when fires when next icon button is clicked
    */
    onClickNext?: GalleryProviderProps['onClickNext'];
    /**
     * `onClickPrevious` handler for when fires when previous icon button is clicked
     */
    onClickPrevious?: GalleryProviderProps['onClickPrevious'];
    /**
     * Shape of the gallery components
     */
    shape: GalleryProviderProps['shape'];
    /**
     * Customized excess thumbnail text
     */
    excessRender?: GalleryProviderProps['excessRender'];
}
interface GalleryProviderProps {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode;
    /**
     * Default item to be selected
     */
    defaultItem?: number;
    /**
     * Whether or not the navigation buttons are disabled within the `GalleryViewport`
     */
    disableNavigation?: boolean;
    /**
     * Current selected item
     */
    item?: number;
    /**
     * List of `GalleryItem`s to be rendered
     */
    items?: GalleryItem[];
    /**
     * The maximum number of thumbnails to be displayed
     *
     * Any thumbnails more than this are joined into an `excess` thumbnail
     */
    maxThumbnails?: number;
    /**
     * `onClick` handler for the excess thumbnail
     */
    onExcessClick?: (event: React.MouseEvent<GalleryThumbnailRef>) => void;
    /**
     * `onChange` handler for when fires when displayed Gallery item has changes
     * @argument {Event} event - DOM event
     * @argument {item} - index of the item selected
     */
    onChange?: (event: React.ChangeEvent | React.MouseEvent, item: number) => void;
    /**
     * `onClickNext` handler for when fires when next icon button is clicked
     * @argument {Event} event - DOM event
     * @argument {item} - index of the item selected
     */
    onClickNext?: (event: React.MouseEvent, item: number) => void;
    /**
     * `onClickPrevious` handler for when fires when previous icon button is clicked
     * @argument {Event} event - DOM event
     * @argument {item} - index of the item selected
     */
    onClickPrevious?: (event: React.MouseEvent, item: number) => void;
    /**
     * Shape of the gallery components
     */
    shape?: 'rounded' | 'squared';
    /**
     * Override props for `GalleryProvider` to either override current functionality
     * or provide new context to children.
     *
     * Useful if your custom `GalleryViewportItem` needs more external data
     */
    override?: object;
    /**
     * Customized excess thumbnail text
     */
    excessRender?: string;
}
export { GalleryProvider, GalleryContext, GalleryConsumer };
export type { GalleryContextValues, GalleryProviderProps };
export default GalleryProvider;
