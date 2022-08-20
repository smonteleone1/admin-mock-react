import * as React from 'react';
import type { RadioProps, RadioRef } from '../Radio';
import type { TooltipProps } from '../Tooltip';
import type { TooltipPopperProps } from '../TooltipPopper';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard PVS component
 * Also known as a swatch selector.
 *
 * The PVS component allows the user to choose between various textures or colors offered for a particular item.
 * It provides a quick view of what options are available, and typically changes the relevant images to reflect
 * the changes made from the PVS selector.
 *
 * Only one option in a PVS may be selected at a time. Essentially, the swatches function as a radio button but
 * with images/color swatches included for a quick preview.
 *
 * The name of the swatch is visible on hover through a tooltip.
 *
 * ex.
 * <RadioGroup
 *      direction="row"
 *      defaultValue="crema-oak">
 *     <PVS
 *          value="natural-oak"
 *          title="Natural Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753008645_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="cambridge-abbey-oak"
 *          title="Cambridge Abbey Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/1000128595_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="crema-oak"
 *          title="Crema Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753349960_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="black"
 *          fill="#000"
 *          unavailable
 *          title="Black"
 *          color="green"
 *     />
 *     <PVS
 *          value="white"
 *          fill="#ffffff"
 *          title="White"
 *          color="green" />
 * </RadioGroup>
 */
declare const PVS: BDSForwardRef<PVSProps>;
declare type PVSRef = RadioRef;
declare type PVSOverrideProps = 'wrapperProps';
interface PVSProps extends Omit<RadioProps, PVSOverrideProps> {
    /**
     * Required. The color or image to be displayed in the PVS
     * Can either be an image source or a color hex value (#000 or #000000).
     */
    fill: string;
    /**
     * Required. Value of the internal `input`
     */
    value: string;
    /**
     * DOM Name of the internal `input`
     * Note: Required when NOT a child of `RadioGroup`
     */
    name?: string;
    /**
     * Name of the PVS swatch color/image.
     * Used as the tooltip content, also used as the `alt` value for image fills.
     */
    title?: string;
    /**
     * DOM Class Name for PVS
     */
    className?: string;
    /**
     * Used to indicate that a PVS is not currently available to the user
     */
    unavailable?: boolean;
    /**
     * Whether or not `RadioTile` is checked
     */
    checked?: RadioProps['checked'];
    /**
     * Whether or not the radio is checked by default
     */
    defaultChecked?: RadioProps['defaultChecked'];
    /**
     * Color of the selected badge
     */
    color?: 'interactive' | 'green';
    /**
     * `onChange` function triggered when value of `input` changes
     * Chained through `RadioGroup` parent if present
     */
    onChange?: RadioProps['onChange'];
    /**
     * Used to apply props on the radio wrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    /**
     * Overwrite props for the tooltips
     */
    tooltipProps?: React.PropsWithRef<TooltipProps>;
    /**
     * Overwrite props for the tooltipPoppers
     */
    popoverProps?: Partial<React.PropsWithRef<TooltipPopperProps>>;
    /**
     * Overwrite props for the tooltipPoppers
     *
     * Alais of `popoverProps`
     */
    popperProps?: Partial<React.PropsWithRef<TooltipPopperProps>>;
    /**
     * DOM Class Name for the input
     */
    inputClassName?: string;
}
export { PVS };
export type { PVSProps, PVSRef };
export default PVS;
