import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import * as React from 'react';
var isCompatible = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && typeof window.matchMedia === 'function';
/**
 * Backyard React useMediaQuery Hook
 *
 * This hook utilizes the `window` `matchMedia` handler supported by all major browsers
 * This can be used to test whether or not the viewport is mobile, large, extra-large, etc.
 *
 * @param query - Media Query to use
 * @param defaultState - Default State (true or false) of whether or not media query passed
 */

var useMediaQuery = function useMediaQuery(query) {
  var defaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _React$useState = React.useState(isCompatible ? function () {
    return window.matchMedia(query).matches;
  } : defaultState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1]; // eslint-disable-next-line consistent-return


  React.useEffect(function () {
    if (isCompatible) {
      var mounted = true;
      var mediaQuery = window.matchMedia(query);

      var onChange = function onChange() {
        if (!mounted) {
          return;
        }

        setState(!!mediaQuery.matches);
      };

      mediaQuery.addListener(onChange);
      setState(mediaQuery.matches);
      return function () {
        mounted = false;
        mediaQuery.removeListener(onChange);
      };
    }
  }, [query]);
  return state;
};

export default useMediaQuery;