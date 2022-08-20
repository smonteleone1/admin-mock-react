"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyDownHandler = exports.useIsomorphicEffect = exports.useGlobalKeyDown = exports.runKeyHandler = exports.keycode = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
exports.useIsomorphicEffect = useIsomorphicEffect;

var runKeyHandler = function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
};

exports.runKeyHandler = runKeyHandler;

var useKeyDownHandler = function useKeyDownHandler(active, keyHandlers) {
  var keyHandlersRef = React.useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  return React.useCallback(function (e) {
    if (active) {
      runKeyHandler(e, keyHandlersRef.current);
    }
  }, [active]);
};

exports.useKeyDownHandler = useKeyDownHandler;

var useGlobalKeyDown = function useGlobalKeyDown(active, keyHandlers) {
  var keyHandlersRef = React.useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers; // eslint-disable-next-line consistent-return

  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
};

exports.useGlobalKeyDown = useGlobalKeyDown;
var keycode = {
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  Enter: 13,
  Home: 36,
  End: 35,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  Esc: 27
};
exports.keycode = keycode;