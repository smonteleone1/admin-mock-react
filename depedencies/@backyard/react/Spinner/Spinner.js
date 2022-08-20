"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Spinner = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Loading = _interopRequireDefault(require("@backyard/icons/Loading"));

var _Overlay = _interopRequireDefault(require("../Overlay"));

var _ThemeProvider = require("../ThemeProvider");

var _SpinnerWrapper = _interopRequireDefault(require("./styles/SpinnerWrapper"));

var _excluded = ["className", "show", "small", "invisible", "inline", "color"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Spinner
 *
 * To be used when retrieving data or performing slow computations.
 * They notify to the user that their request is being processed.
 *
 * <Spinner show={true}
 *          color={'commerce'}
 *          invisible/>
 *
 * Loading spinners may be scaled down by adding the `inline` attribute if the loading experience is contextual
 * to a certain item on the page.
 *
 *  <Spinner
 *      show
 *      small
 *      inline
 *  />
 */
var Spinner = /*#__PURE__*/React.forwardRef(function Spinner(_ref, ref) {
  var className = _ref.className,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$invisible = _ref.invisible,
      invisible = _ref$invisible === void 0 ? false : _ref$invisible,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? inline ? 'interactive' : 'white' : _ref$color,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Spinner');
  /**
   * Builds out the spinner to either wrap the Loading icon with the Overlay if its not inline mode
   * or provides just the Loading icon if it is in inline mode
   */

  var spinner = inline ? /*#__PURE__*/React.createElement(_Loading["default"], {
    color: color
  }) : /*#__PURE__*/React.createElement(_Overlay["default"], {
    className: (0, _classnames["default"])('spinner-overlay', className),
    open: show,
    invisible: invisible
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-wrapper" + (small ? " size--small" : "")
  }, /*#__PURE__*/React.createElement(_Loading["default"], {
    color: color
  })));
  return /*#__PURE__*/React.createElement(_SpinnerWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(inline && 'inline-spinner', small && 'size--small'),
    show: show,
    small: small,
    ref: ref
  }, props), spinner);
});
exports.Spinner = Spinner;
Spinner.bdsName = 'Spinner';
var _default = Spinner;
exports["default"] = _default;