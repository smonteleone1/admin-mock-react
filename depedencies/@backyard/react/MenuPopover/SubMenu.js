"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SubMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _MenuPopover = _interopRequireDefault(require("./MenuPopover"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _ChevronRight;

var _excluded = ["children", "className", "id", "items", "label", "menuItemProps", "menuPopoverProps", "listenHover", "renderItem", "open", "onOpen", "onClose", "placement", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Sub Menu
 *
 * `SubMenu` extends both `Menu` and `MenuPopover` to provide a simple way to make a
 * functional deep menu for a user to navigate.
 *
 * `SubMenu` will use `disableClick` and `listenHover` from the outer most `MenuPopover` ancestor.
 *
 * Example:
 * ```
 *  <Grid.Column sm={12} md={8} lg={6} xl={6}>
 *      <MenuPopover
 *          onOpen={action('onOpen')}
 *          onClose={action('onClose')}
 *          menu={(
 *              <Menu>
 *                  <MenuItem
 *                      iconBefore={<Home />}
 *                  >
 *                      Home
 *                  </MenuItem>
 *                  <SubMenu label="Options">
 *                      <MenuItem>Level Two - One</MenuItem>
 *                      <SubMenu label="Level Two - Next">
 *                          <MenuItem>Item 3-1</MenuItem>
 *                          <MenuItem>Item 3-2</MenuItem>
 *                          <SubMenu label="Item 3-3">
 *                              <MenuItem>Item 4-1</MenuItem>
 *                              <MenuItem>Item 4-2</MenuItem>
 *                          </SubMenu>
 *                          <SubMenu label="Item 3-4">
 *                              <MenuItem>Item 4-1</MenuItem>
 *                              <MenuItem>Item 4-2</MenuItem>
 *                              <MenuItem>Item 4-3</MenuItem>
 *                              <MenuItem>Item 4-4</MenuItem>
 *                              <MenuItem>Item 4-5</MenuItem>
 *                              <MenuItem>Item 4-6</MenuItem>
 *                          </SubMenu>
 *                          <MenuItem>Item 3-5</MenuItem>
 *                      </SubMenu>
 *                      <MenuItem>Level Two - Three</MenuItem>
 *                      <MenuItem>Level Two - Four</MenuItem>
 *                  </SubMenu>
 *                  <MenuItem
 *                      disabled
 *                      iconBefore={<Download />}
 *                  >
 *                      Download
 *                  </MenuItem>
 *                  <MenuItem
 *                      variant="primary"
 *                      color="error"
 *                      onClick={() => alert('You clicked me!')}
 *                  >
 *                      Alert
 *                  </MenuItem>
 *              </Menu>
 *          )}
 *      >
 *          <IconButton
 *              variant="ghost"
 *              color="subtle"
 *              size="small"
 *          >
 *              <Dots />
 *          </IconButton>
 *      </MenuPopover>
 *  </Grid.Column>
 * ```
 */
var SubMenu = /*#__PURE__*/React.forwardRef(function SubMenu(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      items = _ref.items,
      label = _ref.label,
      _ref$menuItemProps = _ref.menuItemProps,
      menuItemProps = _ref$menuItemProps === void 0 ? {} : _ref$menuItemProps,
      _ref$menuPopoverProps = _ref.menuPopoverProps,
      menuPopoverProps = _ref$menuPopoverProps === void 0 ? {} : _ref$menuPopoverProps,
      listenHover = _ref.listenHover,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? function (props) {
    var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  } : _ref$renderItem,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right-start' : _ref$placement,
      shape = _ref.shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Map items/children
  var menu = items ? // Map items if given,
  items.map(function (item, index) {
    return renderItem((0, _extends2["default"])({
      key: index
    }, item));
  }) : // Else declaratively use children
  children;
  /**
   * Layout:
   * ```
   *  <ul>
   *      ...
   *  </ul>
   * ```
   */

  return /*#__PURE__*/React.createElement(_MenuPopover["default"], (0, _extends2["default"])({
    open: open,
    placement: placement,
    onOpen: onOpen,
    onClose: onClose,
    shape: shape,
    listenHover: listenHover
  }, menuPopoverProps, {
    className: (0, _classnames["default"])('submenu-popover', menuPopoverProps.className),
    menu: /*#__PURE__*/React.createElement(_Menu["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])('submenu', className),
      shape: shape
    }, props, {
      ref: ref
    }), menu)
  }), /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(_ChevronRight2["default"], null))
  }, menuItemProps, {
    className: (0, _classnames["default"])('submenu-reference', menuItemProps.className)
  }), label));
});
exports.SubMenu = SubMenu;
SubMenu.bdsName = 'SubMenu';
var _default = SubMenu;
exports["default"] = _default;