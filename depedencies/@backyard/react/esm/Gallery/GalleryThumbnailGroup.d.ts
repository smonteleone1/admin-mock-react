import { FormGroupRef, FormGroupProps } from '../FormGroup';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Product Gallery Thumbnail Group
 *
 * This component automatically rendered a group of thumbnails that are provided by the `GalleryProvider`
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
declare const GalleryThumbnailGroup: BDSForwardRef<GalleryThumbnailGroupProps>;
declare type GalleryThumbnailGroupRef = FormGroupRef;
interface GalleryThumbnailGroupProps extends FormGroupProps {
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Direction of the thumbnails to be rendered
     */
    direction?: FormGroupProps['direction'];
    /**
     * Whether or not mobile render of thumbnails will be transitioned to automatically
     *
     * Useful if you still need the thumbnails to be images instead of dots in mobile
     */
    disableMobile?: boolean;
    /**
     * Whether or not the `excess` thumbnail will be rendered
     */
    hideExcessThumbnails?: boolean;
    /**
     * The maximum number of thumbnails to be displayed
     *
     * Any thumbnails more than this are joined into an `excess` thumbnail
     */
    maxThumbnails?: number;
}
export { GalleryThumbnailGroup };
export type { GalleryThumbnailGroupProps, GalleryThumbnailGroupRef };
export default GalleryThumbnailGroup;
