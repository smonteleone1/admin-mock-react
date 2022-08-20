import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
/**
 * Backyard React Data Table Body
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the body of the data table
 */
declare const DataTableBody: <Data extends object = any>({ children, className, ...props }: DataTableBodyProps) => React.ReactElement<DataTableBodyProps>;
declare type DataTableBodyRef = HTMLTableElement;
interface DataTableBodyProps extends BackyardBaseProps<DataTableBodyRef> {
}
export { DataTableBody };
export type { DataTableBodyProps, DataTableBodyRef };
export default DataTableBody;
