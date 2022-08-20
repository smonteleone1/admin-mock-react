import { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Spinner
 *
 * To be used when retrieving data or performing slow computations.
 * They notify to the user that their request is being processed.
 *
 * <Spinner show={true}
 *          color={'commerce'}
 *          invisible/>
 *
 * Loading spinners may be scaled down by adding the `inline` attribute if the loading experience is contextual
 * to a certain item on the page.
 *
 *  <Spinner
 *      show
 *      small
 *      inline
 *  />
 */
declare const Spinner: BDSForwardRef<SpinnerProps>;
declare type SpinnerRef = HTMLSpanElement;
interface SpinnerProps extends BackyardBaseProps<SpinnerRef> {
    /**
     * Whether or not to display the spinner on the page
     */
    show?: boolean;
    /**
     * Whether or not to make the spinner small, when `true` makes spinner small
     */
    small?: boolean;
    /**
     * Whether or not overlay is invisible
     */
    invisible?: boolean;
    /**
     * Displays spinner without overlay to be used inline with text or inside components eg Buttons
     */
    inline?: boolean;
    /**
     * Change color of spinner using a valid color @backyard/design-token
     */
    color?: string;
    /**
     * Provides classname to Overlay component
     */
    className?: string;
}
export { Spinner };
export type { SpinnerProps, SpinnerRef };
export default Spinner;
