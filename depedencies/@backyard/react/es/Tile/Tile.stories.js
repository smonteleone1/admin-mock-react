var _br, _br2, _br3, _LocationOutlined, _br4, _br5, _ApiLink, _ApiLink2, _br6, _br7, _br8, _ApiLink3, _FormHeading, _br9;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { LocationOutlined } from '@backyard/icons';
import { GridV3 as Grid, Tile, CardTile, RadioGroup, FormControl, Typography, TileSkeleton, FormHeading } from '../';
export default {
  title: '@backyard/react/Tile',
  decorators: [withKnobs]
};
const defaultTitle = "Mooresville Lowe's";

const defaultCaption = () => /*#__PURE__*/React.createElement(React.Fragment, null, "509 River Highway", _br || (_br = /*#__PURE__*/React.createElement("br", null)), "Mooresville, NC", _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), "2.1 miles");

const filler = (title = defaultTitle, caption = defaultCaption) => /*#__PURE__*/React.createElement(Grid.Container, {
  style: {
    width: '20rem',
    padding: '1rem 0.5rem'
  }
}, /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, {
  start: 1,
  end: 3,
  style: {
    paddingLeft: '0.5rem'
  }
}, _LocationOutlined || (_LocationOutlined = /*#__PURE__*/React.createElement(LocationOutlined, {
  size: "size_24"
}))), /*#__PURE__*/React.createElement(Grid.Column, {
  start: 3,
  end: 17
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h4",
  style: {
    margin: '0px'
  }
}, title), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), _br5 || (_br5 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Typography, {
  variant: "body_1"
}, caption()))));

const colors = ['Color', {
  surface: 'surface',
  subdued: 'subdued'
}, 'surface'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const Card = () => /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(CardTile, {
  color: select(...colors),
  shape: select(...shapes),
  disabled: boolean('disabled', false),
  id: "test2",
  className: 'test-class2'
}, filler()), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
})));
export const Link = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tile, {
  href: '#',
  variant: "link",
  disableIcon: boolean('disableIcon', false),
  color: select(...colors),
  shape: select(...shapes),
  disabled: boolean('disabled', false)
}, filler()), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
})));
export const Radio = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Row, {
  style: {
    marginBottom: '1rem'
  }
}, /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(RadioGroup, {
  name: 'test',
  direction: 'row',
  defaultValue: '2.1',
  onChange: action('onChange (RadioGroup)')
}, /*#__PURE__*/React.createElement(Tile, {
  id: '1.1',
  className: 'test',
  variant: "radio",
  value: '1.1',
  color: select(...colors),
  shape: select(...shapes)
}, filler("Huntersville Lowe's", () => /*#__PURE__*/React.createElement(React.Fragment, null, "Some Place", _br6 || (_br6 = /*#__PURE__*/React.createElement("br", null)), _br7 || (_br7 = /*#__PURE__*/React.createElement("br", null)), _br8 || (_br8 = /*#__PURE__*/React.createElement("br", null)), "Far Away"))), /*#__PURE__*/React.createElement(Tile, {
  variant: "radio",
  id: '2.1',
  value: '2.1',
  color: select(...colors),
  shape: select(...shapes)
}, filler()), /*#__PURE__*/React.createElement(Tile, {
  variant: "radio",
  id: '3.1',
  value: '3.1',
  color: select(...colors),
  shape: select(...shapes),
  disabled: true
}, filler()))))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Tile Skeleton")), _br9 || (_br9 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TileSkeleton, {
  shape: select(...shapes),
  animate: boolean('Animate', false)
})));