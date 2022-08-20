import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Tab Component
 *
 *
 */
declare const Tab: BDSForwardRef<TabProps>;
declare type TabRef = HTMLButtonElement;
interface TabProps extends BackyardBaseProps<TabRef> {
    /**
     * The id of the TabContent associated with the tab.
     */
    ariaControls?: string;
    /**
     * Adds a class to the tab
     */
    className?: string;
    /**
     * Wether or not the tab is disabled
     */
    disabled?: boolean;
    /**
     * Adds an id to the tab
     */
    id?: string;
    /**
     * The index of the tab
     */
    index?: number;
    /**
     * The text within a tab.
     */
    label?: string;
    /**
     * Trigger function for onClick.
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * Trigger function for onKeyDown.
     */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /**
     * The role for the tab.
     */
    role?: 'tab' | 'presentation';
    /**
     * Wether or not the tab is selected
     */
    selected?: boolean;
}
export type { TabRef, TabProps };
export { Tab };
export default Tab;
