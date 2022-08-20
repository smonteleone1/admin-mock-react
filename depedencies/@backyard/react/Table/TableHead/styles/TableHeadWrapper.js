"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableHeadWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var TableHeadWrapper = _styledComponents["default"].thead.withConfig({
  displayName: "TableHeadWrapper",
  componentId: "sc-q5zl2c-0"
})(["border-bottom:1px solid var(--bds-color-border-subdued);h5{margin:0;}"]);

exports.TableHeadWrapper = TableHeadWrapper;
var _default = TableHeadWrapper;
exports["default"] = _default;