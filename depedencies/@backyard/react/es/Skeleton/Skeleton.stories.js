var _Grid$Column, _Grid$Column2, _Grid$Column3, _Skeleton, _ApiLink;

import React from 'react';
import { GridV3 as Grid } from '../';
import { Skeleton } from './';
import { withKnobs } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Skeleton',
  decorators: [withKnobs]
};
export const Text = () => _Grid$Column || (_Grid$Column = /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "text"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "text"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "text"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "text"
}), /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
})));
export const Rect = () => _Grid$Column2 || (_Grid$Column2 = /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  height: "size_64",
  width: "size_128"
}), /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
})));
export const Circle = () => _Grid$Column3 || (_Grid$Column3 = /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "circle",
  height: "size_128",
  width: "size_128"
}), /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
})));
export const Animate = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "text",
  animate: true,
  style: {
    marginBottom: '16px',
    width: '16rem'
  }
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  height: "size_64",
  width: "16rem",
  animate: true,
  style: {
    marginBottom: '16px'
  }
}), _Skeleton || (_Skeleton = /*#__PURE__*/React.createElement(Skeleton, {
  variant: "circle",
  height: "size_64",
  width: "size_64",
  animate: true
})), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
})));