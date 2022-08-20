import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard React Caption
 *
 * Internal Component for Typography
 */
declare const Caption: BDSForwardRef<CaptionProps>;
declare type CaptionRef = HTMLSpanElement;
interface CaptionProps extends BackyardBaseProps<CaptionRef> {
}
export { Caption };
export type { CaptionProps, CaptionRef };
export default Caption;
