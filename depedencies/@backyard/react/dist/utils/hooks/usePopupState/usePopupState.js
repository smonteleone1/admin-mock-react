"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopupState = exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _state = require("./state");

var usePopupState = function usePopupState(_ref) {
  var parentPopupState = _ref.parentPopupState,
      popupId = _ref.popupId,
      variant = _ref.variant;

  var _useState = (0, _react.useState)(_state.initCoreState),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (popupId && (typeof document === "undefined" ? "undefined" : (0, _typeof2["default"])(document)) === 'object') {
      var popup = document.getElementById(popupId);
      if (popup) popup.focus();
    }
  }, [popupId, state.anchorEl]);
  return (0, _state.createPopupState)({
    state: state,
    setState: setState,
    parentPopupState: parentPopupState,
    popupId: popupId,
    variant: variant
  });
};

exports.usePopupState = usePopupState;
var _default = usePopupState;
exports["default"] = _default;