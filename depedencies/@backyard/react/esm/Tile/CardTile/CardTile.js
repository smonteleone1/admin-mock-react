import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "color", "shape", "disabled"];
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
 * Since this component is just a wrapper you can place interactive elements within like
 * buttons and links if you so desire.
 *
 * note: The white background variation is to be used when there are pictures being included on the tile(s). If it
 * is part of a set, all the tiles should be of the same variation.
 *
 * example:
 * <CardTile>
 *     <span>Hello World</span>
 *     <Button>Button</Button>
 * </CardTile>
 */

var CardTile = /*#__PURE__*/React.forwardRef(function CardTile(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'surface' : _ref$color,
      shapeProp = _ref.shape,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'CardTile'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(TileWrapper, _extends({
    as: "div",
    className: classNames("color--".concat(color, " shape--").concat(shape, " type--card"), className, className, disabled && "disabled"),
    "aria-disabled": disabled,
    type: "card"
  }, props, {
    ref: ref
  }), children);
});
CardTile.bdsName = 'CardTile';
export { CardTile };
export default CardTile;