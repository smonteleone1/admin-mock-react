import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _DrawerBody, _ApiLink, _Location, _DrawerBody2, _ApiLink2, _Location2, _DrawerBody3, _ApiLink3;

import * as React from 'react';
import { Button, GridV3 as Grid, DrawerController, Drawer, DrawerHeader, DrawerBody, DrawerFooter, Typography } from '../';
import Location from '@backyard/icons/LocationOutlined';
import { withKnobs, text, select, boolean as _boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Drawer',
  decorators: [withKnobs]
};
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
export var DefaultDrawer = function DefaultDrawer() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Drawer, {
    orientation: select.apply(void 0, orientations),
    size: select.apply(void 0, sizes),
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(DrawerHeader, {
    label: text('Label', '')
  }, text('Header Label', 'Header Label')), _DrawerBody || (_DrawerBody = /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(Typography, null, "Hello"))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    fullWidth: _boolean('Button full-width', false)
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    fullWidth: _boolean('Button full-width', false)
  }, "Apply"))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};
export var IconDrawer = function IconDrawer() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Drawer, {
    orientation: select.apply(void 0, orientations),
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(DrawerHeader, {
    icon: _Location || (_Location = /*#__PURE__*/React.createElement(Location, null))
  }, text('Header Label', 'Header Label')), _DrawerBody2 || (_DrawerBody2 = /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(Typography, null, "Hello"))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    fullWidth: _boolean('Button full-width', false)
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    fullWidth: _boolean('Button full-width', false)
  }, "Apply"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};
export var DrawerControllerExample = function DrawerControllerExample() {
  // React open state
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // Clicking the button opens the modal


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Click Me"), /*#__PURE__*/React.createElement(DrawerController, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    onOpen: function onOpen() {
      return setOpen(true);
    },
    anchor: select.apply(void 0, anchors),
    drawer: /*#__PURE__*/React.createElement(Drawer, {
      shape: select.apply(void 0, shapes)
    }, /*#__PURE__*/React.createElement(DrawerHeader, {
      icon: _Location2 || (_Location2 = /*#__PURE__*/React.createElement(Location, null))
    }, text('Header Label', 'Header Label')), _DrawerBody3 || (_DrawerBody3 = /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(Typography, null, "Body of the Drawer"))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "small",
      fullWidth: _boolean('Button full-width', false)
    }, "Button"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "small",
      fullWidth: _boolean('Button full-width', false)
    }, "Button")))
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};