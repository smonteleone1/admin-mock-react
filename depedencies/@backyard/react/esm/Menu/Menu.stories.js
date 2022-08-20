var _MenuItem, _MenuItem2, _MenuItem3, _MenuItem4, _ApiLink, _MenuItem5, _MenuItem6, _MenuItem7, _MenuItem8, _SubMenu, _ApiLink2;

import React from 'react';
import { GridV3 as Grid, Menu, MenuItem, SubMenu } from '../';
import { HomeOutlined, NotesOutlined, DocumentOutlined, TrashOutlined } from '@backyard/icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Menu',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultMenu = function DefaultMenu() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Menu, {
    width: "15rem",
    shape: select.apply(void 0, shapes)
  }, _MenuItem || (_MenuItem = /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item")), _MenuItem2 || (_MenuItem2 = /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item")), _MenuItem3 || (_MenuItem3 = /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item")), _MenuItem4 || (_MenuItem4 = /*#__PURE__*/React.createElement(MenuItem, {
    color: "red"
  }, "Menu Item"))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Menu"
  })));
};
export var WithSubMenu = function WithSubMenu() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Menu, {
    shape: select.apply(void 0, shapes),
    width: "15rem"
  }, _MenuItem5 || (_MenuItem5 = /*#__PURE__*/React.createElement(MenuItem, {
    color: "interactive",
    iconBefore: /*#__PURE__*/React.createElement(HomeOutlined, null)
  }, "Menu Item")), _MenuItem6 || (_MenuItem6 = /*#__PURE__*/React.createElement(MenuItem, {
    iconBefore: /*#__PURE__*/React.createElement(NotesOutlined, null)
  }, "Menu Item")), _MenuItem7 || (_MenuItem7 = /*#__PURE__*/React.createElement(MenuItem, {
    iconBefore: /*#__PURE__*/React.createElement(DocumentOutlined, null)
  }, "Menu Item")), _MenuItem8 || (_MenuItem8 = /*#__PURE__*/React.createElement(MenuItem, {
    color: "red",
    iconBefore: /*#__PURE__*/React.createElement(TrashOutlined, null)
  }, "Menu Item")), _SubMenu || (_SubMenu = /*#__PURE__*/React.createElement(SubMenu, {
    label: "More Options",
    listenHover: true
  }, /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
    color: "red"
  }, "Menu Item")))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Menu"
  })));
};