"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getSpacing = function getSpacing(theme, spacing) {
  return theme.sizes[spacing] || spacing;
};

var FormGroupBase = (0, _styledComponents.css)(["display:flex;flex-wrap:wrap;"]);
var FormGroupDirection = (0, _styledComponents.css)(["&.direction{&--column{flex-direction:column;& > *{margin:", ";}}&--row{flex-direction:row;margin-left:-", ";& > *{margin:", ";}}}"], function (_ref) {
  var theme = _ref.theme,
      spacing = _ref.spacing;
  return "".concat(getSpacing(theme, spacing), " 0");
}, function (_ref2) {
  var theme = _ref2.theme,
      spacing = _ref2.spacing;
  return getSpacing(theme, spacing);
}, function (_ref3) {
  var theme = _ref3.theme,
      spacing = _ref3.spacing;
  return getSpacing(theme, spacing);
});

var FormGroupWrapper = _styledComponents["default"].div.withConfig({
  displayName: "FormGroupWrapper",
  componentId: "sc-aruewk-0"
})(["", " ", ""], FormGroupBase, FormGroupDirection);

var _default = FormGroupWrapper;
exports["default"] = _default;