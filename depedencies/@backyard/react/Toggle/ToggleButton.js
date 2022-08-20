"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToggleButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _persistSyntheticEvent = _interopRequireDefault(require("../utils/functions/persistSyntheticEvent"));

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _useRandomId = _interopRequireDefault(require("../utils/hooks/useRandomId"));

var _ToggleButtonBase = _interopRequireDefault(require("./styles/ToggleButtonBase"));

var _useToggle2 = _interopRequireDefault(require("./hooks/useToggle"));

var _excluded = ["id", "children", "className", "component", "variant", "state", "shape", "disabled", "ariaLabel", "selected", "onSelect", "onDeselect", "onClick", "value", "style"],
    _excluded2 = ["onSelect", "onDeselect"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var ToggleButton = /*#__PURE__*/React.forwardRef(function ToggleButton(_ref, ref) {
  var idProp = _ref.id,
      children = _ref.children,
      className = _ref.className,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? _IconButton["default"] : _ref$component,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'secondary' : _ref$variant,
      stateProp = _ref.state,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'squared' : _ref$shape,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'toggle button' : _ref$ariaLabel,
      _ref$selected = _ref.selected,
      selectedProp = _ref$selected === void 0 ? false : _ref$selected,
      onSelect = _ref.onSelect,
      onDeselect = _ref.onDeselect,
      _onClick = _ref.onClick,
      valueProp = _ref.value,
      styleProp = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Get toggle provider values
  var _useToggle = (0, _useToggle2["default"])(),
      toggles = _useToggle.toggles,
      toggled = _useToggle.toggled,
      dispatchToggle = _useToggle.dispatchToggle,
      handleToggle = _useToggle.handleToggle; // Hold button inner ref


  var innerRef = (0, _useForwardedRef["default"])(ref); // Generate id for toggle map

  var id = (0, _useRandomId["default"])(idProp); // Default value to id if not defined

  var value = typeof valueProp !== 'undefined' ? valueProp : id; // Calculate whether or not button is selected

  var selected = React.useMemo(function () {
    return selectedProp || ( // Check if toggled value is a Set
    (toggled === null || toggled === void 0 ? void 0 : toggled.value) instanceof Set ? // If so, check if it has the value
    toggled === null || toggled === void 0 ? void 0 : toggled.value.has(value) : // Else, check if it is the value
    (toggled === null || toggled === void 0 ? void 0 : toggled.value) === value);
  }, [selectedProp, toggled]); // Contextual props from `ToggleProvider`

  var context = React.useMemo(function () {
    return {
      selected: selected,
      state: stateProp || (selected ? 'selected' : 'unselected'),
      color: selected ? 'selected' : 'unselected',
      value: value,
      id: id,
      onSelect: onSelect,
      onDeselect: onDeselect,
      // Overwrite onClick handler...
      onClick: function onClick(event) {
        // Persist event through dispatch call
        (0, _persistSyntheticEvent["default"])(event); // Dispatch toggle action to
        // select or deselect button

        dispatchToggle({
          type: 'toggle',
          value: value,
          // Callback to handle toggle button callbacks
          callback: function callback(state, action) {
            return (// eslint-disable-next-line @typescript-eslint/no-use-before-define
              handleToggle(event, state, action, {
                onClick: _onClick
              })
            );
          }
        });
      },
      // Assign internal toggle id
      'data-toggle-id': id,
      // Set ref to list of refs for `Toggle` to use to
      // calculate the default value when enforcing selected
      // but no default value was provided
      ref: innerRef
    };
  }, [id, selected]); // Side effect for when id, innerref, or context changes

  React.useEffect(function () {
    // If id and ref defined,
    if (id && innerRef.current) {
      // Update toggles with new/changed context
      toggles.current[id] = context;
    }
  }, [innerRef, id, context]); // Extract `onSelect` and `onDeselect` to remove console error

  var onSelectContext = context.onSelect,
      onDeselectContext = context.onDeselect,
      contextWithoutTrigger = (0, _objectWithoutProperties2["default"])(context, _excluded2);
  return /*#__PURE__*/React.createElement(_ToggleButtonBase["default"], (0, _extends2["default"])({
    as: component,
    className: (0, _classnames["default"])("toggle-button state--".concat(context.state), className, context.selected && "selected"),
    variant: variant,
    disabled: disabled,
    color: "neutral",
    size: "small",
    "aria-label": ariaLabel // aria-checked={selected}
    ,
    shape: shape,
    style: (0, _extends2["default"])({
      '--btn-icon': 'var(--bds-color-icon-solid-inverse)'
    }, styleProp)
  }, props, contextWithoutTrigger), children);
});
exports.ToggleButton = ToggleButton;
ToggleButton.bdsName = 'ToggleButton';
var _default = ToggleButton;
exports["default"] = _default;