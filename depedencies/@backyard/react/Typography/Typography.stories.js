"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MiscTypography = exports.HeaderTypography = exports.HTMLTags = exports.CaptionTypography = exports.BodyTypography = exports.ArticleTypography = void 0;

var _addonKnobs = require("@storybook/addon-knobs");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _ApiLink7 = require("../utils/storybook/ApiLink");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _h, _h2, _h3, _h4, _h5, _h6, _br, _p, _br2, _p2, _br3, _article, _ApiLink6;

var _default = {
  title: '@backyard/react/Typography',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
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
var StyledRow = (0, _styledComponents["default"])(_.GridV3.Row).withConfig({
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

var HeaderTypography = function HeaderTypography() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, variantOptions.header.map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement(StyledRow, null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      align: _addonKnobs.select.apply(void 0, aligns),
      color: _addonKnobs.select.apply(void 0, colors),
      regular: (0, _addonKnobs["boolean"])('Regular', false),
      display: _addonKnobs.select.apply(void 0, displays),
      variant: variant
    }, (0, _addonKnobs.text)('Text', 'Backyard Design System'))));
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};

exports.HeaderTypography = HeaderTypography;

var BodyTypography = function BodyTypography() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, variantOptions.body.map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement(StyledRow, null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      align: _addonKnobs.select.apply(void 0, aligns),
      color: _addonKnobs.select.apply(void 0, colors),
      bold: (0, _addonKnobs["boolean"])('Bold', false),
      display: _addonKnobs.select.apply(void 0, displays),
      variant: variant
    }, (0, _addonKnobs.text)('Text', 'Backyard Design System'))));
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};

exports.BodyTypography = BodyTypography;

var ArticleTypography = function ArticleTypography() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, variantOptions.article.map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement(StyledRow, null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      align: _addonKnobs.select.apply(void 0, aligns),
      color: _addonKnobs.select.apply(void 0, colors),
      bold: (0, _addonKnobs["boolean"])('Bold', false),
      display: _addonKnobs.select.apply(void 0, displays),
      variant: variant
    }, (0, _addonKnobs.text)('Text', 'Backyard Design System'))));
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};

exports.ArticleTypography = ArticleTypography;

var CaptionTypography = function CaptionTypography() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, variantOptions.caption.map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement(StyledRow, null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      align: _addonKnobs.select.apply(void 0, aligns),
      color: _addonKnobs.select.apply(void 0, colors),
      bold: (0, _addonKnobs["boolean"])('Bold', false),
      display: _addonKnobs.select.apply(void 0, displays),
      variant: variant
    }, (0, _addonKnobs.text)('Text', 'Backyard Design System'))));
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};

exports.CaptionTypography = CaptionTypography;

var MiscTypography = function MiscTypography() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, variantOptions.misc.map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement(StyledRow, null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      variant: "caption",
      color: "text_tertiary"
    }, variant), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      align: _addonKnobs.select.apply(void 0, aligns),
      color: _addonKnobs.select.apply(void 0, colors),
      bold: (0, _addonKnobs["boolean"])('Bold', false),
      display: _addonKnobs.select.apply(void 0, displays),
      variant: variant
    }, (0, _addonKnobs.text)('Text', 'Backyard Design System'))));
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};

exports.MiscTypography = MiscTypography;

var HTMLTags = function HTMLTags() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _h || (_h = /*#__PURE__*/_react["default"].createElement("h1", null, "Heading 1")), _h2 || (_h2 = /*#__PURE__*/_react["default"].createElement("h2", null, "Heading 2")), _h3 || (_h3 = /*#__PURE__*/_react["default"].createElement("h3", null, "Heading 3")), _h4 || (_h4 = /*#__PURE__*/_react["default"].createElement("h4", null, "Heading 4")), _h5 || (_h5 = /*#__PURE__*/_react["default"].createElement("h5", null, "Heading 5")), _h6 || (_h6 = /*#__PURE__*/_react["default"].createElement("h6", null, "Heading 6")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), _p || (_p = /*#__PURE__*/_react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis. ")), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _p2 || (_p2 = /*#__PURE__*/_react["default"].createElement("p", {
    className: "body-small"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis. ")), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), _article || (_article = /*#__PURE__*/_react["default"].createElement("article", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis.")), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Typography"
  })));
};

exports.HTMLTags = HTMLTags;