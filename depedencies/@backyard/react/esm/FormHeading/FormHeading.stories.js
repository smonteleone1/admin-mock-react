var _ApiLink;

import React from 'react';
import { GridV3 as Grid, FormHeading } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/FormHeading',
  decorators: [withKnobs]
};
export var DefaultFormHeading = function DefaultFormHeading() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormHeading, null, text('Text', 'text')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FormHeading"
  })));
};