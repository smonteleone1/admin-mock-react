"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.initToggleReducer = initToggleReducer;
exports.toggleReducer = toggleReducer;
exports.toggleReducerHelper = toggleReducerHelper;
exports.useToggleReducer = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Initialize reducer to set data type depending on options and default value
 *
 * @param initValue - value to initialize reducer with
 * @param options - options from `Toggle`
 */
function initToggleReducer(initValue, _ref) {
  var exclusive = _ref.exclusive;

  // If toggle is exclusive,
  if (exclusive) {
    // Initialize non-iterator
    return typeof initValue !== 'undefined' ? {
      value: initValue
    } : null;
  } // If initial value is an array,


  if (Array.isArray(initValue)) {
    // Initialize Set iterator
    return {
      value: new Set(initValue)
    };
  } // If initial value is a Set,


  if (initValue instanceof Set) {
    // No change needed
    return {
      value: initValue
    };
  } // Initialize Set with initial value


  return {
    value: new Set([initValue])
  };
}
/**
 * Reducer function to handle updates to state via action
 *
 * @param state - current state of the reducer
 * @param action - action to perform on state
 * @param options - toggle options
 */


function toggleReducer(value, action, options) {
  var _initToggleReducer;

  // Get enforceSelected from options
  var enforceSelected = options.enforceSelected; // Switch on action type...

  switch (action.type) {
    // When 'select' action...
    case 'select':
      // If state is a Set,
      if (value instanceof Set) {
        // Create new instance of Set to tell React to re-render
        var newValue = new Set((0, _toConsumableArray2["default"])(value).filter(Boolean)); // If action value is defined and not null,

        if (typeof action.value !== 'undefined' && action.value !== null) {
          // Add value to Set
          newValue.add(action.value);
        } // Return new Set


        return newValue;
      } // Else, state is a single value,
      // Return new value


      return action.value;
    // When 'deselect' action...

    case 'deselect':
      // If state is a Set,
      if (value instanceof Set) {
        // Create new instance of Set to tell React to re-render
        var _newValue = new Set((0, _toConsumableArray2["default"])(value).filter(Boolean)); // If more than one toggle or not enforcing selected,


        if (_newValue.size > 1 || !enforceSelected) {
          // Delete value from Set
          _newValue["delete"](action.value);
        } // Retur new Set


        return _newValue;
      } // Else, state is a single value.
      // If enforcing selected,


      if (enforceSelected) {
        // Return last state value
        return value;
      } // Else, not enforcing selected,
      // Return no value


      return null;
    // When 'toggle' action...

    case 'toggle':
      // If state is a Set,
      if (value instanceof Set) {
        // If Set has action value,
        return value.has(action.value) ? // Return deselected state
        toggleReducer(value, (0, _extends2["default"])({}, action, {
          type: 'deselect'
        }), options) : // Return selected state
        toggleReducer(value, (0, _extends2["default"])({}, action, {
          type: 'select'
        }), options);
      } // Else, state is a single value,
      // If state is equivalent to action value,


      return value === action.value ? // Return deselected state
      toggleReducer(value, (0, _extends2["default"])({}, action, {
        type: 'deselect'
      }), options) : // Return selected state
      toggleReducer(value, (0, _extends2["default"])({}, action, {
        type: 'select'
      }), options);
    // When 'set' or 'reset' action...

    case 'set':
    case 'reset':
      // Re-initialzie reducer with new action value
      return (_initToggleReducer = initToggleReducer(action.value, options)) === null || _initToggleReducer === void 0 ? void 0 : _initToggleReducer.value;
    // By default,

    default:
      // No changes to state
      return value;
  }
}
/**
 * Toggle reducer helper to call `callback` if defined on new toggled state value
 *
 * @param state - current state value
 * @param action - action to perform on state
 * @param options - options from toggle
 */


function toggleReducerHelper(state, action, options) {
  // Reduce new state from action
  var newState = toggleReducer(state === null || state === void 0 ? void 0 : state.value, action, options); // Return new state from reducer

  return {
    value: newState,
    action: action
  };
}
/**
 * Toggle reducer hook to manage the `Toggle` state
 *
 * @param arg.value - controlled value of the toggle component
 * @param arg.defaultValue - default value of the toggle component
 * @param arg.options - options from toggle component
 * @param arg.refs - list of refs of toggle buttons from toggle component
 */


var useToggleReducer = function useToggleReducer(_ref2) {
  var value = _ref2.value,
      defaultValue = _ref2.defaultValue,
      options = _ref2.options,
      toggles = _ref2.toggles;
  // Get enforce selected option
  var enforceSelected = options.enforceSelected; // Use react reducer to manage toggle state

  var _React$useReducer = React.useReducer( // Helper to include options with state/action
  function (state, action) {
    return toggleReducerHelper(state, action, options);
  }, // Default value to initialize with
  defaultValue, // Initialize reducer with options
  function (initValue) {
    return initToggleReducer(initValue, options);
  }),
      _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
      toggle = _React$useReducer2[0],
      dispatchToggle = _React$useReducer2[1]; // Side effect to reset toggle reducer when defaultValue or options change...


  React.useEffect(function () {
    var _Object$entries$;

    // Calculate first toggle entry in provider
    var firstToggle = (_Object$entries$ = Object.entries(toggles.current)[0]) === null || _Object$entries$ === void 0 ? void 0 : _Object$entries$[1]; // If toggle buttons defined,

    if (firstToggle) {
      // If enforcing selected,
      if (enforceSelected) {
        // Reset reducer with default value if defined,
        // or first toggle button value
        // or zero if undefined
        dispatchToggle({
          type: 'reset',
          value: defaultValue || firstToggle.value
        });
      } else {
        // Else, not enforcing a selected value,
        // Reset reducer to default value if defined, else null
        dispatchToggle({
          type: 'reset',
          value: defaultValue || null
        });
      }
    }
  }, [options, defaultValue, toggles]); // Side effect to set a new toggle reducer value when `Toggle`'s value changes...

  React.useEffect(function () {
    // If value is not defined,
    if (typeof value !== 'undefined') {
      // Dispatch set action with value
      dispatchToggle({
        type: 'set',
        value: value
      });
    }
  }, [value]); // Return reducer state and dispatch

  return [toggle, dispatchToggle];
};

exports.useToggleReducer = useToggleReducer;
var _default = useToggleReducer;
exports["default"] = _default;