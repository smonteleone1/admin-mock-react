import * as React from 'react';
var useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

var runKeyHandler = function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
};

var useKeyDownHandler = function useKeyDownHandler(active, keyHandlers) {
  var keyHandlersRef = React.useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  return React.useCallback(function (e) {
    if (active) {
      runKeyHandler(e, keyHandlersRef.current);
    }
  }, [active]);
};

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
export { useIsomorphicEffect, runKeyHandler, useKeyDownHandler, useGlobalKeyDown, keycode };