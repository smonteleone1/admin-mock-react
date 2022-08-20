"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormControlProvider = exports.FormControlContext = exports.FormControlConsumer = void 0;

var _toPropertyKey2 = _interopRequireDefault(require("@babel/runtime/helpers/toPropertyKey"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _excluded = ["children", "disabled", "state", "indent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Form Control Context
 */
var FormControlContext = /*#__PURE__*/React.createContext(null);
/**
 * Form Control Consumer
 */

exports.FormControlContext = FormControlContext;
var FormControlConsumer = FormControlContext.Consumer;
exports.FormControlConsumer = FormControlConsumer;

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
      override = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
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
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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
    return (0, _extends4["default"])({}, (0, _utils.clean)(oldValues), (0, _utils.clean)(newValues), (0, _utils.clean)(props));
  };
  /**
   * Updates single input contexts
   *
   * @param id - id of form input to update
   * @param newContext - new context to update with
   */


  var update = function update(id, newContext) {
    setContext(function (oldContext) {
      return (0, _extends4["default"])({}, oldContext, (0, _defineProperty2["default"])({}, id, merge((oldContext === null || oldContext === void 0 ? void 0 : oldContext[id]) || {}, newContext)));
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
      return (0, _extends4["default"])({}, oldContext, (0, _defineProperty2["default"])({}, id, merge((oldContext === null || oldContext === void 0 ? void 0 : oldContext[id]) || {}, newContext)));
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
          restContext = (0, _objectWithoutProperties2["default"])(oldContext, [id].map(_toPropertyKey2["default"]));
      return restContext;
    });
  };

  return /*#__PURE__*/React.createElement(FormControlContext.Provider, {
    value: (0, _extends4["default"])({}, props, {
      context: context,
      setContext: setContext,
      update: update,
      add: add,
      remove: remove
    }, override)
  }, children);
};

exports.FormControlProvider = FormControlProvider;
process.env.NODE_ENV !== "production" ? FormControlProvider.propTypes = {
  children: _propTypes["default"].node.isRequired,
  disabled: _propTypes["default"].bool,
  indent: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].bool]),
  state: _propTypes["default"].oneOf(['default', 'error', 'warning', 'info', 'success'])
} : void 0;
var _default = FormControlProvider;
exports["default"] = _default;