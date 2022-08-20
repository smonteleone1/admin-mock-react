import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Product Gallery Viewport
 *
 * This component automatically renders a group of viewport items that are provided by the `GalleryProvider`
 * Can be placed anywhere within `GalleryProvider` to provide custom layout
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
declare const GalleryViewport: BDSForwardRef<GalleryViewportProps>;
declare type GalleryViewportRef = HTMLDivElement;
interface GalleryViewportProps extends BackyardBaseProps<GalleryViewportRef> {
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Height of the viewport
     */
    height?: string;
    /**
     * Width of the viewport
     */
    width?: string;
    /**
     * Padding inside the viewport
     */
    padding?: keyof BackyardToken['sizes'] | string;
}
export { GalleryViewport };
export type { GalleryViewportProps, GalleryViewportRef };
export default GalleryViewport;
