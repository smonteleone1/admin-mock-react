var _br, _br2, _br3, _LocationOutlined, _br4, _br5, _ApiLink, _ApiLink2, _br6, _br7, _br8, _ApiLink3, _FormHeading, _br9;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean as _boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { LocationOutlined } from '@backyard/icons';
import { GridV3 as Grid, Tile, CardTile, RadioGroup, FormControl, Typography, TileSkeleton, FormHeading } from '../';
export default {
  title: '@backyard/react/Tile',
  decorators: [withKnobs]
};
var defaultTitle = "Mooresville Lowe's";

var defaultCaption = function defaultCaption() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, "509 River Highway", _br || (_br = /*#__PURE__*/React.createElement("br", null)), "Mooresville, NC", _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), "2.1 miles");
};

var filler = function filler() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultTitle;
  var caption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCaption;
  return /*#__PURE__*/React.createElement(Grid.Container, {
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
};

var colors = ['Color', {
  surface: 'surface',
  subdued: 'subdued'
}, 'surface'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var Card = function Card() {
  return /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(CardTile, {
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('disabled', false),
    id: "test2",
    className: 'test-class2'
  }, filler()), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
  })));
};
export var Link = function Link() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tile, {
    href: '#',
    variant: "link",
    disableIcon: _boolean('disableIcon', false),
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('disabled', false)
  }, filler()), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
  })));
};
export var Radio = function Radio() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Row, {
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
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes)
  }, filler("Huntersville Lowe's", function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Some Place", _br6 || (_br6 = /*#__PURE__*/React.createElement("br", null)), _br7 || (_br7 = /*#__PURE__*/React.createElement("br", null)), _br8 || (_br8 = /*#__PURE__*/React.createElement("br", null)), "Far Away");
  })), /*#__PURE__*/React.createElement(Tile, {
    variant: "radio",
    id: '2.1',
    value: '2.1',
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes)
  }, filler()), /*#__PURE__*/React.createElement(Tile, {
    variant: "radio",
    id: '3.1',
    value: '3.1',
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    disabled: true
  }, filler()))))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Tile Skeleton")), _br9 || (_br9 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TileSkeleton, {
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  })));
};