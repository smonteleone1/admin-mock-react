import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import useToggleReducer from './hooks/useToggleReducer';
var ToggleContext = /*#__PURE__*/React.createContext(null);
var ToggleConsumer = ToggleContext.Consumer;
var defaultUnselectedButton = {
  variant: 'ghost',
  state: 'unselected'
};
var defaultSelectedButton = {
  variant: 'ghost',
  state: 'selected'
};
/**
 * `ToggleProvider` Backyard React
 * 
 * @param props - Toggle props
 */

var ToggleProvider = function ToggleProvider(_ref) {
  var children = _ref.children,
      defaultValue = _ref.defaultValue,
      _ref$exclusive = _ref.exclusive,
      exclusiveProp = _ref$exclusive === void 0 ? false : _ref$exclusive,
      _ref$enforceSelected = _ref.enforceSelected,
      enforceSelectedProp = _ref$enforceSelected === void 0 ? false : _ref$enforceSelected,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? defaultUnselectedButton : _ref$buttonProps,
      _ref$selectedButtonPr = _ref.selectedButtonProps,
      selectedButtonProps = _ref$selectedButtonPr === void 0 ? defaultSelectedButton : _ref$selectedButtonPr,
      value = _ref.value,
      onChange = _ref.onChange;
  // Memoize options for prop changes
  var options = React.useMemo(function () {
    return {
      exclusive: exclusiveProp,
      enforceSelected: enforceSelectedProp
    };
  }, [exclusiveProp, enforceSelectedProp]); // Hold Records of each toggle being managed

  var toggles = React.useRef({}); // Use toggle reducer hook to manage toggled state of `ToggleButton`s

  var _useToggleReducer = useToggleReducer({
    value: value,
    defaultValue: defaultValue,
    options: options,
    toggles: toggles
  }),
      _useToggleReducer2 = _slicedToArray(_useToggleReducer, 2),
      toggled = _useToggleReducer2[0],
      dispatchToggle = _useToggleReducer2[1];
  /**
   * Handle toggle interaction from `ToggleButton`
   *
   * Handles callbacks for `ToggleButton` reduced toggled state for
   * - onClick
   * - onSelect
   * - onDeselect
   *
   * Handles callback for `Toggle` for
   * - onChange
   *
   * @param event - Mouse event from toggle click
   * @param state - New state from toggle action
   * @param action - Action performed on state
   * @param props - `ToggleButton` props to handle callbacks
   */


  var handleToggle = function handleToggle(event, state, action, _ref2) {
    var onClick = _ref2.onClick;
    // New state will be an array or a single value,
    // not a Set, which would end up confusing users
    var newValue = state === null || state === void 0 ? void 0 : state.value; // If state and toggled are Sets,

    if ((state === null || state === void 0 ? void 0 : state.value) instanceof Set && (toggled === null || toggled === void 0 ? void 0 : toggled.value) instanceof Set) {
      // Set is deleved to an array
      newValue = _toConsumableArray(state === null || state === void 0 ? void 0 : state.value);
    } // For each `ToggleButton` managed by provider...
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    Object.entries(toggles.current).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          id = _ref4[0],
          toggle = _ref4[1];

      // Destructure callbacks and value from child props
      var buttonValue = toggle.value,
          onSelect = toggle.onSelect,
          onDeselect = toggle.onDeselect; // Get default type from action
      // Will be calculated below to determin

      var type = action.type; // If state and toggled are Sets,

      if ((state === null || state === void 0 ? void 0 : state.value) instanceof Set && (toggled === null || toggled === void 0 ? void 0 : toggled.value) instanceof Set) {
        // If state has button value,
        if (state !== null && state !== void 0 && state.value.has(buttonValue)) {
          // If button is not currently toggled,
          if (!(toggled !== null && toggled !== void 0 && toggled.value.has(buttonValue))) {
            // Button was selected.
            type = 'select';
          } // Else, button was already toggled
          // No callbacks

        } else if (toggled !== null && toggled !== void 0 && toggled.value.has(buttonValue)) {
          // Else if toggled has button value,
          // but state does not,
          // Button was deselected.
          type = 'deselect';
        }
      } else if ((state === null || state === void 0 ? void 0 : state.value) === buttonValue) {
        // Else if current state is button value,
        // Button was selected
        type = 'select';
      } else if ((toggled === null || toggled === void 0 ? void 0 : toggled.value) === buttonValue) {
        // Else if button was toggled,
        // But is no longer current state value,
        // Button was deselected
        type = 'deselect';
      } // Switch on calculated type...


      switch (type) {
        // When selected...
        case 'select':
          // If onSelect callback is defined for current `ToggleButton`,
          if (onSelect) {
            // Trigger onSelect callback
            onSelect(event, buttonValue);
          }

          break;
        // When deselected...

        case 'deselect':
          // If onDeselect callback is defined for current `ToggleButton`,
          if (onDeselect) {
            // Trigger onDeselect callback
            onDeselect(event, buttonValue);
          }

          break;
        // By default...

        default: // Do nothing

      }
    }); // If onClick for `ToggleButton` defined,

    if (onClick) {
      // Trigger onClick callback
      onClick(event, newValue);
    } // If onChange for `Toggle` is defined,


    if (onChange) {
      // Trigger onChange callback
      onChange(event, newValue);
    }
  }; // Side effect for when the `toggled` state changes...


  React.useEffect(function () {
    var _toggled$action;

    // If toggled state has callback function,
    if (typeof (toggled === null || toggled === void 0 ? void 0 : (_toggled$action = toggled.action) === null || _toggled$action === void 0 ? void 0 : _toggled$action.callback) === 'function') {
      // Trigger callback function with new state and action
      toggled.action.callback(toggled, toggled === null || toggled === void 0 ? void 0 : toggled.action);
    }
  }, [toggled]);

  var context = _extends({
    toggles: toggles,
    toggled: toggled,
    dispatchToggle: dispatchToggle,
    buttonProps: buttonProps,
    selectedButtonProps: selectedButtonProps,
    handleToggle: handleToggle
  }, options);

  return /*#__PURE__*/React.createElement(ToggleContext.Provider, {
    value: context
  }, children);
};

export { ToggleContext, ToggleConsumer, ToggleProvider, defaultSelectedButton, defaultUnselectedButton };
export default ToggleProvider;