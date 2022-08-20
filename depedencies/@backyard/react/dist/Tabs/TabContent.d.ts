import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
declare const TabContent: BDSForwardRef<TabContentProps>;
declare type TabContentRef = HTMLDivElement;
interface TabContentProps extends BackyardBaseProps<TabContentRef> {
    /**
     * The content displayed within the tab content area.
     */
    children: React.ReactElement;
    /**
     * Adds a class name to the TabContent component's wrapper.
     */
    className?: string;
    /**
     * Required for accessability.
     *
     * This is the id that the Tab component's `aria-controls` property must point to.
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
     */
    id: string;
    /**
     * If the current Tab associated with this TabContent is selected. This is used to
     * change the value for the hidden property on TabContent.
     */
    selected?: boolean;
}
export type { TabContentRef, TabContentProps };
export { TabContent };
export default TabContent;
