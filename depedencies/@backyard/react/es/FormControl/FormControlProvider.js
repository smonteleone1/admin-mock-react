import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";
const _excluded = ["children", "disabled", "state", "indent"];

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import * as React from 'react';
import { clean } from './utils';
/**
 * Form Control Context
 */

const FormControlContext = /*#__PURE__*/React.createContext(null);
/**
 * Form Control Consumer
 */

const FormControlConsumer = FormControlContext.Consumer;

const mapChildren = (children, callback) => React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) && child?.props?.children ? [callback(child), mapChildren(child.props.children, callback)] : callback(child));

const indentLookup = bdsName => ({
  Select: 'size_16',
  TextInput: 'size_16',
  FormControlLabel: 'size_36'
})[bdsName] || false;

const initialIndent = children => {
  const indents = mapChildren(children, child => /*#__PURE__*/React.isValidElement(child) ? child.type?.bdsName : false).map(child => indentLookup(child)).filter(indent => typeof indent === 'string').sort((a, b) => b.localeCompare(a, undefined, {
    numeric: true,
    sensitivity: 'base'
  }));

  if (indents.length > 1) {
    return 'size_0';
  }

  return indents[0];
};
/**
 * @internal
 * Backyard React Form Control Provider
 *
 * Use the hook `useFormControl` instead of this provider.
 *
 * Provides values to children and handles state management of the `FormControl` and its children.
 */


const FormControlProvider = _ref => {
  let {
    children,
    disabled,
    state,
    indent: indentProp
  } = _ref,
      override = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Memoize props to react to changes
  const props = React.useMemo(() => ({
    disabled,
    state,
    indent: indentProp || initialIndent(children)
  }), [disabled, state, indentProp]); // Context is a record of `id => FormContextProps`
  // It will track all controlled form inputsF
  // and can be used to synchronize and share data
  // between the entire form

  const [context, setContext] = React.useState({});
  /**
   * Merge new values into old values.
   * Props provided to `FormControl` have the highest priority.
   *
   * @param oldValues - old context props to merge into
   * @param newValues - new context props to merge
   */

  const merge = (oldValues, newValues) => _extends({}, clean(oldValues), clean(newValues), clean(props));
  /**
   * Updates single input contexts
   *
   * @param id - id of form input to update
   * @param newContext - new context to update with
   */


  const update = (id, newContext) => {
    setContext(oldContext => _extends({}, oldContext, {
      [id]: merge(oldContext?.[id] || {}, newContext)
    }));
  };
  /**
   * Adds single input to contexts
   *
   * @param id - id of form input to add
   * @param newContext - context to initialize with
   */


  const add = (id, newContext) => {
    setContext(oldContext => _extends({}, oldContext, {
      [id]: merge(oldContext?.[id] || {}, newContext)
    }));
  };
  /**
   * Removes context by id from contexts
   *
   * @param id - id to context to remove
   */


  const remove = id => {
    setContext(oldContext => {
      const restContext = _objectWithoutPropertiesLoose(oldContext, [id].map(_toPropertyKey));

      return restContext;
    });
  };

  return /*#__PURE__*/React.createElement(FormControlContext.Provider, {
    value: _extends({}, props, {
      context,
      setContext,
      update,
      add,
      remove
    }, override)
  }, children);
};

process.env.NODE_ENV !== "production" ? FormControlProvider.propTypes = {
  children: _pt.node.isRequired,
  disabled: _pt.bool,
  indent: _pt.oneOfType([_pt.any, _pt.bool]),
  state: _pt.oneOf(['default', 'error', 'warning', 'info', 'success'])
} : void 0;
export { FormControlProvider, FormControlContext, FormControlConsumer };
export default FormControlProvider;