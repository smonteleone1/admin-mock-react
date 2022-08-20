/**
 * Backyard React useMediaQuery Hook
 *
 * This hook utilizes the `window` `matchMedia` handler supported by all major browsers
 * This can be used to test whether or not the viewport is mobile, large, extra-large, etc.
 *
 * @param query - Media Query to use
 * @param defaultState - Default State (true or false) of whether or not media query passed
 */
declare const useMediaQuery: (query: string, defaultState?: boolean) => boolean;
export default useMediaQuery;
