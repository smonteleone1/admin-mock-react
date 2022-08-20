var _ApiLink, _ApiLink2, _FormHeading, _br;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { Chip, GridV3 as Grid, FormGroup, FormControl, FormHeading, ChipSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Chip',
  decorators: [withKnobs]
};
const types = ['Variant', {
  choice: 'choice',
  filter: 'filter',
  input: 'input'
}, 'filter'];
export const DefaultChip = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Chip, {
  variant: select(...types) // checked={boolean('Checked', false)}
  ,
  defaultChecked: boolean('Default Checked', false),
  disabled: boolean('Disabled', false),
  subdued: boolean('Subdued', false),
  label: text('Label', 'Placeholder'),
  value: text('Value', 'value'),
  name: text('Name', 'name'),
  id: "chip",
  onChange: action('chip-changed'),
  onClick: action('chip-clicked'),
  onDelete: action('chip-deleted'),
  onKeyUp: action('chip-key-up'),
  onKeyDown: action('chip-key-down'),
  onFocus: action('chip-focused')
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Chip"
})));
export const FormGroupChips = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Chip, {
  id: "chipid1",
  variant: "choice",
  defaultChecked: boolean('Default Checked', false),
  disabled: boolean('Disabled', false),
  subdued: boolean('Subdued', false),
  label: text('Label', 'Placeholder'),
  name: text('Name', 'name'),
  value: text('Value', 'value'),
  onChange: action('chip-changed'),
  onClick: action('chip-clicked'),
  onDelete: action('chip-deleted'),
  onKeyUp: action('chip-key-up'),
  onKeyDown: action('chip-key-down'),
  onFocus: action('chip-focused')
}), /*#__PURE__*/React.createElement(Chip, {
  id: "chipid2",
  variant: "choice",
  defaultChecked: boolean('Default Checked', false),
  disabled: boolean('Disabled', false),
  subdued: boolean('Subdued', false),
  label: text('Label', 'label'),
  name: text('Name', 'name'),
  value: text('Value', 'value'),
  onChange: action('chip-changed'),
  onClick: action('chip-clicked'),
  onDelete: action('chip-deleted'),
  onKeyUp: action('chip-key-up'),
  onKeyDown: action('chip-key-down'),
  onFocus: action('chip-focused')
})), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Chip"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Chip Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ChipSkeleton, {
  animate: boolean('Animate', false)
})));