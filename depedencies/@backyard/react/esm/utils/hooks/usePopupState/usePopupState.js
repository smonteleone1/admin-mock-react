import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useRef, useEffect } from 'react';
import { initCoreState, createPopupState } from './state';

var usePopupState = function usePopupState(_ref) {
  var parentPopupState = _ref.parentPopupState,
      popupId = _ref.popupId,
      variant = _ref.variant;

  var _useState = useState(initCoreState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isMounted = useRef(true);
  useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  useEffect(function () {
    if (popupId && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object') {
      var popup = document.getElementById(popupId);
      if (popup) popup.focus();
    }
  }, [popupId, state.anchorEl]);
  return createPopupState({
    state: state,
    setState: setState,
    parentPopupState: parentPopupState,
    popupId: popupId,
    variant: variant
  });
};

export { usePopupState };
export default usePopupState;