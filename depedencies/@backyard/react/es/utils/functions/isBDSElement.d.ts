import * as React from 'react';
export interface StyledComponentProps {
    /**
     * Override or extend the styles applied to the component.
     */
    innerRef?: React.Ref<any>;
}
/**
 * Helper type for conform (describeConformance) components that are decorated with `withStyles
 * However, we don't declare classes on this type.
 * It is recommended to declare them manually with an interface so that each class can have a separate JSDOC.
 */
export declare type StandardProps<C, Removals extends keyof C = never> = Omit<C, Removals> & StyledComponentProps & {
    ref?: C extends {
        ref?: infer RefType;
    } ? RefType : React.Ref<unknown>;
    className?: string;
    style?: React.CSSProperties;
};
export declare type NamedBDSComponent = React.ComponentType & {
    bdsName: string;
};
export interface NamedBDSElement {
    type: NamedBDSComponent;
    props: StandardProps<{}>;
    key: string | number | null;
}
declare function isBDSElement(element: any, bdsNames: string[]): element is NamedBDSElement;
export { isBDSElement };
export default isBDSElement;
