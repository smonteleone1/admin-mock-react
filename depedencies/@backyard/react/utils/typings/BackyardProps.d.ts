/// <reference types="react" />
import Theme from '@backyard/design-tokens/v3/light/_theme';
declare type BackyardTheme = typeof Theme;
declare type BackyardOverrideProps = 'as';
interface BaseProps {
    as?: React.ElementType;
}
declare type OverrideTypes = string | number | symbol;
declare type BackyardBaseProps<T, O extends OverrideTypes = ''> = Omit<Omit<React.HTMLProps<T>, BackyardOverrideProps> & BaseProps, O>;
interface BackyardToken extends BackyardTheme {
}
export { BackyardBaseProps, BackyardOverrideProps, BackyardToken };
export default BackyardBaseProps;
