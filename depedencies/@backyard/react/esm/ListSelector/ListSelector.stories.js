var _ApiLink, _ApiLink2, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, List, ListOption } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean as _boolean, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/List',
  decorators: [withKnobs]
};
var sizes = ['Size', {
  condensed: 'condensed',
  normal: 'normal'
}, 'normal'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultListSelector = function DefaultListSelector() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(List, {
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(ListOption, {
    size: select.apply(void 0, sizes)
  }, "List Item"), /*#__PURE__*/React.createElement(ListOption, {
    size: select.apply(void 0, sizes)
  }, "List Item"), /*#__PURE__*/React.createElement(ListOption, {
    size: select.apply(void 0, sizes)
  }, "List Item")), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/List"
  })));
};
export var ListSelectorOptions = function ListSelectorOptions() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(List, {
    disabled: _boolean('Disabled', false),
    shape: select.apply(void 0, shapes),
    defaultValue: text('Default Value', undefined),
    label: text('Label', 'label'),
    value: text('Value', undefined),
    onChange: action('onChange'),
    options: [{
      label: 'List Item 1',
      value: '1'
    }, {
      label: 'List Item 2',
      value: '2'
    }, {
      label: 'List Item 3',
      value: '3'
    }]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/List"
  })));
};
export var ListSelectorMultiple = function ListSelectorMultiple() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(List, {
    multiple: true,
    disabled: _boolean('Disabled', false),
    shape: select.apply(void 0, shapes),
    defaultValue: text('Default Value', undefined),
    label: text('Label', 'label'),
    value: text('Value', undefined),
    onChange: action('onChange'),
    options: [{
      label: 'List Item 1',
      value: '1'
    }, {
      label: 'List Item 2',
      value: '2'
    }, {
      label: 'List Item 3',
      value: '3'
    }]
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/List"
  })));
};