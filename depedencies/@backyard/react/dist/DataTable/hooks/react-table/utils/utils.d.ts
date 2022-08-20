export declare function findMaxDepth(columns: any, depth?: number): any;
export declare function linkColumnStructure(columns: any, parent: any, depth?: number): any;
export declare function flattenColumns(columns: any): any[];
export declare function assignColumnAccessor(column: any): any;
export declare function decorateColumn(column: any, userDefaultColumn: any): any;
export declare function makeHeaderGroups(allColumns: any, defaultColumn: any, additionalHeaderProperties?: () => {}): any[];
export declare function getBy(obj: any, path: any, def: any): any;
export declare function getFirstDefined(...args: any[]): any;
export declare function getElementDimensions(element: any): {
    left: number;
    width: number;
    outerWidth: number;
    marginLeft: number;
    marginRight: number;
    paddingLeft: number;
    paddingRight: number;
    scrollWidth: any;
};
export declare function isFunction(a: any): any;
export declare function flattenBy(arr: any, key: any): any[];
export declare function expandRows(rows: any, { manualExpandedKey, expanded, expandSubRows }: {
    manualExpandedKey: any;
    expanded: any;
    expandSubRows?: boolean;
}): any[];
export declare function getFilterMethod(filter: any, userFilterTypes: any, filterTypes: any): any;
export declare function shouldAutoRemoveFilter(autoRemove: any, value: any, column: any): any;
export declare function unpreparedAccessWarning(): void;
export declare function passiveEventSupported(): any;
