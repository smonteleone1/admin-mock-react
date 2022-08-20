"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListOption = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var _ListOptionWrapper = _interopRequireDefault(require("./styles/ListOptionWrapper"));

var _excluded = ["children", "className", "component", "disabled", "selected", "size", "shape", "icon", "onSelect", "onDeselect", "value", "label"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React List Option
 *
 * `ListOption` provides an option for `List` in the form of a custom button.
 *
 * Example:
 * ```
 *  <ListOption
 *      icon={<Location />}
 *  >
 *      New York
 *  </ListOption>
 * ```
 */
var ListOption = /*#__PURE__*/React.forwardRef(function ListOption(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? _Button["default"] : _ref$component,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      shape = _ref.shape,
      iconProp = _ref.icon,
      onSelect = _ref.onSelect,
      onDeselect = _ref.onDeselect,
      value = _ref.value,
      label = _ref.label,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Hold the state of the previously selected state
  var _React$useState = React.useState(selected),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      isSelected = _React$useState2[0],
      setIsSelected = _React$useState2[1]; // Memoize option values...


  var option = React.useMemo(function () {
    return {
      disabled: disabled,
      selected: selected,
      value: value,
      label: label
    };
  }, []); // Clone given icon

  var icon = React.useMemo(function () {
    return iconProp ? /*#__PURE__*/React.cloneElement(iconProp, {
      className: 'list-option-icon'
    }) : null;
  }, [iconProp]); // Side effect for when option is selected/deselected

  React.useEffect(function () {
    // If selected state is changing,
    if (selected !== isSelected) {
      // If selected,
      if (selected) {
        if (onSelect) {
          // Trigger onSelect
          onSelect(option);
        }
      } else if (onDeselect) {
        // Trigger onDeselect
        onDeselect(option);
      } // Set new selected state


      setIsSelected(selected);
    }
  }, [selected]);
  return /*#__PURE__*/React.createElement(_ListOptionWrapper["default"], null, /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    className: (0, _classnames["default"])("list-option size--".concat(size), className, disabled && "disabled", selected && "selected"),
    disabled: disabled,
    variant: selected ? 'tertiary' : 'ghost',
    color: selected ? 'interactive' : 'neutral',
    shape: shape
  }, props, {
    ref: ref
  }), icon || null, /*#__PURE__*/React.createElement("span", {
    className: "list-label"
  }, children)));
});
/**
 * Option info provided for event triggers
 */

exports.ListOption = ListOption;
ListOption.bdsName = 'ListOption';
var _default = ListOption;
exports["default"] = _default;