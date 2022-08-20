var _ApiLink;

import React from 'react';
import { GridV3 as Grid, Switch, SwitchSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Switch',
  decorators: [withKnobs]
};
const sizes = ['Size', {
  small: 'small',
  large: 'large'
}, 'large'];
export const DefaultSwitch = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Switch, {
  id: "default-switch",
  disabled: boolean('Disabled', false),
  defaultChecked: boolean('Default Checked', false),
  size: select(...sizes),
  name: text('Value', 'default-radio'),
  value: text('Value', 'value'),
  onChange: action('switch-change')
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Switch"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(SwitchSkeleton, {
  size: "large",
  withLabel: boolean('withLabel', false),
  animate: boolean('Animate', false)
});