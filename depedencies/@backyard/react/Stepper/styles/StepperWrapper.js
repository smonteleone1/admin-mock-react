"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StepperWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StepperBase = _interopRequireDefault(require("./StepperBase"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shared = (0, _styledComponents.css)(["div.stepper--fields{input:disabled{cursor:not-allowed;}&.disabled + label{color:var(--bds-color-text-disabled);}}"]);

var StepperWrapper = _styledComponents["default"].div.withConfig({
  displayName: "StepperWrapper",
  componentId: "sc-rxhh78-0"
})(["", " &&&{", "}"], _StepperBase["default"], Shared);

exports.StepperWrapper = StepperWrapper;
var _default = StepperWrapper;
exports["default"] = _default;