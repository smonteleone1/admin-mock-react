import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard React Paragraph
 *
 * Internal Component for Typography
 */
declare const Paragraph: BDSForwardRef<ParagraphProps>;
declare type ParagraphRef = HTMLParagraphElement;
interface ParagraphProps extends BackyardBaseProps<ParagraphRef> {
}
export { Paragraph };
export type { ParagraphRef, ParagraphProps };
export default Paragraph;
