import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { ArticleRef } from './Article';
import type { CaptionRef } from './Caption';
import type { FootnoteRef } from './Footnote';
import type { HeadingRef } from './Headings';
import type { ParagraphRef } from './Paragraph';
/**
 * Backyard React Typography
 *
 * Combines all typographies into one React API
 *
 *  <Typography variant="body_small">This body text is always small</Typography>
 *
 *  <Typography variant="body">This body text is small on mobile, but medium on desktop</Typography>
 */
declare const Typography: BDSForwardRef<TypographyProps>;
declare type TypographyRef = HeadingRef | ParagraphRef | ArticleRef | CaptionRef | FootnoteRef | HTMLSpanElement;
interface TypographyProps extends BackyardBaseProps<TypographyRef> {
    /**
     * Aligns text to one of left, center, or right.
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Makes text bold weight.
     */
    bold?: boolean;
    /**
     * Makes text regular weight.
     */
    regular?: boolean;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Children
     */
    children: React.ReactNode;
    /**
     * Backyard Color Token
     * Example: "interactive" or "primary"
     */
    color?: keyof BackyardToken['color'];
    /**
     * Custom definition for HTML to use with Typography
     * Example: "p" for paragraph or "div" for div
     */
    component?: React.ElementType;
    /**
     * CSS Display type of inline or block
     */
    display?: 'block' | 'inline';
    /**
     * Backyard spacing token for margin bottom.
     * Useful for when you have a lot of headers and don't want to
     * recreate styles for each variant of header you are using.
     */
    marginBottom?: keyof BackyardToken['sizes'];
    /**
     * Variant of typography as defined in `variants` variable...
     */
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body_1' | 'body_2' | 'body' | 'body_small' | 'article' | 'caption' | 'overline' | 'footnote' | 'label' | 'helper';
}
export { Typography };
export type { TypographyProps, TypographyRef };
export default Typography;
