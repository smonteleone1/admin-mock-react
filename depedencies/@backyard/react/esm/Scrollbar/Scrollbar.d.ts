import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * A styled scrollbar for use with the Backyard Design System.
 *
 * TODO Implement a vertical scrollbar for the Y axis. Currently only provides a horizontal scrollbar for the X axis.
 *
 * ex:
 * <Scrollbar>
 *     Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin landjaeger rump alcatra capicola chicken
 *     pork chop. Filet mignon tenderloin drumstick burgdoggen swine shoulder picanha meatball ham venison chislic
 *     landjaeger andouille beef ribs jerky. Strip steak kevin sirloin cow picanha pork loin jowl chuck short loin
 *     shoulder sausage flank, brisket drumstick. Landjaeger ham pig meatball chuck ribeye. Kevin filet mignon
 *     pastrami turducken. Spare ribs pastrami chicken, meatball rump ball tip bacon kevin pork belly shoulder
 *     venison capicola cow pig ground round. Shank beef turducken, leberkas chuck tri-tip hamburger pork ham spare
 *     ribs kielbasa.
 * </Scrollbar>
 *
 * note:
 * To override/change the scrollbar styling please target the following css classes:
 *   - .scrollbar-container
 *   - .scrollbar-track
 *   - .scrollbar-knob
 * To override/change the content styling please target the following css classes:
 *   - .content-container
 */
declare const Scrollbar: BDSForwardRef<ScrollbarProps>;
declare type ScrollbarRef = HTMLDivElement;
interface ScrollbarProps extends BackyardBaseProps<ScrollbarRef> {
    /**
     * Classname for the ScrollbarWrapper
     */
    className?: string;
    /**
     * Additional props for the ScrollbarWrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    /**
     * Id for the content the ScrollbarWrapper is wrapping
     */
    id?: string;
    /**
     * Used to pass additional functionality to the onScroll event
     */
    onScroll?: () => void;
    onResize?: () => void;
}
export { Scrollbar };
export type { ScrollbarProps, ScrollbarRef };
export default Scrollbar;
