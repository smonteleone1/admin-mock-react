"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IconDrawer = exports.DrawerControllerExample = exports.DefaultDrawer = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _ = require("../");

var _LocationOutlined = _interopRequireDefault(require("@backyard/icons/LocationOutlined"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _DrawerBody, _ApiLink, _Location, _DrawerBody2, _ApiLink2, _Location2, _DrawerBody3, _ApiLink3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: '@backyard/react/Drawer',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var anchors = ['Anchor', {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left'
}, 'left'];
var orientations = ['Orientation', {
  vertical: 'vertical',
  horizontal: 'horizontal'
}, 'vertical'];
var sizes = ['Size', {
  auto: 'auto',
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'medium'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultDrawer = function DefaultDrawer() {
  return /*#__PURE__*/React.createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(_.Drawer, {
    orientation: _addonKnobs.select.apply(void 0, orientations),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(_.DrawerHeader, {
    label: (0, _addonKnobs.text)('Label', '')
  }, (0, _addonKnobs.text)('Header Label', 'Header Label')), _DrawerBody || (_DrawerBody = /*#__PURE__*/React.createElement(_.DrawerBody, null, /*#__PURE__*/React.createElement(_.Typography, null, "Hello"))), /*#__PURE__*/React.createElement(_.DrawerFooter, null, /*#__PURE__*/React.createElement(_.Button, {
    variant: "secondary",
    size: "small",
    fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
  }, "Close"), /*#__PURE__*/React.createElement(_.Button, {
    variant: "primary",
    size: "small",
    fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
  }, "Apply"))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};

exports.DefaultDrawer = DefaultDrawer;

var IconDrawer = function IconDrawer() {
  return /*#__PURE__*/React.createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(_.Drawer, {
    orientation: _addonKnobs.select.apply(void 0, orientations),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(_.DrawerHeader, {
    icon: _Location || (_Location = /*#__PURE__*/React.createElement(_LocationOutlined["default"], null))
  }, (0, _addonKnobs.text)('Header Label', 'Header Label')), _DrawerBody2 || (_DrawerBody2 = /*#__PURE__*/React.createElement(_.DrawerBody, null, /*#__PURE__*/React.createElement(_.Typography, null, "Hello"))), /*#__PURE__*/React.createElement(_.DrawerFooter, null, /*#__PURE__*/React.createElement(_.Button, {
    variant: "secondary",
    size: "small",
    fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
  }, "Close"), /*#__PURE__*/React.createElement(_.Button, {
    variant: "primary",
    size: "small",
    fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
  }, "Apply"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};

exports.IconDrawer = IconDrawer;

var DrawerControllerExample = function DrawerControllerExample() {
  // React open state
  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // Clicking the button opens the modal


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Click Me"), /*#__PURE__*/React.createElement(_.DrawerController, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    onOpen: function onOpen() {
      return setOpen(true);
    },
    anchor: _addonKnobs.select.apply(void 0, anchors),
    drawer: /*#__PURE__*/React.createElement(_.Drawer, {
      shape: _addonKnobs.select.apply(void 0, shapes)
    }, /*#__PURE__*/React.createElement(_.DrawerHeader, {
      icon: _Location2 || (_Location2 = /*#__PURE__*/React.createElement(_LocationOutlined["default"], null))
    }, (0, _addonKnobs.text)('Header Label', 'Header Label')), _DrawerBody3 || (_DrawerBody3 = /*#__PURE__*/React.createElement(_.DrawerBody, null, /*#__PURE__*/React.createElement(_.Typography, null, "Body of the Drawer"))), /*#__PURE__*/React.createElement(_.DrawerFooter, null, /*#__PURE__*/React.createElement(_.Button, {
      variant: "secondary",
      size: "small",
      fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
    }, "Button"), /*#__PURE__*/React.createElement(_.Button, {
      variant: "primary",
      size: "small",
      fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
    }, "Button")))
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};

exports.DrawerControllerExample = DrawerControllerExample;