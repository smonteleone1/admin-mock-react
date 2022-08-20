/* eslint-disable import/prefer-default-export */

/**
 * Get the shape or shape context in priority
 *
 * @param shapeProp - shape value from props
 * @param shapeContext - shape value from context
 */
export const getShape = (shapeProp, shapeContext) => shapeProp || shapeContext;
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

export const splitShadows = (shadows, defaultShadow) => (shadows || defaultShadow).match(/[^ ,][0-9px ]+ rgba\([0-9,. ]+\)/g);
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

export const dropShadow = (shadow, defaultShadow = 'none') => // Split shadows from `box-shadow` input
splitShadows(shadow, defaultShadow) // Create separate drop shadow for CSS filter
.map(shadow => `drop-shadow(${shadow})`) // Join with space
.join(' ');