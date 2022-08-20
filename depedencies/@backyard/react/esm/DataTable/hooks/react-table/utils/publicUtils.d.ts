import * as React from 'react';
export declare const actions: {
    init: string;
};
export declare const defaultRenderer: ({ value }: {
    value?: string;
}) => string;
export declare const emptyRenderer: () => JSX.Element;
export declare const defaultColumn: {
    Cell: ({ value }: {
        value?: string;
    }) => string;
    width: number;
    minWidth: number;
    maxWidth: number;
};
export declare const makePropGetter: (hooks: any, meta?: {}) => (userProps?: {}) => any;
export declare const reduceHooks: (hooks: any, initial: any, meta: {}, allowUndefined: any) => any;
export declare const loopHooks: (hooks: any, context: any, meta?: {}) => any;
export declare function ensurePluginOrder(plugins: any, befores: any, pluginName: any, afters: any): void;
export declare function functionalUpdate(updater: any, old: any): any;
export declare function useGetLatest(obj: any): () => undefined;
export declare const safeUseLayoutEffect: typeof React.useEffect;
export declare function useMountedLayoutEffect(fn: any, deps: any): void;
export declare function useAsyncDebounce(defaultFn: any, defaultWait?: number): (...args: any[]) => Promise<any>;
export declare function makeRenderer(instance: any, column: any, meta?: {}): (type: any, userProps?: {}) => any;
export declare function flexRender(Comp: any, props: any): any;
