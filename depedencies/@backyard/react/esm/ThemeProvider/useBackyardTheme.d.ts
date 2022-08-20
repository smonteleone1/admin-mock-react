import type { BackyardTheme } from './ThemeProvider';
declare const validateBackyardTheme: (theme: BackyardTheme, name: BackyardTheme['name']) => boolean;
declare const useBackyardTheme: (props?: UseBackyardThemeProps) => BackyardTheme;
interface UseBackyardThemeProps {
    /**
     * Whether or not to validate component
     */
    validate?: boolean;
    /**
     * Name of the component to validate
     */
    name?: string;
}
export { useBackyardTheme, validateBackyardTheme };
export default useBackyardTheme;
