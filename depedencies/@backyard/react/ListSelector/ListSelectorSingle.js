"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListSelectorSingle = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListOption = _interopRequireDefault(require("../ListOption"));

var _useKeyDown = require("../utils/hooks/useKeyDown");

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _ListSelectorSingleWrapper = _interopRequireDefault(require("./styles/ListSelectorSingleWrapper"));

var _useListSelector2 = _interopRequireDefault(require("./useListSelector"));

var _clampOption = _interopRequireDefault(require("./utils/clampOption"));

var _excluded = ["children", "className", "id", "enableGlobalKeyDown", "renderItem", "width", "shape", "defaultValue", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React List Selector Single
 *
 * @internal
 *
 * Single selection list handler component
 */
var ListSelectorSingle = /*#__PURE__*/React.forwardRef(function ListSelectorSingle(props, ref) {
  var _useGlobalKeyDown;

  var children = props.children,
      className = props.className,
      id = props.id,
      _props$enableGlobalKe = props.enableGlobalKeyDown,
      enableGlobalKeyDown = _props$enableGlobalKe === void 0 ? false : _props$enableGlobalKe,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? function (props, ref) {
    return /*#__PURE__*/React.createElement(_ListOption["default"], (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  } : _props$renderItem,
      _props$width = props.width,
      width = _props$width === void 0 ? 'auto' : _props$width,
      shape = props.shape,
      defaultValue = props.defaultValue,
      valueProp = props.value,
      other = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var innerRef = (0, _useForwardedRef["default"])(ref);

  var _React$useState = React.useState(-1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      focusedOption = _React$useState2[0],
      setFocusedOptionState = _React$useState2[1];

  var _React$useState3 = React.useState(valueProp || defaultValue),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var _useListSelector = (0, _useListSelector2["default"])((0, _extends2["default"])({}, props, {
    value: value,
    innerRef: innerRef
  })),
      items = _useListSelector.items,
      refs = _useListSelector.refs;

  var selectFocusedOption = function selectFocusedOption() {
    var focusedItem = items[focusedOption];

    if (focusedItem) {
      setValue(focusedItem.value);
    }
  };
  /**
   * Logic to handle setting currently focused option
   *
   * @param type
   */


  var setFocusedOption = function setFocusedOption(type) {
    // Set new focused option
    setFocusedOptionState(function (option) {
      var _refs$current, _refs$current$lookahe;

      // Clamp new option
      var newOption = (0, _clampOption["default"])(type, option, items); // Look ahead to next option for scrolling

      var lookaheadOption = (0, _clampOption["default"])(type, option, items); // Get lookahead option

      var listOption = (_refs$current = refs.current) === null || _refs$current === void 0 ? void 0 : (_refs$current$lookahe = _refs$current[lookaheadOption]) === null || _refs$current$lookahe === void 0 ? void 0 : _refs$current$lookahe.current; // Scroll option into view

      listOption === null || listOption === void 0 ? void 0 : listOption.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      return newOption;
    });
  };

  (0, _useKeyDown.useGlobalKeyDown)(enableGlobalKeyDown, (_useGlobalKeyDown = {}, (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowUp, function () {
    return setFocusedOption('decrement');
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowDown, function () {
    return setFocusedOption('increment');
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Enter, function () {
    return selectFocusedOption();
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Space, function () {
    return selectFocusedOption();
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Home, function () {
    return setFocusedOption('first');
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.End, function () {
    return setFocusedOption('last');
  }), _useGlobalKeyDown));
  var focusedItem = items[focusedOption];

  if (focusedItem) {
    focusedItem.className = (0, _classnames["default"])(focusedItem.className, 'focus');
  } // Side effect for when `value` is modified externally...


  React.useEffect(function () {
    // If `value` is not already given,
    if (valueProp !== value) {
      // Set new value
      setValue(valueProp);
    }
  }, [valueProp]);
  /**
   * Layout:
   *
   *  <ListContext.Provider>
   *      <ul>
   *          ...
   *      </ul>
   *  </ListContext.Provider>
   */

  return /*#__PURE__*/React.createElement(_ListSelectorSingleWrapper["default"], (0, _extends2["default"])({
    id: id,
    className: (0, _classnames["default"])("list list-selector single-selector shape--".concat(shape), className),
    ref: innerRef,
    width: width
  }, other), items.map(function (item, index) {
    return renderItem((0, _extends2["default"])({
      key: index,
      shape: 'squared'
    }, item), item.ref);
  }));
});
exports.ListSelectorSingle = ListSelectorSingle;
var _default = ListSelectorSingle;
exports["default"] = _default;