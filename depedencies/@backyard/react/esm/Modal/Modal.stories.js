import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _ModalFooter, _ApiLink, _ModalBody, _ApiLink2;

import React from 'react';
import { withKnobs, text, select, boolean as _boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { Button, GridV3 as Grid, Modal, ModalHeader, ModalBody, ModalFooter, ModalController, Typography } from '../';
export default {
  title: '@backyard/react/Modal',
  decorators: [withKnobs]
};
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
export var DefaultModal = function DefaultModal() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/React.createElement(Modal, {
    size: select.apply(void 0, sizes),
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    label: text('Header Label', 'Header Label')
  }, text('Header Title', 'Header Title')), /*#__PURE__*/React.createElement(ModalBody, null, text('Modal Body', 'Modal Body')), _ModalFooter || (_ModalFooter = /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small"
  }, "Button")))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Modal"
  })));
};
export var ModalControllerExample = function ModalControllerExample() {
  // React open state
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // Clicking the button opens the modal


  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Click Me"), /*#__PURE__*/React.createElement(ModalController, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    onOpen: function onOpen() {
      return setOpen(true);
    },
    modal: /*#__PURE__*/React.createElement(Modal, {
      size: select.apply(void 0, sizes),
      shape: select.apply(void 0, shapes)
    }, /*#__PURE__*/React.createElement(ModalHeader, null, text('Header Label', 'Header Label')), _ModalBody || (_ModalBody = /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(Typography, null, "Body of the Modal"))), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "small",
      fullWidth: _boolean('Button full-width', false)
    }, "Button"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "small",
      fullWidth: _boolean('Button full-width', false)
    }, "Button")))
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Modal"
  })));
};