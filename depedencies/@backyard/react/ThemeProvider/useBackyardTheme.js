"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateBackyardTheme = exports.useBackyardTheme = exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var validateBackyardTheme = function validateBackyardTheme(theme, name) {
  if (!(theme !== null && theme !== void 0 && theme.name)) {
    // eslint-disable-next-line no-console
    throw Error("Backyard: A Backyard component ".concat(name ? "(`".concat(name, "`)") : '', " is missing a Backyard Theme.\n") + 'This component uses Backyard tokens and a Backyard Theme is required.\n' + "Please wrap ".concat(name ? "`".concat(name, "` or") : '', " your entire application in a Backyard `ThemeProvider`.\n") + 'For a getting started guide, see \n' + '`https://stage.carbon.gcp.lowes.com/bds/documentation/GetStarted/Develop#create-theme-provider`');
  }

  return true;
};

exports.validateBackyardTheme = validateBackyardTheme;

var useBackyardTheme = function useBackyardTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$validate = props.validate,
      validate = _props$validate === void 0 ? false : _props$validate,
      name = props.name;
  var theme = React.useContext(_ThemeProvider.ThemeContext);

  if (validate && process.env.NODE_ENV !== 'production') {
    React.useEffect(function () {
      validateBackyardTheme(theme, name);
    }, [theme]);
  }

  return theme;
};

exports.useBackyardTheme = useBackyardTheme;
var _default = useBackyardTheme;
exports["default"] = _default;