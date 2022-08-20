import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["id", "children", "className", "component", "variant", "state", "shape", "disabled", "ariaLabel", "selected", "onSelect", "onDeselect", "onClick", "value", "style"],
      _excluded2 = ["onSelect", "onDeselect"];
import * as React from 'react';
import classnames from 'classnames';
import IconButton from '../IconButton';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import useRandomId from '../utils/hooks/useRandomId';
import ToggleButtonBase from './styles/ToggleButtonBase';
import useToggle from './hooks/useToggle';
/**
 * Backyard React Toggle Button
 *
 * Toggle button to be used as a child of `Toggle`
 *
 * Examples:
 *
 * - [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)
 *
 * API:
 *
 * - [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)
 */

const ToggleButton = /*#__PURE__*/React.forwardRef(function ToggleButton(_ref, ref) {
  let {
    id: idProp,
    children,
    className,
    component = IconButton,
    variant = 'secondary',
    state: stateProp,
    shape = 'squared',
    disabled = false,
    ariaLabel = 'toggle button',
    selected: selectedProp = false,
    onSelect,
    onDeselect,
    onClick,
    value: valueProp,
    style: styleProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get toggle provider values
  const {
    toggles,
    toggled,
    dispatchToggle,
    handleToggle
  } = useToggle(); // Hold button inner ref

  const innerRef = useForwardedRef(ref); // Generate id for toggle map

  const id = useRandomId(idProp); // Default value to id if not defined

  const value = typeof valueProp !== 'undefined' ? valueProp : id; // Calculate whether or not button is selected

  const selected = React.useMemo(() => selectedProp || ( // Check if toggled value is a Set
  toggled?.value instanceof Set ? // If so, check if it has the value
  toggled?.value.has(value) : // Else, check if it is the value
  toggled?.value === value), [selectedProp, toggled]); // Contextual props from `ToggleProvider`

  const context = React.useMemo(() => ({
    selected,
    state: stateProp || (selected ? 'selected' : 'unselected'),
    color: selected ? 'selected' : 'unselected',
    value,
    id,
    onSelect,
    onDeselect,
    // Overwrite onClick handler...
    onClick: event => {
      // Persist event through dispatch call
      persistSyntheticEvent(event); // Dispatch toggle action to
      // select or deselect button

      dispatchToggle({
        type: 'toggle',
        value,
        // Callback to handle toggle button callbacks
        callback: (state, action) => // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleToggle(event, state, action, {
          onClick
        })
      });
    },
    // Assign internal toggle id
    'data-toggle-id': id,
    // Set ref to list of refs for `Toggle` to use to
    // calculate the default value when enforcing selected
    // but no default value was provided
    ref: innerRef
  }), [id, selected]); // Side effect for when id, innerref, or context changes

  React.useEffect(() => {
    // If id and ref defined,
    if (id && innerRef.current) {
      // Update toggles with new/changed context
      toggles.current[id] = context;
    }
  }, [innerRef, id, context]); // Extract `onSelect` and `onDeselect` to remove console error

  const contextWithoutTrigger = _objectWithoutPropertiesLoose(context, _excluded2);

  return /*#__PURE__*/React.createElement(ToggleButtonBase, _extends({
    as: component,
    className: classnames(`toggle-button state--${context.state}`, className, context.selected && "selected"),
    variant: variant,
    disabled: disabled,
    color: "neutral",
    size: "small",
    "aria-label": ariaLabel // aria-checked={selected}
    ,
    shape: shape,
    style: _extends({
      '--btn-icon': 'var(--bds-color-icon-solid-inverse)'
    }, styleProp)
  }, props, contextWithoutTrigger), children);
});
ToggleButton.bdsName = 'ToggleButton';
export { ToggleButton };
export default ToggleButton;