"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for multiselect
 * @param children - children `Option`s for multiselect
 */
var getOptions = function getOptions(options) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (// If options are defined,
    (options === null || options === void 0 ? void 0 : options.length) > 0 ? // Then use options format
    options : // Else, map children props to `options` format
    children ? React.Children.map(children, // If child is an option group or list option group,
    function (child) {
      var _type, _child$props;

      return ['OptionGroup', 'ListOptionGroup'].includes((_type = child.type) === null || _type === void 0 ? void 0 : _type.bdsName) // Recursively add option levels
      ? (0, _extends2["default"])({}, child === null || child === void 0 ? void 0 : child.props, {
        options: getOptions([], child.props.children)
      }) // Else, just add option
      : (0, _extends2["default"])({}, child === null || child === void 0 ? void 0 : child.props, {
        label: child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children
      });
    }) : []
  );
};

exports.getOptions = getOptions;
var _default = getOptions;
exports["default"] = _default;