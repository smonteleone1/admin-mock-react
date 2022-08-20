"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.OpenedAccordion = exports.DefaultAccordion = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _ApiLink, _Typography, _ApiLink2, _FormHeading, _br;

var _default = {
  title: '@backyard/react/Accordion',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'medium'];
var variants = ['Variant', {
  triangle: 'triangle',
  plus: 'plus'
}, 'triangle'];
var colors = ['Color', {
  transparent: 'transparent',
  interactive: 'interactive',
  neutral: 'neutral'
}, 'transparent'];

var DefaultAccordion = function DefaultAccordion() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
    title: (0, _addonKnobs.text)('Title', 'Title'),
    subtitle: (0, _addonKnobs.text)('Subtitle', 'Subtitle'),
    open: (0, _addonKnobs["boolean"])('Open', false),
    keepMounted: (0, _addonKnobs["boolean"])('Keep Mounted', true),
    variant: _addonKnobs.select.apply(void 0, variants),
    size: _addonKnobs.select.apply(void 0, sizes),
    color: _addonKnobs.select.apply(void 0, colors)
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    style: {
      margin: 0,
      padding: 0
    }
  }, "Child text")), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Accordion"
  })));
};

exports.DefaultAccordion = DefaultAccordion;

var OpenedAccordion = function OpenedAccordion() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
    title: (0, _addonKnobs.text)('Title', 'Title'),
    open: (0, _addonKnobs["boolean"])('Open', false),
    keepMounted: (0, _addonKnobs["boolean"])('Keep Mounted', true),
    size: _addonKnobs.select.apply(void 0, sizes)
  }, _Typography || (_Typography = /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Child text"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Accordion"
  })));
};

exports.OpenedAccordion = OpenedAccordion;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Accordion Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.AccordionSkeleton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
}; // export default {
//     title: '@backyard/react/Accordion',
//     argTypes: {
//         size: {
//             options: ['small', 'medium', 'large'],
//             control: { type: 'select' }
//         },
//         variants: {
//             options: ['triangle', 'plus'],
//             control: { type: 'select' }
//         },
//         color: {
//             options: ['transparent', 'interactive', 'neutral'],
//             control: { type: 'select' }
//         },
//     }
// } as ComponentMeta<typeof Accordion>
// const Template: ComponentStory<typeof Accordion> = (props) => <Accordion {...props} />
// export const DefaultAccordion = Template.bind({})
// DefaultAccordion.args = {
//     size: 'medium',
//     variant: 'triangle',
//     color: 'transparent'
// }


exports.Skeleton = Skeleton;