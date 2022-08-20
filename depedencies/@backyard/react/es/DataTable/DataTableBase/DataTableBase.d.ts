import * as React from 'react';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
/**
 * Backyard React Data Table Base
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 */
declare const DataTableBase: <Data extends object = any>({ children, className, height, style, ...props }: DataTableBaseProps) => React.ReactElement<DataTableBaseProps>;
declare type DataTableBaseRef = HTMLDivElement;
declare type DataTableBaseOverrideProps = 'data';
interface DataTableBaseProps extends BackyardBaseProps<DataTableBaseRef, DataTableBaseOverrideProps> {
}
export { DataTableBase };
export type { DataTableBaseProps, DataTableBaseRef };
export default DataTableBase;
