var _ApiLink;

import React from 'react';
import { GridV3 as Grid, Switch, SwitchSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean as _boolean, text, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Switch',
  decorators: [withKnobs]
};
var sizes = ['Size', {
  small: 'small',
  large: 'large'
}, 'large'];
export var DefaultSwitch = function DefaultSwitch() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Switch, {
    id: "default-switch",
    disabled: _boolean('Disabled', false),
    defaultChecked: _boolean('Default Checked', false),
    size: select.apply(void 0, sizes),
    name: text('Value', 'default-radio'),
    value: text('Value', 'value'),
    onChange: action('switch-change')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Switch"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(SwitchSkeleton, {
    size: "large",
    withLabel: _boolean('withLabel', false),
    animate: _boolean('Animate', false)
  });
};