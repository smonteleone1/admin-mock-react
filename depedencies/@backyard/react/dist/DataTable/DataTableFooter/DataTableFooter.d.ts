import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
/**
 * Backyard React Data Table Footer
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the footer of the data table
 */
declare const DataTableFooter: <Data extends object = any>({ children, className, ...props }: DataTableFooterProps) => React.ReactElement<DataTableFooterProps>;
declare type DataTableFooterRef = HTMLTableElement;
interface DataTableFooterProps extends BackyardBaseProps<DataTableFooterRef> {
}
export { DataTableFooter };
export type { DataTableFooterProps, DataTableFooterRef };
export default DataTableFooter;
