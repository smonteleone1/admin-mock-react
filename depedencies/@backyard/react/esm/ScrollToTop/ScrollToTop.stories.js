import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var _Button, _Grid$Column, _Button2, _Grid$Column2, _Button3, _Grid$Column3, _Button4, _ApiLink, _Grid$Column4, _Grid$Column5, _ApiLink2;

import { boolean as _boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import styled from 'styled-components';
import { Button, GridV3 as Grid, ScrollToTop, Typography } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/ScrollToTop',
  decorators: [withKnobs]
};
var FillerDiv = styled.div.withConfig({
  displayName: "ScrollToTopstories__FillerDiv",
  componentId: "sc-1muh7hk-0"
})(["background-color:#bfe5bf;height:", ";min-height:4rem;width:100%;margin-bottom:1rem;"], function (_ref) {
  var size = _ref.size;
  return "".concat(size * 10, "rem");
});
export var DefaultScrollToTop = function DefaultScrollToTop() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'lightgray',
      marginBottom: '1.5rem',
      height: '8rem',
      width: '100%'
    }
  }), _Button || (_Button = /*#__PURE__*/React.createElement(Button, null, "Button0")), /*#__PURE__*/React.createElement(Grid.Row, null, _Grid$Column || (_Grid$Column = /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Header 1"))), _toConsumableArray(Array(10)).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(FillerDiv, {
      size: index % 2
    }));
  })), _Button2 || (_Button2 = /*#__PURE__*/React.createElement(Button, null, "Button1")), /*#__PURE__*/React.createElement(Grid.Row, null, _Grid$Column2 || (_Grid$Column2 = /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Header 2"))), _toConsumableArray(Array(10)).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(FillerDiv, {
      size: index % 2
    }));
  })), _Button3 || (_Button3 = /*#__PURE__*/React.createElement(Button, null, "Button2")), /*#__PURE__*/React.createElement(Grid.Row, null, _Grid$Column3 || (_Grid$Column3 = /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Header 3"))), _toConsumableArray(Array(10)).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(FillerDiv, {
      size: index % 2
    }));
  })), _Button4 || (_Button4 = /*#__PURE__*/React.createElement(Button, null, "Button3")), /*#__PURE__*/React.createElement(ScrollToTop, {
    hide: _boolean('Hide', false),
    noAnimation: _boolean('no Animation', false),
    showAt: number('Show At', 400),
    bottomPosition: text('Bottom Position', 'size-48'),
    rightPosition: text('Right Position', 'size-32')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ScrollToTop"
  })));
};
export var ScrollToRef = function ScrollToRef() {
  var header1Ref = React.useRef(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'lightgray',
      marginBottom: '1.5rem',
      height: '8rem',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1",
    ref: header1Ref
  }, "Header 1")), _toConsumableArray(Array(10)).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(FillerDiv, {
      size: index % 2
    }));
  })), /*#__PURE__*/React.createElement(Grid.Row, null, _Grid$Column4 || (_Grid$Column4 = /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Header 2"))), _toConsumableArray(Array(10)).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(FillerDiv, {
      size: index % 2
    }));
  })), /*#__PURE__*/React.createElement(Grid.Row, null, _Grid$Column5 || (_Grid$Column5 = /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Header 3"))), _toConsumableArray(Array(10)).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(FillerDiv, {
      size: index % 2
    }));
  })), /*#__PURE__*/React.createElement(ScrollToTop, {
    scrollToRef: header1Ref,
    hide: _boolean('Hide', false),
    noAnimation: _boolean('no Animation', false),
    showAt: number('Show At', 400),
    bottomPosition: text('Bottom Position', 'size-48'),
    rightPosition: text('Right Position', 'size-32')
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ScrollToTop"
  })));
};