"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isCompatible = (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === 'object' && typeof window.matchMedia === 'function';
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
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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

var _default = useMediaQuery;
exports["default"] = _default;