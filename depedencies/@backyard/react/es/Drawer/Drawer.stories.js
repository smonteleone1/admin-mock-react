var _DrawerBody, _ApiLink, _Location, _DrawerBody2, _ApiLink2, _Location2, _DrawerBody3, _ApiLink3;

import * as React from 'react';
import { Button, GridV3 as Grid, DrawerController, Drawer, DrawerHeader, DrawerBody, DrawerFooter, Typography } from '../';
import Location from '@backyard/icons/LocationOutlined';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Drawer',
  decorators: [withKnobs]
};
const anchors = ['Anchor', {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left'
}, 'left'];
const orientations = ['Orientation', {
  vertical: 'vertical',
  horizontal: 'horizontal'
}, 'vertical'];
const sizes = ['Size', {
  auto: 'auto',
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'medium'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const DefaultDrawer = () => {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Drawer, {
    orientation: select(...orientations),
    size: select(...sizes),
    shape: select(...shapes)
  }, /*#__PURE__*/React.createElement(DrawerHeader, {
    label: text('Label', '')
  }, text('Header Label', 'Header Label')), _DrawerBody || (_DrawerBody = /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(Typography, null, "Hello"))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    fullWidth: boolean('Button full-width', false)
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    fullWidth: boolean('Button full-width', false)
  }, "Apply"))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};
export const IconDrawer = () => {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Drawer, {
    orientation: select(...orientations),
    shape: select(...shapes)
  }, /*#__PURE__*/React.createElement(DrawerHeader, {
    icon: _Location || (_Location = /*#__PURE__*/React.createElement(Location, null))
  }, text('Header Label', 'Header Label')), _DrawerBody2 || (_DrawerBody2 = /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(Typography, null, "Hello"))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    fullWidth: boolean('Button full-width', false)
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    fullWidth: boolean('Button full-width', false)
  }, "Apply"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};
export const DrawerControllerExample = () => {
  // React open state
  const [open, setOpen] = React.useState(false); // Clicking the button opens the modal

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setOpen(true)
  }, "Click Me"), /*#__PURE__*/React.createElement(DrawerController, {
    open: open,
    onClose: () => setOpen(false),
    onOpen: () => setOpen(true),
    anchor: select(...anchors),
    drawer: /*#__PURE__*/React.createElement(Drawer, {
      shape: select(...shapes)
    }, /*#__PURE__*/React.createElement(DrawerHeader, {
      icon: _Location2 || (_Location2 = /*#__PURE__*/React.createElement(Location, null))
    }, text('Header Label', 'Header Label')), _DrawerBody3 || (_DrawerBody3 = /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(Typography, null, "Body of the Drawer"))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "small",
      fullWidth: boolean('Button full-width', false)
    }, "Button"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "small",
      fullWidth: boolean('Button full-width', false)
    }, "Button")))
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Drawer"
  })));
};