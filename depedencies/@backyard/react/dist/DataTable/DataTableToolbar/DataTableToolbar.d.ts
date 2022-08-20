import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
/**
 * Backyard React Data Table Toolbar
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the toolbar of the data table
 */
declare const DataTableToolbar: <Data extends object = any>({ children, className, size: sizeProp, shape: shapeProp, ...props }: DataTableToolbarProps) => React.ReactElement<DataTableToolbarProps>;
declare type DataTableToolbarRef = HTMLDivElement;
declare type DataTableToolbarOverrides = 'size';
interface DataTableToolbarProps extends BackyardBaseProps<DataTableToolbarRef, DataTableToolbarOverrides> {
    /**
     * Size of the component
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared';
}
export { DataTableToolbar };
export type { DataTableToolbarProps, DataTableToolbarRef };
export default DataTableToolbar;
