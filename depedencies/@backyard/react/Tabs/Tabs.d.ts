import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Tabs Component
 */
declare const Tabs: BDSForwardRef<TabsProps>;
declare type TabsRef = HTMLDivElement;
interface TabsProps extends BackyardBaseProps<TabsRef> {
    /**
     * The Tab components.
     */
    children?: React.ReactElement[];
    /**
     * Adds a class name to the Tab component's wrapper.
     */
    className?: string;
    /**
     * Shape of the edges of the tabs
     */
    shape?: 'rounded' | 'squared';
    /**
     * Iverses the field color token. This should be used when the Tabs component is on a layer color.
     */
    isOnLayer?: boolean;
    /**
     * If false, the TabContent for each tab is not attached to the DOM.
     *
     * If true, the TabContent for each tab is attached to the DOM. This
     * option is best if you need the content in the DOM for SEO purposes.
     */
    keepMounted?: boolean;
    /**
     * Sends a mouse or keyboard event based on how the change occurred.
     */
    handleOnChange?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    /**
     * The tab that is selected by default.
     */
    defaultSelected?: number;
}
export type { TabsRef, TabsProps };
export { Tabs };
export default Tabs;
