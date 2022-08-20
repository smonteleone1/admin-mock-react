import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["bold", "children", "className", "color", "href", "iconAfter", "iconBefore", "size", "to", "underline", "onClick", "onKeyDown", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import LinkBase from './styles/LinkBase';
/**
 * Map of colors
 */

var colors = {
  interactive: 'text_interactive',
  primary: 'text_solid',
  inverse: 'text_solid_inverse'
};
/**
 * Maps color to token if available
 *
 * @param {string} color
 */

var mapColor = function mapColor(color) {
  return colors[color] ? colors[color] : color;
};
/**
 * Backyard React Link
 *
 * Link for interacting via html links
 *
 * If you want a button, see the `ghost` variant of the Button component
 *
 *  <Link
 *      to="https://lowes.com"
 *      type="commerce"
 *      iconAfter={<Bookmark />}
 *  >
 *      Bookmark
 *  </Link>
 */


var Link = /*#__PURE__*/React.forwardRef(function Link(_ref, ref) {
  var bold = _ref.bold,
      children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      href = _ref.href,
      iconAfterProp = _ref.iconAfter,
      iconBeforeProp = _ref.iconBefore,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      toProp = _ref.to,
      _ref$underline = _ref.underline,
      underlineProp = _ref$underline === void 0 ? 'hover' : _ref$underline,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Link'); // If `iconBefore` defined, insert into <span>

  var iconBefore = iconBeforeProp && /*#__PURE__*/React.createElement("span", {
    className: "link-start-icon"
  }, iconBeforeProp); // If `iconAfter` defined, insert into <span>

  var iconAfter = iconAfterProp && /*#__PURE__*/React.createElement("span", {
    className: "link-end-icon"
  }, iconAfterProp); // Use `to` prop before using `href` prop

  var to = toProp || href; // Convert link's role into 'button' if no `to` is defined

  var linkProps = !to ? {
    role: 'button',
    tabIndex: '0'
  } : {
    href: to
  }; // Auto-clamp underline when color is 'link'

  var underline = underlineProp;
  /**
   * Handles `onClick` event of <a>
   * Triggers defined `onClick` from props if available
   *
   * @param {Event} event - DOM event
   */

  var handleClick = function handleClick(event) {
    // If `onClick` prop defined,
    if (onClick) {
      // Trigger `onClick` prop function
      onClick(event);
    }
  };
  /**
   * Handles `onKeyDown` event of <a>
   * Triggers defined `onKeyDown` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleKeyDown = function handleKeyDown(event) {
    // Get key from event
    var key = event.key; // If space or enter key pressed,

    if ([' ', 'Enter'].indexOf(key) !== -1) {
      // Handle click event
      handleClick(event);
    } // If `onKeyDown` prop defined,


    if (onKeyDown) {
      // Trigger `onKeyDown` prop function
      onKeyDown(event);
    }
  };

  var styles = React.useMemo(function () {
    return _extends({
      '--bds-link-style-color': theme.color[mapColor(color)] || color,
      '--bds-link-style-breakpoint': theme.grid.breakpoint.lg.max,
      '--bds-link-style-font-family': theme.font.family[theme.context.font],
      '--bds-link-style-font-weight': theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold,
      '--bds-link-style-underline': function () {
        switch (underline) {
          case 'never':
            return 'none !important';

          case 'hover':
            return 'none';

          case 'always':
          default:
            return 'underline';
        }
      }()
    }, style);
  }, [style, underline]);
  /**
   * Layout:
   *
   *  <a (LinkBase)>
   *      <span>
   *          <icon (start) />
   *          ...
   *          <icon (end) />
   *      </span>
   *  </a>
   */

  return /*#__PURE__*/React.createElement(LinkBase, _extends({
    className: classNames("backyard link size--".concat(size, " color--").concat(color), className),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    style: styles,
    ref: ref
  }, linkProps, props), /*#__PURE__*/React.createElement("span", {
    className: "label link-label" + (bold ? " bold" : "")
  }, iconBefore, children, iconAfter));
});
Link.bdsName = 'Link';
export { Link };
export default Link;