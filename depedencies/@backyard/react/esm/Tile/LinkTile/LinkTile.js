import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _LinkIcon;

var _excluded = ["children", "className", "href", "disabled", "color", "shape", "icon", "disableIcon"];
import LinkIcon from '@backyard/icons/LinkIcon';
import classNames from 'classnames';
import * as React from 'react';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
import TileWrapper from '../styles/TileWrapper';
/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile contains links to external sites or sections of the page that are navigated to when selected.
 * The entire surface of the tile is selectable, which prevents additional links from being included within the content.
 *
 * note: The 'outlined' variation is to be used when there are pictures being included on the tile(s).
 *
 * example:
 * <LinkTile href='www.lowes.com'>
 *     <span>Hello World</span>
 * </LinkTile>
 */

var LinkTile = /*#__PURE__*/React.forwardRef(function LinkTile(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'surface' : _ref$color,
      shapeProp = _ref.shape,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? _LinkIcon || (_LinkIcon = /*#__PURE__*/React.createElement(LinkIcon, null)) : _ref$icon,
      disableIcon = _ref.disableIcon,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'LinkTile'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // sets href if it exists or the tile isn't disabled

  var getHref = href && !disabled ? href : null;
  return /*#__PURE__*/React.createElement(TileWrapper, _extends({
    as: "a",
    className: classNames("color--".concat(color, " shape--").concat(shape, " type--link"), className, className, disabled && "disabled"),
    "aria-disabled": disabled,
    type: "link",
    href: getHref
  }, props, {
    ref: ref
  }), children, disableIcon ? null : /*#__PURE__*/React.createElement("div", {
    className: "tile-icon"
  }, icon));
});
LinkTile.bdsName = 'LinkTile';
export { LinkTile };
export default LinkTile;