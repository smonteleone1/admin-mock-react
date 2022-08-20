var _ApiLink, _ApiLink2, _LocationOutlined, _ApiLink3, _LocationOutlined2, _Button, _LocationOutlined3, _Typography, _ApiLink4;

import { LocationOutlined } from '@backyard/icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Button, GridV3 as Grid, Tooltip, TooltipPopper, Typography } from '../';
const shadows = ['Shadow', {
  shadow_04: 'shadow_04',
  shadow_05: 'shadow_05'
}, 'shadow_04'];
const arrows = ['Arrow', {
  none: 'none',
  topStart: 'top-start',
  top: 'top',
  topEnd: 'top-end',
  left: 'left',
  right: 'right',
  bottomStart: 'bottom-start',
  bottom: 'bottom',
  bottomEnd: 'bottom-end'
}, 'top'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export default {
  title: '@backyard/react/Tooltip',
  decorators: [withKnobs]
};
export const LowContrastTooltip = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Tooltip, {
  title: text('Title', 'Title'),
  arrow: select(...arrows),
  invisible: boolean('Invisible', false),
  shadow: select(...shadows),
  shape: select(...shapes)
}, text('Text', 'Text')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
})));
export const HighContrastTooltip = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Tooltip, {
  variant: "high_contrast",
  title: text('Title', 'Title'),
  arrow: select(...arrows),
  invisible: boolean('Invisible', false),
  shadow: select(...shadows),
  shape: select(...shapes)
}, text('Text', 'Text')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
})));
export const TooltipWithIcon = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Tooltip, {
  variant: "high_contrast",
  icon: _LocationOutlined || (_LocationOutlined = /*#__PURE__*/React.createElement(LocationOutlined, null)),
  title: text('Title', 'Title'),
  arrow: select(...arrows),
  invisible: boolean('Invisible', false),
  shadow: select(...shadows),
  shape: select(...shapes)
}, text('Text', 'Text')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
})));
export const TooltipWithTooltipPopper = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(TooltipPopper, {
  tooltip: /*#__PURE__*/React.createElement(Tooltip, {
    variant: "high_contrast",
    icon: _LocationOutlined2 || (_LocationOutlined2 = /*#__PURE__*/React.createElement(LocationOutlined, null)),
    title: text('Title', 'Title'),
    arrow: select(...arrows),
    invisible: boolean('Invisible', false),
    shadow: select(...shadows),
    shape: select(...shapes)
  }, text('Text', 'Text'))
}, _Button || (_Button = /*#__PURE__*/React.createElement(Button, null, "Hover Me")))), /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(TooltipPopper, {
  tooltip: /*#__PURE__*/React.createElement(Tooltip, {
    variant: "high_contrast",
    icon: _LocationOutlined3 || (_LocationOutlined3 = /*#__PURE__*/React.createElement(LocationOutlined, null)),
    title: text('Title', 'Title'),
    arrow: select(...arrows),
    invisible: boolean('Invisible', false),
    shadow: select(...shadows),
    shape: select(...shapes)
  }, text('Text', 'Text'))
}, _Typography || (_Typography = /*#__PURE__*/React.createElement(Typography, {
  variant: "h1"
}, "Hover Me")))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
})));