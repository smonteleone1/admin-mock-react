import * as React from 'react';
import { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile contains links to external sites or sections of the page that are navigated to when selected.
 * The entire surface of the tile is selectable, which prevents additional links from being included within the content.
 *
 * note: The 'outlined' variation is to be used when there are pictures being included on the tile(s).
 *
 * example:
 * <LinkTile href='www.lowes.com'>
 *     <span>Hello World</span>
 * </LinkTile>
 */
declare const LinkTile: BDSForwardRef<LinkTileProps>;
declare type LinkTileRef = HTMLAnchorElement;
interface LinkTileProps extends BackyardBaseProps<LinkTileRef> {
    /**
     * Sets the link that will be navigated to upon click of tile
     */
    href?: string;
    /**
     * Apply disabled styling if 'true'
     */
    disabled?: boolean;
    /**
     * Changes card styling to provided variant style
     */
    color?: 'surface' | 'subdued';
    /**
     * Shape of the edges
     */
    shape?: 'rounded' | 'squared';
    /**
     * Replaces the <LinkIcon/> with the provided @backyard/icons icon
     */
    icon?: React.ReactNode;
    /**
     * Removes the default <LinkIcon/> from being displayed
     */
    disableIcon?: boolean;
}
export { LinkTile };
export type { LinkTileProps, LinkTileRef };
export default LinkTile;
