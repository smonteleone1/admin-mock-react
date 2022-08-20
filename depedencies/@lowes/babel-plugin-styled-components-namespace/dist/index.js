"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _namespace = _interopRequireDefault(require("./visitors/namespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var t = _ref.types;
  return {
    visitor: {
      CallExpression(path, state) {
        (0, _namespace.default)(t)(path, state);
      },

      TaggedTemplateExpression(path, state) {
        (0, _namespace.default)(t)(path, state);
      }

    }
  };
}