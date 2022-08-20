import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
/**
 * Backyard React Data Table Header
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header of the data table
 */
declare const DataTableHeader: <Data extends object = any>({ children, className, ...props }: DataTableHeaderProps) => React.ReactElement<DataTableHeaderProps>;
declare type DataTableHeaderRef = HTMLTableElement;
interface DataTableHeaderProps extends BackyardBaseProps<DataTableHeaderRef> {
}
export { DataTableHeader };
export type { DataTableHeaderProps, DataTableHeaderRef };
export default DataTableHeader;
