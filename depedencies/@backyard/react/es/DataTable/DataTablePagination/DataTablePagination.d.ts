import * as React from 'react';
import { PaginationProps } from '../../Pagination';
import BackyardBaseProps from '../../utils/typings/BackyardProps';
declare const DataTablePagination: <Data extends object = any>({ rowsPerPageOptions, size, onChange, paginationProps, }: DataTablePaginationProps) => React.ReactElement<DataTablePaginationProps>;
declare type DataPaginationRef = HTMLDivElement;
declare type DataTableOverrideProps = 'size' | 'onChange';
interface DataTablePaginationProps extends BackyardBaseProps<DataPaginationRef, DataTableOverrideProps> {
    /**
     * An array of items per page options.
     */
    rowsPerPageOptions?: number[];
    /**
     * Footer sizes.
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * The onChange function.
     */
    onChange?: (event: React.ChangeEvent, page: number) => void;
    /**
     * Props for the pagination component.
     */
    paginationProps?: PaginationProps;
}
export { DataTablePagination };
export type { DataTablePaginationProps };
export default DataTablePagination;
