var _TableHead, _TableBody, _ApiLink, _TableBody2, _ApiLink2;

import { select, boolean as _boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { GridV3 as Grid, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Table',
  decorators: [withKnobs]
};
var variants = ['Variant', {
  outlined: 'outlined',
  filled: 'filled'
}, 'outlined'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultTable = function DefaultTable() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Table, {
    shape: select.apply(void 0, shapes),
    rightRule: _boolean('rightRule', true),
    variant: "filled"
  }, _TableHead || (_TableHead = /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHeader, null, "Description Name That is Kinda Really Long"), /*#__PURE__*/React.createElement(TableHeader, null, "Item 1"), /*#__PURE__*/React.createElement(TableHeader, null, "Item 2")))), _TableBody || (_TableBody = /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Description"), /*#__PURE__*/React.createElement(TableCell, null, "Specification"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Description"), /*#__PURE__*/React.createElement(TableCell, {
    info: "hello world"
  }, "Specification"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Description"), /*#__PURE__*/React.createElement(TableCell, null, "Specification"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Description"), /*#__PURE__*/React.createElement(TableCell, null, "Specification"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")))))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Table"
  })));
};
export var Specification = function Specification() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Table, {
    shape: select.apply(void 0, shapes),
    variant: "outlined"
  }, _TableBody2 || (_TableBody2 = /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHeader, null, "Too Long of a Description Name That Just Keeps On Going and Going and Going"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHeader, null, "Description"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHeader, {
    info: "bonjour le monde"
  }, "Description"), /*#__PURE__*/React.createElement(TableCell, null, "Specification Speci ficat ion Specif ication Sp ecific ati on Specification Specification Specification", ' ')), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHeader, null, "Description"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHeader, null, "Description that's kinda long"), /*#__PURE__*/React.createElement(TableCell, null, "Specification")))))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Table"
  })));
};