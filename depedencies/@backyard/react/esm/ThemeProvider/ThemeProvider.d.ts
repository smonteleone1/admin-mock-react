import * as React from 'react';
import type Theme from '@backyard/design-tokens/v3/light/_theme';
import { BDSFunctional } from '../utils/typings/BDSComponentProps';
declare type BaseTheme = typeof Theme;
/**
 * ThemeContext same as 'styled-components'
 */
declare const ThemeContext: React.Context<BackyardTheme>;
/**
 * ThemeConsumer same as 'styled-components'
 */
declare const ThemeConsumer: React.Consumer<BackyardTheme>;
/**
 * Backyard React Theme Provider
 *
 *  <ThemeProvider theme="light" font="fellix" someOtherContext="value">
 *      <Grid.Container>
 *          ...
 *              <Button />
 *          ...
 *      </Grid.Container>
 *  </ThemeProvider>
 *
 * Custom Theme Provider wrapper to provide extra context and overrides for Backyard Themes.
 */
declare const ThemeProvider: BDSFunctional<ThemeProviderProps>;
interface BackyardThemeContext {
    /**
     * Default font contexts
     */
    font: string;
    heading: string;
    paragraph: string;
    article: string;
    caption: string;
    link: string;
    /**
     * Default canvas color
     */
    canvas: keyof BackyardTheme['color'];
    /**
     * Default shape context
     */
    shape: 'rounded' | 'squared';
    [key: string]: any;
}
interface BackyardTheme extends BaseTheme {
    /**
     * Context can be any object
     */
    context: BackyardThemeContext;
    /**
     * Whether or not current viewport is desktop, tablet, or mobile
     */
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
    /**
     * Record of breakpoints provided to application
     */
    breakpoints: Record<string, string>;
    /**
     * `setTheme` dispatch to change the theme state of the the Backyard theme
     */
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    /**
     * `setOverride` dispatch to change the overrides of the Backyard theme
     */
    setOverride: React.Dispatch<React.SetStateAction<object>>;
    /**
     * `setContext` dispatch to change the context of the Backyard theme
     * Can store anything such as the font, heading, etc.
     */
    setContext: (newContext: any) => void;
    /**
     * Name of the current theme
     */
    name: 'light' | 'dark' | string;
}
interface ThemeProviderProps {
    /**
     * React Children
     */
    children: React.ReactNode;
    /**
     * Selected Theme
     */
    theme?: 'light' | 'dark';
    /**
     * Selected font
     */
    font?: 'fellix' | 'roboto';
    /**
     * Default shape of all components
     */
    shape?: 'rounded' | 'squared';
    /**
     * Canvas color token
     */
    canvas?: keyof BackyardTheme['color'];
    /**
     * Overrides to override Backyard theme with
     */
    override?: object;
    /**
     * Extra Context to be made available to child 'styled-components'
     * ex. font
     */
    context?: object;
}
export { ThemeProvider, ThemeContext, ThemeConsumer };
export type { BaseTheme, BackyardTheme, ThemeProviderProps };
export default ThemeProvider;
