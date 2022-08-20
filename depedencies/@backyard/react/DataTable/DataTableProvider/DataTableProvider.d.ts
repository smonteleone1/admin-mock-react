import * as React from 'react';
import { Column } from 'react-table';
import type { IdType, PluginHook } from 'react-table';
import type { DataTableInstance, DataTableOptions, DataTableState, DataTableColumn, DataTableRow } from '../types';
import { MenuItemProps } from '../../MenuItem';
/**
 * DataTable Context
 */
declare const DataTableContext: React.Context<DataTableContextValues<any>>;
/**
 * DataTable Consumer
 */
declare const DataTableConsumer: React.Consumer<DataTableContextValues<any>>;
/**
 * Backyard React Data Table Provider
 *
 * Provides values to children and handles state management of the `DataTable`.
 */
declare const DataTableProvider: <Data extends object = {}>({ children, columns: columnsProp, data, enableSortBy, enableRowSelection, enableRowExpansion, enableFilters, enableSearch, enableZebraStripes, disableFooter, disableFuzzyHighlight, disableScrollbar, inverseHeader, globalFilter, filters, sortBy, pageIndex, pageSize, rowsPerPageOptions, initialState, options, plugins, filterTypes: filterTypesProp, defaultColumn: defaultColumnProp, selectedRowIds, expanded, menuItems, showToolbar, showFilters: showFiltersProp, showSearch: showSearchProp, toolbar, size, shape: shapeProp, onSelect, onTableUpdate, ...override }: DataTableProviderProps<Data>) => React.ReactElement<DataTableProviderProps<Data>, string | React.JSXElementConstructor<any>>;
declare type ColumnWidths<Data extends object> = {
    width?: DataTableColumn<Data>['width'];
    minWidth?: DataTableColumn<Data>['minWidth'];
    maxWidth?: DataTableColumn<Data>['maxWidth'];
    totalWidth?: DataTableColumn<Data>['totalWidth'];
};
declare type DataTableProviderOverrideProps = 'columns' | 'enableSearch' | 'enableFilters' | 'showToolbar';
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(DataTableContext)`
 */
interface DataTableContextValues<Data extends object> extends DataTableInstance<Data> {
    enableSortBy: DataTableProviderProps<Data>['enableSortBy'];
    enableRowSelection: DataTableProviderProps<Data>['enableRowSelection'];
    enableRowExpansion: DataTableProviderProps<Data>['enableRowExpansion'];
    enableZebraStripes: DataTableProviderProps<Data>['enableZebraStripes'];
    disableFooter: DataTableProviderProps<Data>['disableFooter'];
    disableFuzzyHighlight: DataTableProviderProps<Data>['disableFuzzyHighlight'];
    disableScrollbar: DataTableProviderProps<Data>['disableScrollbar'];
    inverseHeader: DataTableProviderProps<Data>['inverseHeader'];
    toolbar: DataTableProviderProps<Data>['toolbar'];
    rowsPerPageOptions: DataTableProviderProps<Data>['rowsPerPageOptions'];
    selectedRowIds: DataTableProviderProps<Data>['selectedRowIds'];
    expanded: DataTableProviderProps<Data>['expanded'];
    pageIndex: DataTableProviderProps<Data>['pageIndex'];
    pageSize: DataTableProviderProps<Data>['pageSize'];
    onSelect?: DataTableProviderProps<Data>['onSelect'];
    getColumnWidths?: (column: Column<Data>) => ColumnWidths<Data>;
    size: DataTableProviderProps<Data>['size'];
    shape: DataTableProviderProps<Data>['shape'];
    /**
     * `react-table` options
     */
    options: DataTableProviderProps<Data>['options'];
    /**
     * Enables the filter toggle switch
     */
    enableFilters: boolean;
    /**
     * Enables the search toggle switch
     */
    enableSearch: boolean;
    /**
     * The menu items data structure
     */
    menuItems: MenuItemProps[];
    /**
     * Show the filters for the table.
     */
    showFilters: boolean;
    /**
     * Show the search for the table.
     */
    showSearch: boolean;
    /**
     * Enables the toolbar to be visible
     */
    showToolbar: boolean;
    /**
     * Sets the value for the showFilters property.
     */
    setShowFilters: (boolean: any) => void;
    /**
     * Sets the value for the showSearch property.
     */
    setShowSearch: (boolean: any) => void;
}
interface TableEventInfo<Data extends object = {}> {
    table: DataTableInstance<Data>;
    state: DataTableState<Data>;
    ids: Record<IdType<Data>, boolean>;
    rows: DataTableRow<Data>[];
    selected: DataTableRow<Data>[];
    unselected: DataTableRow<Data>[];
}
interface DataTableProviderProps<Data extends object = {}> extends Omit<DataTableOptions<Data>, DataTableProviderOverrideProps> {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode;
    columns: Array<DataTableColumn<Data> | {
        Header?: string;
        accessor?: string;
    }>;
    data: Data[];
    enableSortBy?: boolean;
    enableRowExpansion?: boolean;
    enableRowSelection?: boolean;
    enableZebraStripes?: boolean;
    disableFooter?: boolean;
    disableFuzzyHighlight?: boolean;
    disableScrollbar?: boolean;
    globalFilter?: DataTableState<Data>['globalFilter'];
    filters?: DataTableState<Data>['filters'];
    sortBy?: DataTableState<Data>['sortBy'];
    inverseHeader?: boolean;
    rowsPerPageOptions?: number[];
    options?: Partial<DataTableOptions<Data>>;
    initialState?: Partial<DataTableState<Data>>;
    plugins?: PluginHook<Data>[];
    defaultColumn?: Partial<DataTableColumn<Data>>;
    filterTypes?: Record<string, any>;
    selectedRowIds?: Record<IdType<Data>, boolean>;
    expanded?: Record<IdType<Data>, boolean>;
    pageIndex?: number;
    pageSize?: number;
    showSearch?: boolean;
    showFilters?: boolean;
    onSelect?: (info: TableEventInfo<Data>) => void;
    onTableUpdate?: (table: DataTableInstance<Data>) => void;
    /**
     * Enables the filter toggle switch
     */
    enableFilters?: boolean;
    /**
     * Enables the search toggle switch
     */
    enableSearch?: boolean;
    /**
     * The menu items data structure
     */
    menuItems?: MenuItemProps[];
    /**
     * Enables the toolbar to be visible
     */
    showToolbar?: boolean;
    /**
     * Size of each cell
     */
    size?: 'small' | 'medium' | 'large' | 'custom';
    /**
     * Shape of the whole table
     */
    shape?: 'rounded' | 'squared';
    /**
     * Override props for `DataTableProvider` to either override current functionality
     * or provide new context to children.
     */
    override?: object;
}
export { DataTableProvider, DataTableContext, DataTableConsumer };
export type { DataTableContextValues, DataTableProviderProps };
export default DataTableProvider;
