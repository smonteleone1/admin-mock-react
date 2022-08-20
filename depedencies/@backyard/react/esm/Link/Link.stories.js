var _ApiLink, _ChevronLeft, _ApiLink2, _ChevronRight, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, Link, LinkSkeleton } from '../';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean as _boolean, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Link',
  decorators: [withKnobs]
};
var colors = ['Color', {
  interactive: 'interactive',
  primary: 'primary',
  inverse: 'inverse'
}, 'text_interactive'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
var underline = ['Underline', {
  never: 'never',
  hover: 'hover',
  always: 'always'
}, 'hover'];
export var DefaultLink = function DefaultLink() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Link, {
    bold: _boolean('Bold', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    underline: select.apply(void 0, underline),
    to: text('To', 'to'),
    onClick: action('link-click'),
    onKeyDown: action('link-key-down')
  }, text('Text', 'link text!')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
  })));
};
export var IconBeforeLink = function IconBeforeLink() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Link, {
    iconBefore: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null)),
    bold: _boolean('Bold', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    underline: select.apply(void 0, underline),
    to: text('To', 'to'),
    onClick: action('link-click'),
    onKeyDown: action('link-key-down')
  }, text('Text', 'link text!')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
  })));
};
export var IconAfterLink = function IconAfterLink() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Link, {
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
    bold: _boolean('Bold', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    underline: select.apply(void 0, underline),
    to: text('To', 'to'),
    onClick: action('link-click'),
    onKeyDown: action('link-key-down')
  }, text('Text', 'link text!')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(LinkSkeleton, {
    width: text('Width', '6rem'),
    animate: _boolean('Animate', false),
    size: select.apply(void 0, sizes)
  }));
};