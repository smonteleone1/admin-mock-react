import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "id", "items", "label", "shape", "renderItem", "width", "height", "style"];
import * as React from 'react';
import classNames from 'classnames';
import MenuItem from '../MenuItem';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import MenuWrapper from './styles/MenuWrapper';
/**
 * Backyard React Menu
 *
 * `Menu` provides a customized component for triggering actions from a list of items (aka. `MenuItem`s).
 *
 * This component does not trigger a popover from an action on another component.
 * For that functionality, please see `MenuPopover`.
 *
 * For a list that provides the user the ability to select from a list of options, please use `List`.
 *
 * Example:
 * ```
 *  <Menu>
 *      <MenuItem
 *          iconBefore={<Home />}
 *      >
 *          Home
 *      </MenuItem>
 *      <MenuItem
 *          iconBefore={<CreditCard />}
 *      >
 *          Payment Methods
 *      </MenuItem>
 *      <MenuItem>
 *          No Icon Needed
 *      </MenuItem>
 *      <MenuItem
 *          disabled
 *          iconBefore={<Download />}
 *      >
 *          Download
 *      </MenuItem>
 *      <MenuItem
 *          variant="primary"
 *          color="error"
 *          iconBefore={<Home />}
 *          onClick={() => alert('You clicked on me!')}
 *      >
 *          Alert
 *      </MenuItem>
 *  </Menu>
 * ```
 */

var Menu = /*#__PURE__*/React.forwardRef(function Menu(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      items = _ref.items,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Menu' : _ref$label,
      shapeProp = _ref.shape,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? function (props) {
    var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return /*#__PURE__*/React.createElement(MenuItem, _extends({}, props, {
      ref: ref
    }));
  } : _ref$renderItem,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 'auto' : _ref$height,
      styleProp = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'Menu'
  }); // Get shape context from theme

  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Map items/children

  var menu = items ? // Map items if given,
  items.map(function (item, index) {
    return renderItem(_extends({
      key: index
    }, item));
  }) : // Else declaratively use children
  React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child) : child;
  });
  var style = React.useMemo(function () {
    return {
      '--style-menu-width': theme.sizes[width] || width,
      '--style-menu-height': theme.sizes[height] || height
    };
  }, [theme, width, height, styleProp]);
  /**
   * Layout:
   *
   *  <div>
   *      <ul>
   *          ...
   *      </ul>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(MenuWrapper, _extends({
    id: id,
    "aria-label": label,
    role: "menu",
    className: classNames("menu shape--".concat(shape), className),
    style: style
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("ul", {
    className: 'menu-list'
  }, menu));
});
Menu.bdsName = 'Menu';
export { Menu };
export default Menu;