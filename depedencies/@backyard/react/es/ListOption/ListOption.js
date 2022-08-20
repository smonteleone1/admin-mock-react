import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "component", "disabled", "selected", "size", "shape", "icon", "onSelect", "onDeselect", "value", "label"];
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

const ListOption = /*#__PURE__*/React.forwardRef(function ListOption(_ref, ref) {
  let {
    children,
    className,
    component: Component = Button,
    disabled = false,
    selected = false,
    size = 'normal',
    shape,
    // = 'rounded',
    icon: iconProp,
    onSelect,
    onDeselect,
    value,
    label
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Hold the state of the previously selected state
  const [isSelected, setIsSelected] = React.useState(selected); // Memoize option values...

  const option = React.useMemo(() => ({
    disabled,
    selected,
    value,
    label
  }), []); // Clone given icon

  const icon = React.useMemo(() => iconProp ? /*#__PURE__*/React.cloneElement(iconProp, {
    className: 'list-option-icon'
  }) : null, [iconProp]); // Side effect for when option is selected/deselected

  React.useEffect(() => {
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
    className: classNames(`list-option size--${size}`, className, disabled && "disabled", selected && "selected"),
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