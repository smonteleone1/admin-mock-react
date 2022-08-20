"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DrawerHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ModalHeader = _interopRequireDefault(require("../Modal/ModalHeader"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DrawerHeaderWrapper = (0, _styledComponents["default"])(_ModalHeader["default"]).withConfig({
  displayName: "DrawerHeader__DrawerHeaderWrapper",
  componentId: "sc-tydeby-0"
})([""]);
/**
 * Backyard React Drawer Header
 *
 * Component to use as a child of `Drawer`
 *
 * Should contain the text for the title of the drawer
 *
 * Example:
 *  <DrawerHeader
 *      icon={<Settings />}
 *  >
 *      Drawer Header
 *  </DrawerHeader>
 */

var DrawerHeader = /*#__PURE__*/React.forwardRef(function DrawerHeader(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(DrawerHeaderWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('drawer-header', className)
  }, props, {
    ref: ref
  }), children);
});
exports.DrawerHeader = DrawerHeader;
DrawerHeader.bdsName = 'DrawerHeader';
var _default = DrawerHeader;
exports["default"] = _default;