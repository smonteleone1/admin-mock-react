var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _h, _h2, _h3, _h4, _h5, _h6, _br, _p, _br2, _p2, _br3, _article, _ApiLink6;

import { boolean as _boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import styled from 'styled-components';
import { GridV3 as Grid, Typography } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Typography',
  decorators: [withKnobs]
};
var aligns = ['Align', {
  left: 'left',
  center: 'center',
  right: 'right'
}, 'left'];
var colors = ['Color', {
  text_solid: 'text_solid',
  text_primary: 'text_primary',
  text_secondary: 'text_secondary',
  text_tertiary: 'text_tertiary',
  text_interactive: 'text_interactive',
  text_red: 'text_red',
  text_green: 'text_green',
  text_disabled: 'text_disabled',
  text_solid_inverse: 'text_solid_inverse'
}, 'text_primary'];
var displays = ['Display', {
  block: 'block',
  inline: 'inline'
}, 'block'];
var StyledRow = styled(Grid.Row).withConfig({
  displayName: "Typographystories__StyledRow",
  componentId: "sc-1423fb5-0"
})(["border-bottom:1px solid ", ";margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.border_subdued;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_20;
});
var variantOptions = {
  header: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  body: ['body_1', 'body_2'],
  article: ['article'],
  caption: ['caption'],
  misc: ['label', 'helper', 'overline']
};
export var HeaderTypography = function HeaderTypography() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, variantOptions.header.map(function (variant) {
    return /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(Typography, {
      align: select.apply(void 0, aligns),
      color: select.apply(void 0, colors),
      regular: _boolean('Regular', false),
      display: select.apply(void 0, displays),
      variant: variant
    }, text('Text', 'Backyard Design System'))));
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};
export var BodyTypography = function BodyTypography() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, variantOptions.body.map(function (variant) {
    return /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(Typography, {
      align: select.apply(void 0, aligns),
      color: select.apply(void 0, colors),
      bold: _boolean('Bold', false),
      display: select.apply(void 0, displays),
      variant: variant
    }, text('Text', 'Backyard Design System'))));
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};
export var ArticleTypography = function ArticleTypography() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, variantOptions.article.map(function (variant) {
    return /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(Typography, {
      align: select.apply(void 0, aligns),
      color: select.apply(void 0, colors),
      bold: _boolean('Bold', false),
      display: select.apply(void 0, displays),
      variant: variant
    }, text('Text', 'Backyard Design System'))));
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};
export var CaptionTypography = function CaptionTypography() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, variantOptions.caption.map(function (variant) {
    return /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(Typography, {
      align: select.apply(void 0, aligns),
      color: select.apply(void 0, colors),
      bold: _boolean('Bold', false),
      display: select.apply(void 0, displays),
      variant: variant
    }, text('Text', 'Backyard Design System'))));
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};
export var MiscTypography = function MiscTypography() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, variantOptions.misc.map(function (variant) {
    return /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/React.createElement(Grid.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/React.createElement(Typography, {
      align: select.apply(void 0, aligns),
      color: select.apply(void 0, colors),
      bold: _boolean('Bold', false),
      display: select.apply(void 0, displays),
      variant: variant
    }, text('Text', 'Backyard Design System'))));
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};
export var HTMLTags = function HTMLTags() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, _h || (_h = /*#__PURE__*/React.createElement("h1", null, "Heading 1")), _h2 || (_h2 = /*#__PURE__*/React.createElement("h2", null, "Heading 2")), _h3 || (_h3 = /*#__PURE__*/React.createElement("h3", null, "Heading 3")), _h4 || (_h4 = /*#__PURE__*/React.createElement("h4", null, "Heading 4")), _h5 || (_h5 = /*#__PURE__*/React.createElement("h5", null, "Heading 5")), _h6 || (_h6 = /*#__PURE__*/React.createElement("h6", null, "Heading 6")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), _p || (_p = /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis. ")), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _p2 || (_p2 = /*#__PURE__*/React.createElement("p", {
    className: "body-small"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis. ")), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), _article || (_article = /*#__PURE__*/React.createElement("article", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis.")), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};