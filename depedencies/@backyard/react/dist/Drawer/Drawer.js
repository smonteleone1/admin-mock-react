"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Drawer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _ThemeProvider = require("../ThemeProvider");

var _useDrawerController = _interopRequireDefault(require("../DrawerController/useDrawerController"));

var _DrawerBase = _interopRequireDefault(require("./style/DrawerBase"));

var _excluded = ["orientation", "children", "className", "size", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DrawerWrapper = (0, _styledComponents["default"])(_Modal["default"]).withConfig({
  displayName: "Drawer__DrawerWrapper",
  componentId: "sc-l9gdgh-0"
})(["", ""], _DrawerBase["default"]);
/**
 * Backyard React Drawer
 *
 * Barebones drawer component for styling and handling if extended
 *
 * This component contains only the styling for the modal component, not the logic for handling displaying the drawer
 *
 * The children of this component should be one of the three included modal components:
 *
 *  1) `DrawerHeader` (Required) - for the header of the component,
 *      containing the label, title, and an icon if desired
 *
 *  2) `DrawerBody` (Required) - for the body of the component,
 *      containing the body text and any additional components for the modal
 *
 *  3) `DrawerFooter` (Optional) - for the footer of the component,
 *      if any controls are needed for the modal, such as a 'cancel' button, or an action button
 *
 * Example:
 *  <Drawer>
 *      <DrawerHeader
 *          icon={<Settings />}
 *      >
 *          Modal Heading
 *      </DrawerHeader>
 *      <DrawerBody>
 *          Modal Body
 *      </DrawerBody>
 *      <DrawerFooter>
 *          <Button
 *              variant="secondary"
 *              color="contrast"
 *          >
 *              Cancel
 *          </Button>
 *          <Button>Action</Button>
 *      </DrawerFooter>
 *  </Drawer>
 *
 * For controlling this modal, or any other custom modal, use `ModalController`
 *
 *  <DrawerController
 *      modal={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */

var Drawer = /*#__PURE__*/React.forwardRef(function Drawer(_ref, ref) {
  var orientationProp = _ref.orientation,
      children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      shapeProp = _ref.shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Get modal context
  var _ref2 = (0, _useDrawerController["default"])() || {},
      orientationContext = _ref2.orientation; // Memoize calculated props


  var _React$useMemo = React.useMemo(function () {
    return {
      // Priority: 1. Prop -> 2. Context -> Default value ('vertical')
      orientation: orientationProp || orientationContext || 'vertical'
    };
  }, [orientationProp, orientationContext]),
      orientation = _React$useMemo.orientation; // Get Backyard Theme Context


  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Drawer'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Memoize `DrawerContext`

  var context = React.useMemo(function () {
    return {
      orientation: orientation
    };
  }, [orientation]);
  return /*#__PURE__*/React.createElement(DrawerWrapper, (0, _extends2["default"])({
    className: "drawer orientation--".concat(orientation, " size--").concat(size),
    shape: shape,
    size: size,
    context: context
  }, props, {
    ref: ref
  }), children);
});
exports.Drawer = Drawer;
Drawer.bdsName = 'Drawer';
var _default = Drawer;
exports["default"] = _default;