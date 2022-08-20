/// <reference types="react" />
import type { RootObject as BackyardTheme } from '@backyard/design-tokens/v2/light/theme';
declare type BackyardOverrideProps = 'as';
interface BaseProps {
    as?: React.ElementType;
}
declare type BackyardBaseProps<T, O extends keyof any = ''> = Omit<Omit<React.HTMLProps<T>, BackyardOverrideProps> & BaseProps, O>;
interface BackyardToken extends BackyardTheme {
}
export { BackyardBaseProps, BackyardOverrideProps, BackyardToken };
export default BackyardBaseProps;
