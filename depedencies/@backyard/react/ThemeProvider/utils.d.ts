import type { ValueOf } from '../utils/typings';
import type { BackyardTheme } from './ThemeProvider';
declare type ExtendedShapes = BackyardTheme['context']['shape'] | 'circle' | 'custom';
/**
 * Get the shape or shape context in priority
 *
 * @param shapeProp - shape value from props
 * @param shapeContext - shape value from context
 */
export declare const getShape: (shapeProp: ExtendedShapes, shapeContext: BackyardTheme['context']['shape']) => "rounded" | "squared";
/**
 * Split the shadows in a given string
 *
 * @example
 * ```
 * splitShadows('0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)')
 *  => [
 *      '0px 2px 1px rgba(0, 0, 0, 0.2)',
 *      '0px 1px 1px rgba(0, 0, 0, 0.14)',
 *      '0px 1px 3px rgba(0, 0, 0, 0.12)'
 *  ]
 * ```
 *
 * @param shadows - shadow string from backyard
 * @param defaultShadow - default shadow if none given
 * @returns
 */
export declare const splitShadows: (shadows: ValueOf<BackyardTheme['shadows']>, defaultShadow: ValueOf<BackyardTheme['shadows']>) => string[];
/**
 * Converts box-shadow to drop-shadow, if necessary.
 *
 * Use for `filter` css instead of `box-shadow`.
 *
 * @example
 * ```
 * dropShadow(theme.shadows.shadow_04)
 *  => 'drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2))
 *          drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14))
 *          drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12))'
 * ```
 * @param shadow - box-shadow
 * @param defaultShadow - default shadow if none given
 * @returns
 */
export declare const dropShadow: (shadow: ValueOf<BackyardTheme['shadows']>, defaultShadow?: ValueOf<BackyardTheme['shadows']>) => string;
export {};
