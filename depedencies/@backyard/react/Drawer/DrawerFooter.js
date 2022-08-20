"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DrawerFooter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ModalFooter = _interopRequireDefault(require("../Modal/ModalFooter"));

var _useDrawer = _interopRequireDefault(require("./useDrawer"));

var _excluded = ["children", "className", "orientation"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DrawerFooterWrapper = (0, _styledComponents["default"])(_ModalFooter["default"]).withConfig({
  displayName: "DrawerFooter__DrawerFooterWrapper",
  componentId: "sc-18cc4le-0"
})([""]);
/**
 * Backyard React Drawer Footer
 *
 * Component to use as child of `Drawer`
 *
 * Should contain the primary actions of the drawer,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <DrawerFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </DrawerFooter>
 */

var DrawerFooter = /*#__PURE__*/React.forwardRef(function DrawerFooter(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      orientationProp = _ref.orientation,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Get drawer context
  var _ref2 = (0, _useDrawer["default"])() || {},
      orientationContext = _ref2.orientation; // Memoize calculated props


  var _React$useMemo = React.useMemo(function () {
    return {
      orientation: orientationProp || orientationContext || 'horizontal'
    };
  }, [orientationProp, orientationContext]),
      orientation = _React$useMemo.orientation;

  return /*#__PURE__*/React.createElement(DrawerFooterWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('drawer-footer', className),
    orientation: orientation
  }, props, {
    ref: ref
  }), children);
});
exports.DrawerFooter = DrawerFooter;
DrawerFooter.bdsName = 'DrawerFooter';
var _default = DrawerFooter;
exports["default"] = _default;