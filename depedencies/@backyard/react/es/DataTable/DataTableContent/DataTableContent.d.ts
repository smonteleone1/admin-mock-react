import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
/**
 * Backyard React Data Table Content
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header, body, and footer of the data table, without the toolbar
 */
declare const DataTableContent: <Data extends object = any>({ children, className, ...props }: DataTableContentProps) => React.ReactElement<DataTableContentProps>;
declare type DataTableContentRef = HTMLTableElement;
interface DataTableContentProps extends BackyardBaseProps<DataTableContentRef> {
}
export { DataTableContent };
export type { DataTableContentProps, DataTableContentRef };
export default DataTableContent;
