var _ApiLink, _ApiLink2, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, Pagination } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Pagination',
  decorators: [withKnobs]
};
const sizes = ['Size', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const NumberedPagination = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Pagination, {
  size: select(...sizes),
  shape: select(...shapes),
  count: number('Count', 5),
  defaultPage: number('Default Page', 1),
  boundaryCount: number('Boundary Count', 2),
  siblingCount: number('Sibling Count', 0),
  hidePrevButton: boolean('Hide Prev Button', false),
  hideNextButton: boolean('Hide Next Button', false)
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pagination"
})));
export const EllipsisExample = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Pagination, {
  size: select(...sizes),
  shape: select(...shapes),
  count: number('Count', 8),
  defaultPage: number('Default Page', 1),
  boundaryCount: number('Boundary Count', 1),
  siblingCount: number('Sibling Count', 1),
  hidePrevButton: boolean('Hide Prev Button', false),
  hideNextButton: boolean('Hide Next Button', false)
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pagination"
})));
export const DottedPagination = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Pagination, {
  variant: "dotted",
  size: select(...sizes),
  shape: select(...shapes),
  count: number('Count', 5),
  defaultPage: number('Default Page', 1),
  boundaryCount: number('Boundary Count', 2),
  siblingCount: number('Sibling Count', 0),
  hidePrevButton: boolean('Hide Prev Button', false),
  hideNextButton: boolean('Hide Next Button', false)
}), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pagination"
})));