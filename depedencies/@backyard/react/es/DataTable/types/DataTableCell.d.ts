import type { UseGroupByCellProps, UseRowStateCellProps, CellProps, HeaderProps } from 'react-table';
export interface DataTableCell<D extends object = {}> extends UseGroupByCellProps<D>, UseRowStateCellProps<D> {
}
export declare type DataTableCellProps<D extends object = {}> = CellProps<D>;
export declare type DataTableBodyCellProps<D extends object = {}> = CellProps<D>;
export declare type DataTableHeaderCellProps<D extends object = {}> = HeaderProps<D>;
