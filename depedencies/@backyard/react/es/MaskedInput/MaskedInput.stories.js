import React from 'react';
import { GridV3 as Grid, MaskedInput } from '../';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
export default {
  title: '@backyard/react/MaskedInput',
  decorators: [withKnobs]
};
export const Phone = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(MaskedInput, {
  id: "phone",
  mask: "phone",
  label: "Phone number",
  onChange: action('masked-input-change'),
  autoComplete: "tel-national"
}));
export const Currency = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(MaskedInput, {
  id: "currency",
  mask: "currency",
  label: "Payment amount",
  onChange: action('masked-input-change')
}));