import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Link
 *
 * Link for interacting via html links
 *
 * If you want a button, see the `ghost` variant of the Button component
 *
 *  <Link
 *      to="https://lowes.com"
 *      type="commerce"
 *      iconAfter={<Bookmark />}
 *  >
 *      Bookmark
 *  </Link>
 */
declare const Link: BDSForwardRef<LinkProps>;
declare type LinkRef = HTMLAnchorElement;
declare type LinkOverrideProps = 'size';
interface LinkProps extends BackyardBaseProps<LinkRef, LinkOverrideProps> {
    /**
     * Children
     */
    children?: React.ReactNode;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Whether or not text in link is bold
     */
    bold?: boolean;
    /**
     * Color of link text and icon
     */
    color?: string | 'interactive' | 'primary' | 'inverse';
    /**
     * Icon Node to display on right-side of link text
     */
    iconAfter?: React.ReactNode;
    /**
     * Icon Node to display on left-side of link text
     */
    iconBefore?: React.ReactNode;
    /**
     * Size of Link
     * Small -> Small Height/Spacing Link
     * Medium -> (Default) Medium Height/Spacing Link
     */
    size?: 'small' | 'medium';
    /**
     * Page to link to
     */
    to?: string;
    /**
     * Controls when the link should have an underline
     */
    underline?: 'never' | 'hover' | 'always';
    /**
     * `onClick` trigger function
     * @argument {Event} event - DOM event
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * `onKeyDown` trigger function
     * @argument {Event} event - DOM event
     */
    onKeyDown?: (event: React.KeyboardEvent) => void;
}
export { Link };
export type { LinkProps, LinkRef };
export default Link;
