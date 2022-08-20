"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RatingWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _RatingBase = _interopRequireDefault(require("./RatingBase"));

var _Interactive = _interopRequireDefault(require("./variants/Interactive"));

var _ReadOnly = _interopRequireDefault(require("./variants/ReadOnly"));

var RatingWrapper = _styledComponents["default"].span.withConfig({
  displayName: "RatingWrapper",
  componentId: "sc-1djcq5w-0"
})(["", " &.interactive{", "}&.read-only{", "}.rating-count{font-family:", ";font-weight:", ";}&&&&.size{&--small{.icon{height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);}.rating-item{height:var(--bds-sizes-size-16);}.rating-icon{margin:0;}.rating-count{padding-top:var(--bds-sizes-size-2);margin-left:var(--bds-sizes-size-8);font-size:var(--bds-sizes-size-12);line-height:var(--bds-sizes-size-16);}}&--medium{.icon{height:var(--bds-sizes-size-24);width:var(--bds-sizes-size-24);}.rating-item{height:var(--bds-sizes-size-24);}.rating-icon{margin:0 var(--bds-sizes-size-1);}.rating-count{padding-top:var(--bds-sizes-size-2);margin-left:var(--bds-sizes-size-10);font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-20);}}&--large{.icon{height:var(--bds-sizes-size-24);width:var(--bds-sizes-size-24);}.rating-item{height:var(--bds-sizes-size-24);}.rating-icon{margin:0 var(--bds-sizes-size-1);}.rating-count{padding-top:var(--bds-sizes-size-2);margin-left:var(--bds-sizes-size-10);font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}}&--jumbo{.icon{height:var(--bds-sizes-size-32);width:var(--bds-sizes-size-32);}.rating-item{height:var(--bds-sizes-size-32);}.rating-icon{margin:0 var(--bds-sizes-size-2);}.rating-count{padding-top:var(--bds-sizes-size-2);margin-left:var(--bds-sizes-size-12);font-size:var(--bds-sizes-size-20);line-height:var(--bds-sizes-size-28);}}}"], _RatingBase["default"], _Interactive["default"], _ReadOnly["default"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
});

exports.RatingWrapper = RatingWrapper;
var _default = RatingWrapper;
exports["default"] = _default;