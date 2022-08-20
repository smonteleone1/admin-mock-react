/**
 * Hook to use control the uncontrolled and controlled versions of
 * react component props such as `value or `defaultValue`
 *
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useControlled.js
 *
 * @param {any} arg.controlled - prop to get control from, if defined assumes controlled variant
 * @param {any} arg.default - default value of prop, if defined assumes uncontrolled
 * @param {any} arg.name - name of component path (used for debugging only)
 */
declare const useControlled: <T = unknown>({ controlled, default: defaultProp, name, }: UseControlledProps<T>) => [T, (newValue: T) => void];
interface UseControlledProps<T = unknown> {
    /**
     * This prop contains the component value when it's controlled.
     */
    controlled: T | undefined;
    /**
     * The default value when uncontrolled.
     */
    default: T | undefined;
    /**
     * The component name displayed in warnings.
     */
    name: string;
    /**
     * The name of the state variable displayed in warnings.
     */
    state?: string;
}
export { useControlled };
export type { UseControlledProps };
export default useControlled;
