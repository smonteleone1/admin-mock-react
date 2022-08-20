import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _LinkIcon;

const _excluded = ["children", "className", "href", "disabled", "color", "shape", "icon", "disableIcon"];
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

const LinkTile = /*#__PURE__*/React.forwardRef(function LinkTile(_ref, ref) {
  let {
    children,
    className,
    href,
    disabled = false,
    color = 'surface',
    shape: shapeProp,
    // = 'rounded',
    icon = _LinkIcon || (_LinkIcon = /*#__PURE__*/React.createElement(LinkIcon, null)),
    disableIcon
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'LinkTile'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // sets href if it exists or the tile isn't disabled

  const getHref = href && !disabled ? href : null;
  return /*#__PURE__*/React.createElement(TileWrapper, _extends({
    as: "a",
    className: classNames(`color--${color} shape--${shape} type--link`, className, className, disabled && "disabled"),
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