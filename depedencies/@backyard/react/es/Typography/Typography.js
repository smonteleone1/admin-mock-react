import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["className"],
      _excluded2 = ["className"],
      _excluded3 = ["className"],
      _excluded4 = ["className"],
      _excluded5 = ["align", "bold", "regular", "className", "color", "component", "display", "marginBottom", "variant"];
import classNames from 'classnames';
import * as React from 'react';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import Article from './Article';
import Caption from './Caption';
import Footnote from './Footnote';
import Heading from './Headings';
import Paragraph from './Paragraph';
import { FormHelperText, Label, Overline } from './styles/TypographyBase'; // Defines the possible variants of Typography

const variants = {
  // Web Headers
  // h1-h6 - medium on desktop, small on mobile
  h1: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Heading, _extends({
    level: 1
  }, props, {
    ref: ref
  }))),
  h2: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Heading, _extends({
    level: 2
  }, props, {
    ref: ref
  }))),
  h3: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Heading, _extends({
    level: 3
  }, props, {
    ref: ref
  }))),
  h4: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Heading, _extends({
    level: 4
  }, props, {
    ref: ref
  }))),
  h5: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Heading, _extends({
    level: 5
  }, props, {
    ref: ref
  }))),
  h6: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Heading, _extends({
    level: 6
  }, props, {
    ref: ref
  }))),
  // Body Text
  body: /*#__PURE__*/React.forwardRef((_ref, ref) => {
    let {
      className
    } = _ref,
        props = _objectWithoutPropertiesLoose(_ref, _excluded);

    return /*#__PURE__*/React.createElement(Paragraph, _extends({
      className: classNames(className, 'body_1')
    }, props, {
      ref: ref
    }));
  }),
  body_small: /*#__PURE__*/React.forwardRef((_ref2, ref) => {
    let {
      className
    } = _ref2,
        props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    return /*#__PURE__*/React.createElement(Paragraph, _extends({
      className: classNames(className, 'body_2')
    }, props, {
      ref: ref
    }));
  }),
  // p - medium on desktop, small on mobile
  body_1: /*#__PURE__*/React.forwardRef((_ref3, ref) => {
    let {
      className
    } = _ref3,
        props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

    return /*#__PURE__*/React.createElement(Paragraph, _extends({
      className: classNames(className, 'body_1')
    }, props, {
      ref: ref
    }));
  }),
  // p - small
  body_2: /*#__PURE__*/React.forwardRef((_ref4, ref) => {
    let {
      className
    } = _ref4,
        props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

    return /*#__PURE__*/React.createElement(Paragraph, _extends({
      className: classNames(className, 'body_2')
    }, props, {
      ref: ref
    }));
  }),
  // Article Text
  // p - medium on desktop, small on mobile
  article: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Article, _extends({}, props, {
    ref: ref
  }))),
  // Caption Text
  // span - medium on desktop, small on mobile
  caption: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Caption, _extends({}, props, {
    ref: ref
  }))),
  // Footnote Text
  // span - medium on desktop, small on mobile
  footnote: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Footnote, _extends({}, props, {
    ref: ref
  }))),
  overline: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Overline, _extends({}, props, {
    ref: ref
  }))),
  // Misc
  // label - medium on desktop, small on mobile
  label: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Label, _extends({}, props, {
    ref: ref
  }))),
  // span - medium on desktop, small on mobile
  helper: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(FormHelperText, _extends({}, props, {
    ref: ref
  })))
}; // For ease of use, maps some common names to tokens

const colors = {
  black: 'black',
  primary: 'text_primary',
  secondary: 'text_secondary',
  tertiary: 'text_tertiary',
  link: 'link',
  error: 'error',
  success: 'success',
  disabled: 'disabled',
  white: 'white'
};
/**
 * Gets color from map, else uses defined color
 *
 * @param {string} color
 */

const getColor = color => {
  return colors[color] || color;
};
/**
 * Adds class to typography
 *
 * @param {string} key
 * @param {string} value
 */


const addClass = (key, value) => value ? `${key}--${value}` : null;
/**
 * Backyard React Typography
 *
 * Combines all typographies into one React API
 *
 *  <Typography variant="body_small">This body text is always small</Typography>
 *
 *  <Typography variant="body">This body text is small on mobile, but medium on desktop</Typography>
 */


const Typography = /*#__PURE__*/React.forwardRef(function Typography(_ref5, ref) {
  let {
    align = 'left',
    bold = false,
    regular = false,
    className,
    color = 'primary',
    component,
    display,
    marginBottom,
    variant = 'body_1'
  } = _ref5,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Typography'); // Get component from variants, but default to span if not defined...

  const Component = component || variants[variant] || 'span';
  /**
   * Layout:
   *
   *  <Typography>
   *      ...
   *  </Typography>
   */

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: classNames('typography', addClass('variant', variant), addClass('display', display), addClass('align', align), className, bold && "bold"),
    color: getColor(color),
    marginBottom: marginBottom,
    regular: regular
  }, props, {
    ref: ref
  }));
});
Typography.bdsName = 'Typography';
export { Typography };
export default Typography;