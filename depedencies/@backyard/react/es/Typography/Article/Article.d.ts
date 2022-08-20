import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard React Article
 *
 * Internal Component for Typography
 */
declare const Article: BDSForwardRef<ArticleProps>;
declare type ArticleRef = HTMLParagraphElement;
interface ArticleProps extends BackyardBaseProps<ArticleRef> {
}
export { Article };
export type { ArticleProps, ArticleRef };
export default Article;
