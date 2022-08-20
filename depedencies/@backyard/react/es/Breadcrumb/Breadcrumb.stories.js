var _ApiLink;

import React from 'react';
import { Breadcrumb, GridV3 as Grid, BreadcrumbSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Breadcrumb',
  decorators: [withKnobs]
};
const renders = ['Render', {
  auto: 'auto',
  desktop: 'desktop',
  mobile: 'mobile'
}, 'auto'];
export const DefaultBreadcrumb = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Breadcrumb, {
  render: select(...renders),
  crumbs: [{
    label: text('First Crumb', 'Appliances')
  }, {
    label: text('Second Crumb', 'Refrigerators')
  }, {
    label: text('Third Crumb', 'French Door Refrigerators')
  }]
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Breadcrumb"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
  render: select(...renders),
  width: text('Width', '15rem'),
  animate: boolean('Animate', false)
}));