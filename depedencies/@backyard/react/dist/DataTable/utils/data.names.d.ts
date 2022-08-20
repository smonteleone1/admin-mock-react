/// <reference types="react" />
export declare const columns: ({
    Header: string;
    accessor: string;
    filter: string;
    Cell: ({ cell }: {
        cell: any;
    }) => JSX.Element;
    width?: undefined;
    minWidth?: undefined;
    maxWidth?: undefined;
    Filter?: undefined;
} | {
    Header: string;
    accessor: string;
    filter: string;
    width: string;
    Cell?: undefined;
    minWidth?: undefined;
    maxWidth?: undefined;
    Filter?: undefined;
} | {
    Header: string;
    accessor: string;
    filter: string;
    minWidth: string;
    Cell?: undefined;
    width?: undefined;
    maxWidth?: undefined;
    Filter?: undefined;
} | {
    Header: string;
    accessor: string;
    filter: string;
    maxWidth: string;
    Cell?: undefined;
    width?: undefined;
    minWidth?: undefined;
    Filter?: undefined;
} | {
    Header: string;
    accessor: string;
    Filter: ({ column }: import("react-table").FilterProps<object>) => JSX.Element;
    filter: string;
    Cell?: undefined;
    width?: undefined;
    minWidth?: undefined;
    maxWidth?: undefined;
} | {
    Header: string;
    accessor: string;
    filter: string;
    Cell?: undefined;
    width?: undefined;
    minWidth?: undefined;
    maxWidth?: undefined;
    Filter?: undefined;
})[];
export declare const fifteen: ({
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
    subRows: JSX.Element[];
} | {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
    subRows?: undefined;
})[];
export declare type NamesDataType = typeof fifteen[0];
