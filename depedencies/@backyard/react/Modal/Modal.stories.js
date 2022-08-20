"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalControllerExample = exports.DefaultModal = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _ModalFooter, _ApiLink, _ModalBody, _ApiLink2;

var _default = {
  title: '@backyard/react/Modal',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo',
  auto: 'auto',
  fullScreen: 'full-screen'
}, 'medium'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultModal = function DefaultModal() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Modal, {
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/_react["default"].createElement(_.ModalHeader, {
    label: (0, _addonKnobs.text)('Header Label', 'Header Label')
  }, (0, _addonKnobs.text)('Header Title', 'Header Title')), /*#__PURE__*/_react["default"].createElement(_.ModalBody, null, (0, _addonKnobs.text)('Modal Body', 'Modal Body')), _ModalFooter || (_ModalFooter = /*#__PURE__*/_react["default"].createElement(_.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "secondary",
    size: "small"
  }, "Button")))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Modal"
  })));
};

exports.DefaultModal = DefaultModal;

var ModalControllerExample = function ModalControllerExample() {
  // React open state
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // Clicking the button opens the modal


  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Click Me"), /*#__PURE__*/_react["default"].createElement(_.ModalController, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    onOpen: function onOpen() {
      return setOpen(true);
    },
    modal: /*#__PURE__*/_react["default"].createElement(_.Modal, {
      size: _addonKnobs.select.apply(void 0, sizes),
      shape: _addonKnobs.select.apply(void 0, shapes)
    }, /*#__PURE__*/_react["default"].createElement(_.ModalHeader, null, (0, _addonKnobs.text)('Header Label', 'Header Label')), _ModalBody || (_ModalBody = /*#__PURE__*/_react["default"].createElement(_.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Body of the Modal"))), /*#__PURE__*/_react["default"].createElement(_.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      variant: "secondary",
      size: "small",
      fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
    }, "Button"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      variant: "primary",
      size: "small",
      fullWidth: (0, _addonKnobs["boolean"])('Button full-width', false)
    }, "Button")))
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Modal"
  })));
};

exports.ModalControllerExample = ModalControllerExample;