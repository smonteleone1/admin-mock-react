"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DrawerController = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ModalController = _interopRequireDefault(require("../ModalController"));

var _ThemeProvider = require("../ThemeProvider");

var _DrawerControllerBase = _interopRequireDefault(require("./styles/DrawerControllerBase"));

var _excluded = ["className", "anchor", "drawer", "style", "drawerStyle", "position"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Inherit from `ModalController`
var DrawerControllerWrapper = (0, _styledComponents["default"])(_ModalController["default"]).withConfig({
  displayName: "DrawerController__DrawerControllerWrapper",
  componentId: "sc-ijaxzq-0"
})(["", ""], _DrawerControllerBase["default"]); // Maps `DrawerController`'s `anchor` to `Drawer`'s `orientation`

var orientationMap = {
  top: 'horizontal',
  bottom: 'horizontal',
  left: 'vertical',
  right: 'vertical'
}; // Maps `DraweController`'s `anchor` to CSS Properties for positioning

var positionMap = {
  top: {
    top: '0'
  },
  bottom: {
    bottom: '0'
  },
  left: {
    left: '0'
  },
  right: {
    right: '0'
  }
};
/**
 * Backyard React Drawer Controller
 *
 * Extends from `DrawerHandler` to offer and cleaner API to work with
 *
 * Controls drawer defined in `drawer` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `DrawerHandler`
 *
 * Example:
 *  <DrawerController
 *      drawer={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */

var DrawerController = /*#__PURE__*/React.forwardRef(function DrawerController(_ref, ref) {
  var className = _ref.className,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? 'left' : _ref$anchor,
      drawerProp = _ref.drawer,
      styleProp = _ref.style,
      drawerStyleProp = _ref.drawerStyle,
      positionProp = _ref.position,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'DrawerController'
  }); // Memoize style prop

  var style = React.useMemo(function () {
    return (0, _extends2["default"])({
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.drawer
    }, styleProp);
  }, [theme.name, styleProp]); // Memoize modal style

  var drawerStyle = React.useMemo(function () {
    var _drawerProp$props;

    return (0, _extends2["default"])({
      position: 'fixed',
      zIndex: theme.zIndex.drawer + 1,
      transform: 'none'
    }, drawerProp === null || drawerProp === void 0 ? void 0 : (_drawerProp$props = drawerProp.props) === null || _drawerProp$props === void 0 ? void 0 : _drawerProp$props.style, drawerStyleProp);
  }, [theme.zIndex]); // Memoize modal render

  var drawer = React.useMemo(function () {
    return /*#__PURE__*/React.cloneElement(drawerProp, {
      style: drawerStyle
    });
  }, [drawerStyle]); // Memoize position on page

  var position = React.useMemo(function () {
    return positionProp || positionMap[anchor];
  }, [positionProp, anchor]); // Memoize context props

  var context = React.useMemo(function () {
    return {
      orientation: orientationMap[anchor]
    };
  }, [anchor]);
  /**
   * Layout:
   *  <DrawerHandler>
   *      ...
   *  </DrawerHandler>
   */

  return /*#__PURE__*/React.createElement(DrawerControllerWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])("drawer-controller anchor--".concat(anchor), className),
    modal: drawer,
    modalStyle: drawerStyle,
    position: position,
    context: context,
    style: style
  }, props, {
    ref: ref
  }));
});
exports.DrawerController = DrawerController;
DrawerController.bdsName = 'DrawerController';
var _default = DrawerController;
exports["default"] = _default;