import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard React Footnote
 *
 * Internal Component for Typography
 */
declare const Footnote: BDSForwardRef<FootnoteProps>;
declare type FootnoteRef = HTMLSpanElement;
interface FootnoteProps extends BackyardBaseProps<FootnoteRef> {
}
export { Footnote };
export type { FootnoteProps, FootnoteRef };
export default Footnote;
