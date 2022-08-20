"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToastWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _AlertBase = _interopRequireDefault(require("../../Alert/styles/AlertBase"));

var _Default = _interopRequireDefault(require("./variants/Default"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SizeOverrides = (0, _styledComponents.css)(["&.size{&--medium,&--standard{padding-top:var(--bds-sizes-size-4);padding-left:var(--bds-sizes-size-4);padding-right:var(--bds-sizes-size-4);padding-bottom:var(--bds-sizes-size-4);&.multiline{.toast{&-icon,&-body,&-close{padding-top:var(--bds-sizes-size-4);padding-bottom:0;}&-body{transform:translate(-1px,1px);}&-sub-body{transform:translate(0px,-1px);}&-action .link-label{transform:translate(-3px,-2px);}&-action,&-timestamp{padding-top:var(--bds-sizes-size-12);}&-close{transform:translate(4px,0);}}}.toast{&-subtitle{font-size:var(--bds-sizes-size-12);line-height:var(--bds-sizes-size-16);}&-action .link-label,&-timestamp{font-size:var(--bds-sizes-size-10);line-height:var(--bds-sizes-size-16);}}}&--jumbo{padding-left:var(--bds-sizes-size-10);padding-bottom:var(--bds-sizes-size-16);&.multiline{.alert,.toast{&-icon,&-body,&-close{padding-top:var(--bds-sizes-size-12);padding-bottom:var(--bds-sizes-size-6);}&-icon svg.icon{height:var(--bds-sizes-size-24);width:var(--bds-sizes-size-24);transform:translate(2px,8px);}&-title{font-size:var(--bds-sizes-size-28);line-height:var(--bds-sizes-size-40);}&-title + .alert-subtitle,&-title + .toast-subtitle{padding-top:var(--bds-sizes-size-4);}&-sub-body{padding-top:var(--bds-sizes-size-12);}&-action .link-label{transform:translate(-2px,0px);}&-close{margin-top:calc(-1 * var(--bds-sizes-size-12));transform:translate(8px,0px);}}}.alert,.toast{&-title,&-subtitle{font-size:var(--bds-sizes-size-20);line-height:var(--bds-sizes-size-32);}&-action .link-label,&-timestamp{font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}&-close{margin-left:var(--bds-sizes-size-12);}}}}"]);
var ToastOverrides = (0, _styledComponents.css)(["&&&{.toast{&-icon{margin-right:var(--bds-sizes-size-10);}&-action{a{text-decoration:none;text-decoration-color:var(--bds-color-border-interactive-inverse);&:hover{text-decoration:underline;}&:focus{text-decoration:underline;}}}}", "}"], SizeOverrides);

var ToastWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ToastWrapper",
  componentId: "sc-ng48o0-0"
})(["", " ", " ", ""], _AlertBase["default"], ToastOverrides, _Default["default"]);

exports.ToastWrapper = ToastWrapper;
var _default = ToastWrapper;
exports["default"] = _default;