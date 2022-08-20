var _ListItem, _ListItem2, _ListItem3, _ListItem4, _ApiLink, _ListItem5, _ListItem6, _ListItem7, _ListItem8, _ApiLink2;

import React from 'react';
import { withKnobs, select, boolean as _boolean, number, text } from '@storybook/addon-knobs';
import { GridV3 as Grid, UnorderedList, ListItem, UnorderedListSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/UnorderedList',
  decorators: [withKnobs]
};
var densities = ['Density', {
  condensed: 'condensed',
  normal: 'normal',
  comfort: 'comfort'
}, 'normal'];
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(UnorderedList, {
    density: select.apply(void 0, densities)
  }, _ListItem || (_ListItem = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem2 || (_ListItem2 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem3 || (_ListItem3 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem4 || (_ListItem4 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing."))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/UnorderedList"
  })));
};
export var Nested = function Nested() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(UnorderedList, {
    density: select.apply(void 0, densities)
  }, _ListItem5 || (_ListItem5 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem6 || (_ListItem6 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem7 || (_ListItem7 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.", /*#__PURE__*/React.createElement(UnorderedList, null, /*#__PURE__*/React.createElement(ListItem, null, "Look at me, I'm nested and a slightly different color."), /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.", /*#__PURE__*/React.createElement(UnorderedList, null, /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing."), /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")))))), _ListItem8 || (_ListItem8 = /*#__PURE__*/React.createElement(ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing."))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/UnorderedList"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(UnorderedListSkeleton, {
    density: select.apply(void 0, densities),
    items: number('List items', 4),
    width: text('Width', '18.75rem'),
    animate: _boolean('Animate', false)
  }));
};