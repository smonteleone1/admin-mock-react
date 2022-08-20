var _ApiLink, _ApiLink2, _LocationOutlined, _ApiLink3, _LocationOutlined2, _Button, _LocationOutlined3, _Typography, _ApiLink4;

import { LocationOutlined } from '@backyard/icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { boolean as _boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Button, GridV3 as Grid, Tooltip, TooltipPopper, Typography } from '../';
var shadows = ['Shadow', {
  shadow_04: 'shadow_04',
  shadow_05: 'shadow_05'
}, 'shadow_04'];
var arrows = ['Arrow', {
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
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export default {
  title: '@backyard/react/Tooltip',
  decorators: [withKnobs]
};
export var LowContrastTooltip = function LowContrastTooltip() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: text('Title', 'Title'),
    arrow: select.apply(void 0, arrows),
    invisible: _boolean('Invisible', false),
    shadow: select.apply(void 0, shadows),
    shape: select.apply(void 0, shapes)
  }, text('Text', 'Text')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};
export var HighContrastTooltip = function HighContrastTooltip() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Tooltip, {
    variant: "high_contrast",
    title: text('Title', 'Title'),
    arrow: select.apply(void 0, arrows),
    invisible: _boolean('Invisible', false),
    shadow: select.apply(void 0, shadows),
    shape: select.apply(void 0, shapes)
  }, text('Text', 'Text')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};
export var TooltipWithIcon = function TooltipWithIcon() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Tooltip, {
    variant: "high_contrast",
    icon: _LocationOutlined || (_LocationOutlined = /*#__PURE__*/React.createElement(LocationOutlined, null)),
    title: text('Title', 'Title'),
    arrow: select.apply(void 0, arrows),
    invisible: _boolean('Invisible', false),
    shadow: select.apply(void 0, shadows),
    shape: select.apply(void 0, shapes)
  }, text('Text', 'Text')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};
export var TooltipWithTooltipPopper = function TooltipWithTooltipPopper() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TooltipPopper, {
    tooltip: /*#__PURE__*/React.createElement(Tooltip, {
      variant: "high_contrast",
      icon: _LocationOutlined2 || (_LocationOutlined2 = /*#__PURE__*/React.createElement(LocationOutlined, null)),
      title: text('Title', 'Title'),
      arrow: select.apply(void 0, arrows),
      invisible: _boolean('Invisible', false),
      shadow: select.apply(void 0, shadows),
      shape: select.apply(void 0, shapes)
    }, text('Text', 'Text'))
  }, _Button || (_Button = /*#__PURE__*/React.createElement(Button, null, "Hover Me")))), /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TooltipPopper, {
    tooltip: /*#__PURE__*/React.createElement(Tooltip, {
      variant: "high_contrast",
      icon: _LocationOutlined3 || (_LocationOutlined3 = /*#__PURE__*/React.createElement(LocationOutlined, null)),
      title: text('Title', 'Title'),
      arrow: select.apply(void 0, arrows),
      invisible: _boolean('Invisible', false),
      shadow: select.apply(void 0, shadows),
      shape: select.apply(void 0, shapes)
    }, text('Text', 'Text'))
  }, _Typography || (_Typography = /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Hover Me")))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};