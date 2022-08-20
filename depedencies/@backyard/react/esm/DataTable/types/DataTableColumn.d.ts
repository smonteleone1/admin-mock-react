import type { Column, ColumnGroup, ColumnInterfaceBasedOnValue, UseFiltersColumnOptions, UseFiltersColumnProps, UseGlobalFiltersColumnOptions, UseGroupByColumnOptions, UseGroupByColumnProps, UseResizeColumnsColumnOptions, UseResizeColumnsColumnProps, UseSortByColumnOptions, UseSortByColumnProps, UseTableColumnOptions, UseTableColumnProps } from 'react-table';
export interface DataTableColumnInterfaceExtended<D extends object = {}> extends ColumnInterfaceBasedOnValue<D>, UseTableColumnOptions<D>, UseFiltersColumnOptions<D>, UseGlobalFiltersColumnOptions<D>, UseGroupByColumnOptions<D>, UseResizeColumnsColumnOptions<D>, UseSortByColumnOptions<D> {
}
export declare type DataTableColumnWidths<D extends object = {}> = {
    totalWidth?: UseTableColumnProps<D>['totalWidth'];
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    Wrapper?: any;
};
export declare type DataTableColumnInterfaceOverride = 'minWidth' | 'maxWidth';
export interface DataTableColumnInterface<D extends object = {}> extends Omit<DataTableColumnInterfaceExtended, DataTableColumnInterfaceOverride>, DataTableColumnWidths<D> {
}
export declare type ColumnExtended<D extends object = {}> = Omit<Column<D>, DataTableColumnInterfaceOverride> & DataTableColumnWidths<D>;
export interface DataTableColumnInstance<D extends object = {}> extends UseFiltersColumnProps<D>, UseGroupByColumnProps<D>, UseResizeColumnsColumnProps<D>, UseSortByColumnProps<D> {
}
export declare type DataTableColumn<D extends object = {}> = ColumnExtended<D> & DataTableColumnInterface<D>;
export declare type DataTableColumnGroup<D extends object = {}> = ColumnGroup<D> & DataTableColumnInterface<D>;
