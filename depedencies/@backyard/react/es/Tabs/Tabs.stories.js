var _Tab, _Tab2, _Tab3, _Tab4, _Tab5, _ApiLink, _Tab6, _Tab7, _Tab8, _Tab9, _Tab10, _ApiLink2;

import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Tabs, Tab, Typography, TabsSkeleton, GridV3 as Grid } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Tabs',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const DefaultTab = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 5,
  end: 13
}, /*#__PURE__*/React.createElement(Tabs, {
  shape: select(...shapes),
  isOnLayer: boolean('On Layer', false),
  keepMounted: boolean('Keep Mounted', false)
}, _Tab || (_Tab = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-1",
  label: "Tab 1"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 1"))), _Tab2 || (_Tab2 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-2",
  label: "Tab 2"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 2"))), _Tab3 || (_Tab3 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-3",
  label: "Tab 3"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 3"))), _Tab4 || (_Tab4 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-4",
  label: "Tab 4"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 4"))), _Tab5 || (_Tab5 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-5",
  label: "Tab 5"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 5")))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tabs"
})));
export const DisabledTabs = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 5,
  end: 13
}, /*#__PURE__*/React.createElement(Tabs, {
  shape: select(...shapes),
  isOnLayer: boolean('On Layer', false),
  keepMounted: boolean('Keep Mounted', false)
}, _Tab6 || (_Tab6 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-1",
  label: "Tab 1"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 1"))), _Tab7 || (_Tab7 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-2",
  label: "Tab 2",
  disabled: true
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 2"))), _Tab8 || (_Tab8 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-3",
  label: "Tab 3"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 3"))), _Tab9 || (_Tab9 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-4",
  label: "Tab 4"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 4"))), _Tab10 || (_Tab10 = /*#__PURE__*/React.createElement(Tab, {
  id: "tab-5",
  label: "Tab 5"
}, /*#__PURE__*/React.createElement(Typography, null, "Hello world 5")))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tabs"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(TabsSkeleton, {
  width: text('width', '100%'),
  animate: boolean('Animate', false)
});