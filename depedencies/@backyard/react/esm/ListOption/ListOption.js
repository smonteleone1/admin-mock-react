import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "component", "disabled", "selected", "size", "shape", "icon", "onSelect", "onDeselect", "value", "label"];
import * as React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import ListOptionWrapper from './styles/ListOptionWrapper';
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
      Component = _ref$component === void 0 ? Button : _ref$component,
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
      props = _objectWithoutProperties(_ref, _excluded);

  // Hold the state of the previously selected state
  var _React$useState = React.useState(selected),
      _React$useState2 = _slicedToArray(_React$useState, 2),
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
  return /*#__PURE__*/React.createElement(ListOptionWrapper, null, /*#__PURE__*/React.createElement(Component, _extends({
    className: classNames("list-option size--".concat(size), className, disabled && "disabled", selected && "selected"),
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

ListOption.bdsName = 'ListOption';
export { ListOption };
export default ListOption;