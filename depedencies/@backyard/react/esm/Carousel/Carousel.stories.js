var _CarouselItem, _CarouselItem2, _CarouselItem3, _CarouselItem4, _CarouselItem5, _CarouselItem6, _CarouselItem7, _CarouselItem8, _CarouselItem9, _CarouselItem10, _CarouselItem11, _CarouselItem12, _CarouselItem13, _CarouselItem14, _CarouselItem15, _CarouselItem16, _CarouselItem17, _CarouselItem18, _CarouselItem19, _CarouselItem20, _CarouselItem21, _CarouselItem22, _CarouselItem23, _CarouselItem24, _CarouselItem25, _CarouselItem26, _CarouselItem27, _ApiLink, _FormHeading, _br;

import * as React from 'react';
import styled from 'styled-components';
import { boolean as _boolean, number, withKnobs } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { Button, Carousel, CarouselItem, GridV3 as Grid, Typography, FormControl, FormHeading, CarouselSkeleton } from '../';
export default {
  title: '@backyard/react/Carousel',
  decorators: [withKnobs]
};
var Block = styled.div.withConfig({
  displayName: "Carouselstories__Block",
  componentId: "sc-nvzlsn-0"
})(["height:8rem;width:", ";background-color:#d2d2d2;"], function (_ref) {
  var width = _ref.width;
  return width ? "".concat(width, "rem") : "2.5rem";
});
export var DefaultCarousel = function DefaultCarousel() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12,
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    style: {
      marginTop: '1rem',
      paddingBottom: '1rem'
    }
  }, "Carousel Example"), /*#__PURE__*/React.createElement(Carousel, {
    noScrollbar: _boolean('No Scrollbar', false),
    noButtons: _boolean('No Buttons', false),
    scrollDistance: number('Scroll Distance', 100)
  }, _CarouselItem || (_CarouselItem = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem2 || (_CarouselItem2 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 4
  }))), _CarouselItem3 || (_CarouselItem3 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 8
  }))), _CarouselItem4 || (_CarouselItem4 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem5 || (_CarouselItem5 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 4
  }))), _CarouselItem6 || (_CarouselItem6 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem7 || (_CarouselItem7 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 1
  }))), _CarouselItem8 || (_CarouselItem8 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem9 || (_CarouselItem9 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem10 || (_CarouselItem10 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 3
  }))), _CarouselItem11 || (_CarouselItem11 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 6
  }))), _CarouselItem12 || (_CarouselItem12 = /*#__PURE__*/React.createElement(CarouselItem, null, /*#__PURE__*/React.createElement(Block, null)))))), /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    style: {
      marginTop: '1rem',
      paddingBottom: '1rem'
    }
  }, "Button Carousel Example"), /*#__PURE__*/React.createElement(Carousel, {
    noScrollbar: _boolean('No Scrollbar', false),
    noButtons: _boolean('No Buttons', false),
    scrollDistance: number('Scroll Distance', 100)
  }, _CarouselItem13 || (_CarouselItem13 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 1"))), _CarouselItem14 || (_CarouselItem14 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 2"))), _CarouselItem15 || (_CarouselItem15 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 3"))), _CarouselItem16 || (_CarouselItem16 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 4"))), _CarouselItem17 || (_CarouselItem17 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 5"))), _CarouselItem18 || (_CarouselItem18 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 6"))), _CarouselItem19 || (_CarouselItem19 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 7"))), _CarouselItem20 || (_CarouselItem20 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 8"))), _CarouselItem21 || (_CarouselItem21 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 9"))), _CarouselItem22 || (_CarouselItem22 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 10"))), _CarouselItem23 || (_CarouselItem23 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 11"))), _CarouselItem24 || (_CarouselItem24 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 12"))), _CarouselItem25 || (_CarouselItem25 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 13"))), _CarouselItem26 || (_CarouselItem26 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 14"))), _CarouselItem27 || (_CarouselItem27 = /*#__PURE__*/React.createElement(CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(Button, null, "Button 15")))))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Carousel"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Carousel Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(CarouselSkeleton, {
    animate: _boolean('Animate', false),
    hideButtons: _boolean('Hide Buttons', false),
    hideScrollbar: _boolean('Hide Scrollbar', false)
  })));
};