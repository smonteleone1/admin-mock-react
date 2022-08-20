import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _pt from "prop-types";
var _excluded = ["children", "disabled", "state", "indent"];

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import * as React from 'react';
import { clean } from './utils';
/**
 * Form Control Context
 */

var FormControlContext = /*#__PURE__*/React.createContext(null);
/**
 * Form Control Consumer
 */

var FormControlConsumer = FormControlContext.Consumer;

var mapChildren = function mapChildren(children, callback) {
  return React.Children.map(children, function (child) {
    var _child$props;

    return /*#__PURE__*/React.isValidElement(child) && child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && _child$props.children ? [callback(child), mapChildren(child.props.children, callback)] : callback(child);
  });
};

var indentLookup = function indentLookup(bdsName) {
  return {
    Select: 'size_16',
    TextInput: 'size_16',
    FormControlLabel: 'size_36'
  }[bdsName] || false;
};

var initialIndent = function initialIndent(children) {
  var indents = mapChildren(children, function (child) {
    var _type;

    return /*#__PURE__*/React.isValidElement(child) ? (_type = child.type) === null || _type === void 0 ? void 0 : _type.bdsName : false;
  }).map(function (child) {
    return indentLookup(child);
  }).filter(function (indent) {
    return typeof indent === 'string';
  }).sort(function (a, b) {
    return b.localeCompare(a, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });

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


var FormControlProvider = function FormControlProvider(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      state = _ref.state,
      indentProp = _ref.indent,
      override = _objectWithoutProperties(_ref, _excluded);

  // Memoize props to react to changes
  var props = React.useMemo(function () {
    return {
      disabled: disabled,
      state: state,
      indent: indentProp || initialIndent(children)
    };
  }, [disabled, state, indentProp]); // Context is a record of `id => FormContextProps`
  // It will track all controlled form inputsF
  // and can be used to synchronize and share data
  // between the entire form

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      context = _React$useState2[0],
      setContext = _React$useState2[1];
  /**
   * Merge new values into old values.
   * Props provided to `FormControl` have the highest priority.
   *
   * @param oldValues - old context props to merge into
   * @param newValues - new context props to merge
   */


  var merge = function merge(oldValues, newValues) {
    return _extends({}, clean(oldValues), clean(newValues), clean(props));
  };
  /**
   * Updates single input contexts
   *
   * @param id - id of form input to update
   * @param newContext - new context to update with
   */


  var update = function update(id, newContext) {
    setContext(function (oldContext) {
      return _extends({}, oldContext, _defineProperty({}, id, merge((oldContext === null || oldContext === void 0 ? void 0 : oldContext[id]) || {}, newContext)));
    });
  };
  /**
   * Adds single input to contexts
   *
   * @param id - id of form input to add
   * @param newContext - context to initialize with
   */


  var add = function add(id, newContext) {
    setContext(function (oldContext) {
      return _extends({}, oldContext, _defineProperty({}, id, merge((oldContext === null || oldContext === void 0 ? void 0 : oldContext[id]) || {}, newContext)));
    });
  };
  /**
   * Removes context by id from contexts
   *
   * @param id - id to context to remove
   */


  var remove = function remove(id) {
    setContext(function (oldContext) {
      var removedContext = oldContext[id],
          restContext = _objectWithoutProperties(oldContext, [id].map(_toPropertyKey));

      return restContext;
    });
  };

  return /*#__PURE__*/React.createElement(FormControlContext.Provider, {
    value: _extends({}, props, {
      context: context,
      setContext: setContext,
      update: update,
      add: add,
      remove: remove
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