import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["context", "add", "remove", "update", "disabled", "state", "indent"];
import * as React from 'react';
import { FormControlContext } from '../FormControlProvider';
import useRandomId from '../../utils/hooks/useRandomId';
/**
 * Hook to add
 * @param props - context props to initialize input with
 */

function useFormControl(props = {}) {
  // Get contexts from `FormControl` if available
  const formControlContext = React.useContext(FormControlContext); // If there is no `FormControl` parent,

  if (!formControlContext) {
    // Return props as given, no synchornization needed
    return props;
  } // Else, get all props from `FormControl`


  const {
    context,
    add,
    remove,
    update,
    disabled: disabledContext,
    state: stateContext,
    indent: indentContext
  } = formControlContext,
        rest = _objectWithoutPropertiesLoose(formControlContext, _excluded); // State to hold the id of the input


  const id = React.useCallback(useRandomId(props?.id), []); // Side effect for when the `id` is updated...

  React.useEffect(() => {
    // If input is being tracked and `id` is defined,
    if (!props?.noContext && id) {
      // Add input to `FormControl` contexts
      add(id, props);
    } // When dismounting...


    return () => {
      // If input is in contexts,
      if (context?.[id]) {
        // Remove input from `FormControl`
        remove(id);
      }
    };
  }, [id]); // Side effect for when component's `disabled` prop changes...

  React.useEffect(() => {
    // If input is being tracked and `id` is defined,
    if (!props?.noContext && id) {
      // Update input context with `disabled` value
      update(id, {
        disabled: props.disabled
      });
    }
  }, [props.disabled]); // Side effect for when the component's `state` prop changes...

  React.useEffect(() => {
    // If input is being tracked and `id` is defined,
    if (!props?.noContext && id) {
      // Update input context with `state` value
      update(id, {
        state: props.state
      });
    }
  }, [props.state]); // Map contexts to a list of control inputs

  const controls = Object.keys(context).map(key => _extends({}, context[key])).filter(control => Object.keys(control).length !== 0); // Calculate what helper text should appear as from form control context

  const disabled = disabledContext || controls.some(control => control.disabled === true);
  let indent = indentContext || (controls.length > 0 ? controls.filter(control => typeof control.indent === 'string')[0]?.indent : 'size_16');

  const state = stateContext || (() => {
    // First priority state, error
    if (controls.some(control => control.state === 'error')) {
      return 'error';
    } // Second priority state, error


    if (controls.some(control => control.state === 'warning')) {
      return 'warning';
    } // Third priority state, error


    if (controls.some(control => control.state === 'info')) {
      return 'info';
    } // Finally, no states, default


    return 'default';
  })(); // If there are multiple controls, don't indent


  if (controls.length > 1) indent = false; // Provide contexts and `FormControl` values

  return _extends({
    context,
    add,
    remove,
    update
  }, rest, {
    disabled,
    indent,
    state,
    id
  });
}

export { useFormControl };
export default useFormControl;