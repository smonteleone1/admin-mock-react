"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Select = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TriangleUp2 = _interopRequireDefault(require("@backyard/icons/TriangleUp"));

var _TriangleDown2 = _interopRequireDefault(require("@backyard/icons/TriangleDown"));

var _persistSyntheticEvent = _interopRequireDefault(require("../utils/functions/persistSyntheticEvent"));

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _useRandomId = _interopRequireDefault(require("../utils/hooks/useRandomId"));

var _ThemeProvider = require("../ThemeProvider");

var _useFormControl = require("../FormControl/hooks/useFormControl");

var _Option = _interopRequireDefault(require("./Option"));

var _SelectWrapper = _interopRequireDefault(require("./styles/SelectWrapper"));

var _SelectFieldset = _interopRequireDefault(require("./styles/SelectFieldset"));

var _SelectFormControl = _interopRequireDefault(require("./styles/SelectFormControl"));

var _SelectLabel = _interopRequireDefault(require("./styles/SelectLabel"));

var _TriangleUp, _TriangleDown;

var _excluded = ["label"],
    _excluded2 = ["children", "className", "defaultValue", "disabled", "iconOpened", "iconClosed", "id", "interaction", "stacked", "label", "onChange", "onClick", "onKeyDown", "onFocus", "onBlur", "onTouchStart", "onTouchEnd", "open", "readOnly", "shape", "state", "itemBefore", "size", "value", "options", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Get children of `Select` as `Option`s
 *
 * @param {React.Children} children - children prop of `Select`
 * @param {bool} disabled - disabled prop of `Select`
 */
var getOptionChildren = function getOptionChildren(children) {
  var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? typeof child.props.children === 'string' || typeof child.props.children === 'undefined' ? /*#__PURE__*/React.cloneElement(child, {
      disabled: child.props.disabled || disabled
    }) : getOptionChildren(child.props.children, child.props.disabled) : null;
  }).filter(Boolean);
};
/**
 * Get children as options from `Select` and map them into array data structure
 *
 * @param {React.Children} children - children prop of `Select`
 */


var getOptions = function getOptions(children) {
  return React.Children.toArray(getOptionChildren(children)).map(function (child, index) {
    return /*#__PURE__*/React.isValidElement(child) ? {
      index: index,
      value: child.props.value,
      text: child.props.label || child.props.children,
      label: child.props.label || child.props.children,
      disabled: child.props.disabled
    } : null;
  });
};
/**
 * Get single option data structure from children
 *
 * @param {React.Children} children - children prop of `Select`
 * @param {string} value - value to search for
 */


var getOption = function getOption(children, value) {
  var options = getOptions(children);
  var selectedOption = options.filter(function (option) {
    return option.value === value;
  })[0];
  return selectedOption;
};

var getChildren = function getChildren(options, children) {
  return options ? options.map(function (_ref, index) {
    var optionLabel = _ref.label,
        option = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    return /*#__PURE__*/React.createElement(_Option["default"], (0, _extends2["default"])({
      key: index
    }, option), optionLabel);
  }) : children;
};
/**
 * Returns true if option is defined with value that is
 *  * not undefined, and
 *  * not null, and
 *  * not an empty string
 *
 * @param {SelectOptionInfo} option - Option to validate
 * @return {Boolean}
 */


var isComplete = function isComplete(option) {
  return typeof (option === null || option === void 0 ? void 0 : option.value) !== 'undefined' && (option === null || option === void 0 ? void 0 : option.value) !== null && (option === null || option === void 0 ? void 0 : option.value) !== '';
};
/**
 * Backyard React Select
 *
 * Select component that uses native option selection; see `Dropdown` for a custom selector...
 *
 * ```
 *  <Select>
 *      <Option value="1">Option 1</Option>
 *      <Option value="2">Option 2</Option>
 *      <Option value="3">Option 3</Option>
 *  </Select>
 * ```
 *
 * Can group options via `OptionGroup` and allow native selection to handle visuals
 *
 * ```
 *  <Select>
 *      <OptionGroup
 *          label="Group 1"
 *      >
 *          <Option value="11">Option 1</Option>
 *          <Option value="12">Option 2</Option>
 *          <Option value="13">Option 3</Option>
 *      </OptionGroup>
 *      <OptionGroup
 *          label="Group 2"
 *      >
 *          <Option value="21">Option 1</Option>
 *          <Option value="22">Option 2</Option>
 *          <Option value="23">Option 3</Option>
 *      </OptionGroup>
 *  </Select>
 * ```
 *
 * To include helper text, wrap in `FormControl` and use `FormHelperText` to sync visual states
 *
 * ```
 *  <FormControl>
 *      <Select>
 *          <Option value="1">Option 1</Option>
 *          <Option value="2">Option 2</Option>
 *          <Option value="3">Option 3</Option>
 *      </Select>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */


var Select = /*#__PURE__*/React.forwardRef(function Select(_ref2, ref) {
  var _span;

  var childrenProp = _ref2.children,
      className = _ref2.className,
      defaultValue = _ref2.defaultValue,
      _ref2$disabled = _ref2.disabled,
      disabledProp = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$iconOpened = _ref2.iconOpened,
      iconOpenedProp = _ref2$iconOpened === void 0 ? _TriangleUp || (_TriangleUp = /*#__PURE__*/React.createElement(_TriangleUp2["default"], null)) : _ref2$iconOpened,
      _ref2$iconClosed = _ref2.iconClosed,
      iconClosedProp = _ref2$iconClosed === void 0 ? _TriangleDown || (_TriangleDown = /*#__PURE__*/React.createElement(_TriangleDown2["default"], null)) : _ref2$iconClosed,
      idProp = _ref2.id,
      _ref2$interaction = _ref2.interaction,
      interactionProp = _ref2$interaction === void 0 ? false : _ref2$interaction,
      _ref2$stacked = _ref2.stacked,
      stacked = _ref2$stacked === void 0 ? false : _ref2$stacked,
      label = _ref2.label,
      onChange = _ref2.onChange,
      onClick = _ref2.onClick,
      onKeyDown = _ref2.onKeyDown,
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      _onTouchStart = _ref2.onTouchStart,
      _onTouchEnd = _ref2.onTouchEnd,
      _ref2$open = _ref2.open,
      openProp = _ref2$open === void 0 ? false : _ref2$open,
      _ref2$readOnly = _ref2.readOnly,
      readOnly = _ref2$readOnly === void 0 ? false : _ref2$readOnly,
      shapeProp = _ref2.shape,
      _ref2$state = _ref2.state,
      stateProp = _ref2$state === void 0 ? 'default' : _ref2$state,
      itemBefore = _ref2.itemBefore,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      value = _ref2.value,
      options = _ref2.options,
      wrapperProps = _ref2.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Select'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Calculate `children` if `options` is given

  var children = getChildren(options, childrenProp); // Memoized context props...

  var context = React.useMemo(function () {
    return {
      disabled: disabledProp,
      interaction: defaultValue || value ? 'completed' : 'incomplete',
      open: openProp,
      state: stateProp
    };
  }, [disabledProp, interactionProp, openProp, stateProp]); // Assign random id to input
  // if id not provided
  // Accessibilty for label -> input

  var id = (0, _useRandomId["default"])(idProp); // Get controlled option from children, if defined

  var controlledOption = getOption(children, value); // Get default option from children, if defined

  var defaultOption = getOption(children, defaultValue) || getOptions(children)[0]; // Hold current option state

  var _React$useState = React.useState(controlledOption || defaultOption),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      option = _React$useState2[0],
      setOption = _React$useState2[1]; // Hold current interaction state


  var _React$useState3 = React.useState(defaultValue || value ? 'completed' : 'incomplete'),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      interaction = _React$useState4[0],
      setInteraction = _React$useState4[1]; // Hold completion state


  var _React$useState5 = React.useState(isComplete(option) ? 'completed' : 'incomplete'),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      completed = _React$useState6[0],
      setCompleted = _React$useState6[1];

  var _React$useState7 = React.useState(label),
      _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
      selectLabel = _React$useState8[0],
      setSelectLabel = _React$useState8[1]; // Hold `input` ref


  var innerRef = (0, _useForwardedRef["default"])(ref); // Uses FormControl

  var control = (0, _useFormControl.useFormControl)({
    disabled: context.disabled,
    state: context.state,
    indent: 'size_16'
  }); // Allow FormControl to override props

  var state = control.state || context.state;
  var disabled = control.disabled || context.disabled;
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Clamp interaction to `active` when
   * external component provides open flag
   *
   * @param {string} interaction - interaction to set
   */


  function dispatchInteraction() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : context.interaction;

    // If open,
    if (context.open) {
      // Clamp interaction to 'active'
      setInteraction('active');
    } else {
      // Else, set interaction
      setInteraction(action);
    }
  }
  /**
   * Handles `onChange` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  var handleChange = function handleChange(event) {
    // Persist event
    (0, _persistSyntheticEvent["default"])(event); // Set current option to new selected option

    setOption(getOption(children, event.target.value)); // Set completed if necessary

    setCompleted(event.target.value ? 'completed' : 'incomplete');
    setInteraction(event.target.value !== '' ? 'completed' : 'incomplete'); // Set focused interaction

    dispatchInteraction('focused');
    var selectOption = getOption(children, event.target.value);

    if (stacked) {
      var LabelElement = function LabelElement() {
        return /*#__PURE__*/React.createElement("div", {
          className: "label-element"
        }, _span || (_span = /*#__PURE__*/React.createElement("span", {
          className: "select--label"
        }, label)), /*#__PURE__*/React.createElement("span", {
          className: "select--value"
        }, selectOption.label));
      };

      setSelectLabel( /*#__PURE__*/React.createElement(LabelElement, null));
    } // If `onChange` prop defined,


    if (typeof onChange === 'function') {
      // Trigger function
      onChange(getEvent(event), selectOption);
    }
  };
  /**
   * Handles `onClick` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  var handleClick = function handleClick(event) {
    // Persist event
    (0, _persistSyntheticEvent["default"])(event); // Set active interaction

    dispatchInteraction('active'); // If `onClick` prop defined,

    if (typeof onClick === 'function') {
      // Trigger function
      onClick(getEvent(event), option);
    }
  };
  /**
   * Handles `onKeyDown` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  var handleKeyDown = function handleKeyDown(event) {
    // Persist event
    (0, _persistSyntheticEvent["default"])(event); // Get key id

    var key = event.key || event.which; // If space, up arrow, or down arrow pressed,

    if ([' ', 32, 'ArrowUp', 38, 'ArrowDown', 40, 'Enter'].indexOf(key) >= 0) {
      // Set active interaction
      dispatchInteraction('active');
    } // If `onKeyDown` prop defined,


    if (typeof onKeyDown === 'function') {
      // Trigger function
      onKeyDown(getEvent(event), option);
    }
  };
  /**
   * Handles `onFocus` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  var handleFocus = function handleFocus(event) {
    // Persist event
    (0, _persistSyntheticEvent["default"])(event); // Set focused interaction

    dispatchInteraction('focused'); // If `onFocus` prop defined,

    if (typeof onFocus === 'function') {
      // Trigger function
      onFocus(getEvent(event), option);
    }
  };
  /**
   * Handles `onBlur` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  var handleBlur = function handleBlur(event) {
    // Persist event
    (0, _persistSyntheticEvent["default"])(event);

    if (event.target.value !== '' || defaultOption && defaultOption.disabled && defaultOption.text) {
      setInteraction('completed');
    } else {
      dispatchInteraction('incomplete');
    } // Set completed if necessary


    setCompleted(isComplete(option) ? 'completed' : 'incomplete'); // Remove interaction
    // If `onBlur` prop defined,

    if (typeof onBlur === 'function') {
      // Trigger function
      onBlur(getEvent(event), option);
    }
  }; // Event handlers for mobile space


  var mobileEventHandlers = {
    /**
     * Handles `onTouchStart` for input
     *
     * For IOS devices, Safari will display a native
     * select overlay on touch start. Instead, we want
     * the touch start event to function like the click
     * event to display native select when applicable.
     *
     * @param {Event} event - DOM event
     */
    onTouchStart: function onTouchStart(event) {
      // Prevent native touch overlays
      event.preventDefault(); // Click event

      handleClick(event); // If `onTouchStart` prop defined,

      if (typeof _onTouchStart === 'function') {
        // Trigger function
        _onTouchStart(getEvent(event));
      }
    },

    /**
     * Handles `onTouchEnd` for input
     *
     * For IOS devices, Safari will display a native
     * select overlay on touch end. This prevents that
     * when the select is read only. When the select is
     * not, it will function normally and display the
     * native select overlay.
     *
     * @param {Event} event - DOM event
     */
    onTouchEnd: function onTouchEnd(event) {
      // If read only,
      if (readOnly) {
        // Prevent native touch overlays
        event.preventDefault();
      } // Blur input


      handleBlur(event); // If `onTouchEnd` prop defined,

      if (typeof _onTouchEnd === 'function') {
        // Trigger function
        _onTouchEnd(getEvent(event));
      }
    }
  }; // Select value props, if defined

  var valueProps = (0, _extends2["default"])({}, typeof value !== 'undefined' ? {
    value: option === null || option === void 0 ? void 0 : option.value
  } : {}, typeof value === 'undefined' ? {
    defaultValue: defaultOption === null || defaultOption === void 0 ? void 0 : defaultOption.value
  } : {}); // Clone provided opened icon

  var iconOpened = /*#__PURE__*/React.cloneElement(iconOpenedProp, {
    className: (0, _classnames["default"])("select--arrow item--after", iconOpenedProp.props.className)
  }); // Clone provided closed icon

  var iconClosed = /*#__PURE__*/React.cloneElement(iconClosedProp, {
    className: (0, _classnames["default"])("select--arrow item--after", iconClosedProp.props.className)
  }); // Side effect for when `option` changes...

  React.useEffect(function () {
    // Calculate whether input was completed
    setCompleted(isComplete(option) ? 'completed' : 'incomplete');
  }, [option]); // Side effect for when `value` changes...

  React.useEffect(function () {
    // If `value` is defined and different,
    if (typeof value !== 'undefined' && value !== (option === null || option === void 0 ? void 0 : option.value)) {
      // Set new option
      setOption(getOption(children, value));
    }
  }, [value]); // Side effect for when `options` changes...

  React.useEffect(function () {
    // If `value` is defined and different,
    if (typeof value !== 'undefined' && value !== (option === null || option === void 0 ? void 0 : option.value)) {
      // Set new option
      setOption(getOption(children, value));
    }
  }, [options]); // Side effect for when `open` prop changes...

  React.useEffect(function () {
    // Dispatch active interaction
    dispatchInteraction(openProp ? 'active' : 'completed');
  }, [openProp]);
  /**
   * Layout:
   *
   *  <div wrapper>
   *      <select>
   *          <option 1>
   *          <option 1>
   *          ...
   *      </select>
   *      <div container>
   *          <icon (icon before) />
   *          <span>
   *              <label />
   *              <span value />
   *          </span>
   *          <arrow (icon after) />
   *      </div>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_SelectWrapper["default"], (0, _extends2["default"])({}, wrapperProps, {
    className: (0, _classnames["default"])("backyard select--wrapper shape--".concat(shape, " size--").concat(size), state !== 'default' && "state--".concat(state), itemBefore && 'item--before', stacked && 'stacked', wrapperProps && wrapperProps.className),
    readOnly: readOnly
  }), /*#__PURE__*/React.createElement(_SelectLabel["default"], {
    htmlFor: id,
    className: (0, _classnames["default"])("input-label size--".concat(size, " state--").concat(state), completed === 'incomplete' ? 'incomplete' : 'completed', interaction && "interaction--".concat(interaction), itemBefore && 'with-icon-before')
  }, (0, _typeof2["default"])(label) === 'object' ? label : selectLabel), /*#__PURE__*/React.createElement(_SelectFormControl["default"], {
    className: (0, _classnames["default"])("form-control shape--".concat(shape, " size--").concat(size), state !== 'default' && "state--".concat(state), interaction && "interaction--".concat(interaction))
  }, itemBefore ? /*#__PURE__*/React.cloneElement(itemBefore, {
    className: (0, _classnames["default"])(itemBefore.props.className, 'item--before')
  }) : null, /*#__PURE__*/React.createElement("select", (0, _extends2["default"])({
    id: id,
    "aria-label": id,
    className: (0, _classnames["default"])('select--input', className, interaction),
    disabled: disabled || null,
    "data-invalid": state === 'error' || null,
    "aria-invalid": state === 'error' || null,
    ref: innerRef,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, mobileEventHandlers, valueProps, props), children), interaction === 'active' ? iconOpened : iconClosed, /*#__PURE__*/React.createElement(_SelectFieldset["default"], {
    className: (0, _classnames["default"])("text-input-fieldset size--".concat(size), openProp ? 'open' : 'closed', completed === 'incomplete' ? 'incomplete' : 'completed', interaction && "interaction--".concat(interaction), state !== 'default' && "state--".concat(state)),
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("span", null, (0, _typeof2["default"])(label) === 'object' ? label : selectLabel)))));
});
exports.Select = Select;
Select.bdsName = 'Select';
var _default = Select;
exports["default"] = _default;