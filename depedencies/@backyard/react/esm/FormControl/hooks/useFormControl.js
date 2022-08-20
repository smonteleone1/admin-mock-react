import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["context", "add", "remove", "update", "disabled", "state", "indent"];
import * as React from 'react';
import { FormControlContext } from '../FormControlProvider';
import useRandomId from '../../utils/hooks/useRandomId';
/**
 * Hook to add
 * @param props - context props to initialize input with
 */

function useFormControl() {
  var _controls$filter$;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Get contexts from `FormControl` if available
  var formControlContext = React.useContext(FormControlContext); // If there is no `FormControl` parent,

  if (!formControlContext) {
    // Return props as given, no synchornization needed
    return props;
  } // Else, get all props from `FormControl`


  var context = formControlContext.context,
      add = formControlContext.add,
      remove = formControlContext.remove,
      update = formControlContext.update,
      disabledContext = formControlContext.disabled,
      stateContext = formControlContext.state,
      indentContext = formControlContext.indent,
      rest = _objectWithoutProperties(formControlContext, _excluded); // State to hold the id of the input


  var id = React.useCallback(useRandomId(props === null || props === void 0 ? void 0 : props.id), []); // Side effect for when the `id` is updated...

  React.useEffect(function () {
    // If input is being tracked and `id` is defined,
    if (!(props !== null && props !== void 0 && props.noContext) && id) {
      // Add input to `FormControl` contexts
      add(id, props);
    } // When dismounting...


    return function () {
      // If input is in contexts,
      if (context !== null && context !== void 0 && context[id]) {
        // Remove input from `FormControl`
        remove(id);
      }
    };
  }, [id]); // Side effect for when component's `disabled` prop changes...

  React.useEffect(function () {
    // If input is being tracked and `id` is defined,
    if (!(props !== null && props !== void 0 && props.noContext) && id) {
      // Update input context with `disabled` value
      update(id, {
        disabled: props.disabled
      });
    }
  }, [props.disabled]); // Side effect for when the component's `state` prop changes...

  React.useEffect(function () {
    // If input is being tracked and `id` is defined,
    if (!(props !== null && props !== void 0 && props.noContext) && id) {
      // Update input context with `state` value
      update(id, {
        state: props.state
      });
    }
  }, [props.state]); // Map contexts to a list of control inputs

  var controls = Object.keys(context).map(function (key) {
    return _extends({}, context[key]);
  }).filter(function (control) {
    return Object.keys(control).length !== 0;
  }); // Calculate what helper text should appear as from form control context

  var disabled = disabledContext || controls.some(function (control) {
    return control.disabled === true;
  });
  var indent = indentContext || (controls.length > 0 ? (_controls$filter$ = controls.filter(function (control) {
    return typeof control.indent === 'string';
  })[0]) === null || _controls$filter$ === void 0 ? void 0 : _controls$filter$.indent : 'size_16');

  var state = stateContext || function () {
    // First priority state, error
    if (controls.some(function (control) {
      return control.state === 'error';
    })) {
      return 'error';
    } // Second priority state, error


    if (controls.some(function (control) {
      return control.state === 'warning';
    })) {
      return 'warning';
    } // Third priority state, error


    if (controls.some(function (control) {
      return control.state === 'info';
    })) {
      return 'info';
    } // Finally, no states, default


    return 'default';
  }(); // If there are multiple controls, don't indent


  if (controls.length > 1) indent = false; // Provide contexts and `FormControl` values

  return _extends({
    context: context,
    add: add,
    remove: remove,
    update: update
  }, rest, {
    disabled: disabled,
    indent: indent,
    state: state,
    id: id
  });
}

export { useFormControl };
export default useFormControl;