import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backyard React Heading
 *
 * Internal Component for Typography
 */
declare const Heading: BDSForwardRef<HeadingProps>;
declare type HeadingRef = HTMLHeadingElement;
interface HeadingProps extends BackyardBaseProps<HeadingRef> {
    /**
     * Heading level
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Change the font-weight to regular (400)
     *  from the default bold (700) when true
     */
    regular?: boolean;
}
export { Heading };
export type { HeadingProps, HeadingRef };
export default Heading;
