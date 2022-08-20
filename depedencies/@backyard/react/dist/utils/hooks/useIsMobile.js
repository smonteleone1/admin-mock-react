"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _ThemeProvider = require("../../ThemeProvider");

var _useMediaQuery = _interopRequireDefault(require("./useMediaQuery"));

var useIsMobile = function useIsMobile(query) {
  var theme = (0, _react.useContext)(_ThemeProvider.ThemeContext);
  /**
      * Matchers for which device it is on
      */

  var isMobile = (0, _useMediaQuery["default"])("only screen and (max-width: ".concat(theme.grid.breakpoint.md.min, ")"));
  var isTablet = (0, _useMediaQuery["default"])("only screen and \n         (min-width: ".concat(theme.grid.breakpoint.md.min, ") and \n         (max-width: ").concat(theme.grid.breakpoint.lg.max, ")"));
  var isDesktop = (0, _useMediaQuery["default"])("only screen and (min-width: ".concat(query || theme.grid.breakpoint.xl.min, ")"));
  return {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isMobile: isMobile
  };
};

var _default = useIsMobile;
exports["default"] = _default;