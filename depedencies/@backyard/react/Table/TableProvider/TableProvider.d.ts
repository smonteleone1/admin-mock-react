import * as React from 'react';
import type { TableProps } from '../Table';
/**
 * Table Context
 */
declare const TableContext: React.Context<TableContextValues>;
/**
 * Table Consumer
 */
declare const TableConsumer: React.Consumer<TableContextValues>;
/**
 * Backyard React Table Provider
 *
 * Provides values to children and handles state management of the `Table`.
 */
declare const TableProvider: ({ children, shape: shapeProp, ...override }: TableProviderProps) => React.ReactElement<TableProviderProps>;
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(TableContext)`
 */
interface TableContextValues {
    /**
     * Shape of the table
     */
    shape?: TableProps['shape'];
}
interface TableProviderProps {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode;
    /**
     * Shape of the table edges
     */
    shape?: TableProps['shape'];
}
export { TableProvider, TableContext, TableConsumer };
export type { TableContextValues, TableProviderProps };
export default TableProvider;
