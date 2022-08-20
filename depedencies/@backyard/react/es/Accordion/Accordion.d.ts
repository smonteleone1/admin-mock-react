import * as React from 'react';
import BackyardBaseProps from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Accordion
 *
 * Accordion uses chevronUp and chevronDown by default. To use the plus and minus
 * icons, you can change openIcon to 'plus' and closeIcon to 'minus'.
 *
 * The accordion size is medium by default.
 *
 * <Accordion
 *  title="Title"
 * >
 *     This is the contents of the accordion.
 * </Accordion>
 *
 */
declare const Accordion: BDSForwardRef<AccordionProps>;
declare type AccordionRef = HTMLDivElement;
declare type AccordionOverrideProps = 'size' | 'onClick';
declare type AccordionEvents = React.MouseEvent | React.KeyboardEvent;
interface AccordionProps extends BackyardBaseProps<AccordionRef, AccordionOverrideProps> {
    /**
     * Components that will be displayed when the Accordion is opened.
     */
    children?: React.ReactNode;
    /**
     * Adds a class name to the Accordion.
     */
    className?: string;
    /**
     * The Accordion title.
     */
    title?: string;
    /**
     * The Accordion subtitle
     */
    subtitle?: string;
    /**
     * The default state of the <Accordion /> when it is initially rendered.
     */
    defaultOpen?: boolean;
    /**
     * The controlled state of the <Accordidon />.
     */
    open?: boolean;
    /**
     * Keeps the children mounted.
     */
    keepMounted?: boolean;
    /**
     * The size of the Accordion.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Variant of the Accordion icons
     */
    variant?: 'triangle' | 'plus';
    /**
     * The color of the accordion
     */
    color?: 'transparent' | 'interactive' | 'neutral';
    /**
     * Trigger function for onClick.
     */
    onClick?: (event: AccordionEvents, open: boolean) => void;
    /**
     * Trigger function for onOpen.
     */
    onOpen?: () => null;
    /**
     * Trigger function for onClose.
     */
    onClose?: () => null;
}
export { Accordion };
export type { AccordionProps, AccordionRef };
export default Accordion;
