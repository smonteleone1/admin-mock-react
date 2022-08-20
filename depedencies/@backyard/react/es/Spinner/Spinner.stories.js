var _ApiLink, _br, _br2, _br3, _br4, _ApiLink2;

import React from 'react';
import { GridV3 as Grid, Spinner, Button } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, boolean,
/*text,*/
select } from '@storybook/addon-knobs'; // import type { BackyardTheme } from '../ThemeProvider'

export default {
  title: '@backyard/react/Spinner',
  decorators: [withKnobs]
};
const colors = ['Color', {
  interactive: 'icon_interactive',
  green: 'icon_green',
  white: 'icon_solid_inverse'
}, 'white'];
export const DefaultSpinner = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Spinner, {
  show: boolean('show', true),
  small: boolean('small', false),
  invisible: boolean('invisible', false) // @todo tokens
  // color={select(...colors) as keyof BackyardTheme['color']}
  ,
  className: 'test-classname'
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Spinner"
})));
export const InlineSpinner = () => /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement("div", null, "Default inline spinner (no provided color)", /*#__PURE__*/React.createElement(Spinner, {
  show: boolean('show', true),
  small: boolean('small', true),
  inline: true
})), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", null, "Inline spinner with text (with provided color)", /*#__PURE__*/React.createElement(Spinner, {
  show: boolean('show', true) // @todo tokens
  // color={text('spinner color', 'error') as keyof BackyardTheme['color']}
  ,
  small: boolean('small', true),
  inline: true
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Button, null, "Button", /*#__PURE__*/React.createElement(Spinner, {
  show: boolean('show', true),
  small: boolean('small', true),
  inline: true,
  color: select(...colors)
})), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Button, {
  variant: 'secondary'
}, "Button", /*#__PURE__*/React.createElement(Spinner, {
  show: boolean('show', true),
  small: boolean('small', true),
  inline: true,
  color: select(...colors)
}))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Spinner"
})));