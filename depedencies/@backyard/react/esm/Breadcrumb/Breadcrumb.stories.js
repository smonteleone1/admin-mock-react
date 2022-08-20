var _ApiLink;

import React from 'react';
import { Breadcrumb, GridV3 as Grid, BreadcrumbSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Breadcrumb',
  decorators: [withKnobs]
};
var renders = ['Render', {
  auto: 'auto',
  desktop: 'desktop',
  mobile: 'mobile'
}, 'auto'];
export var DefaultBreadcrumb = function DefaultBreadcrumb() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    render: select.apply(void 0, renders),
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
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
    render: select.apply(void 0, renders),
    width: text('Width', '15rem'),
    animate: _boolean('Animate', false)
  }));
};