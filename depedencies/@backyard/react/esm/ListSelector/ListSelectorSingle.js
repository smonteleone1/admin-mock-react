import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "id", "enableGlobalKeyDown", "renderItem", "width", "shape", "defaultValue", "value"];
import * as React from 'react';
import classNames from 'classnames';
import ListOption from '../ListOption';
import { useGlobalKeyDown, keycode } from '../utils/hooks/useKeyDown';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import ListSelectorSingleWrapper from './styles/ListSelectorSingleWrapper';
import useListSelector from './useListSelector';
import clampOption from './utils/clampOption';
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
    return /*#__PURE__*/React.createElement(ListOption, _extends({}, props, {
      ref: ref
    }));
  } : _props$renderItem,
      _props$width = props.width,
      width = _props$width === void 0 ? 'auto' : _props$width,
      shape = props.shape,
      defaultValue = props.defaultValue,
      valueProp = props.value,
      other = _objectWithoutProperties(props, _excluded);

  var innerRef = useForwardedRef(ref);

  var _React$useState = React.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedOption = _React$useState2[0],
      setFocusedOptionState = _React$useState2[1];

  var _React$useState3 = React.useState(valueProp || defaultValue),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var _useListSelector = useListSelector(_extends({}, props, {
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
      var newOption = clampOption(type, option, items); // Look ahead to next option for scrolling

      var lookaheadOption = clampOption(type, option, items); // Get lookahead option

      var listOption = (_refs$current = refs.current) === null || _refs$current === void 0 ? void 0 : (_refs$current$lookahe = _refs$current[lookaheadOption]) === null || _refs$current$lookahe === void 0 ? void 0 : _refs$current$lookahe.current; // Scroll option into view

      listOption === null || listOption === void 0 ? void 0 : listOption.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      return newOption;
    });
  };

  useGlobalKeyDown(enableGlobalKeyDown, (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return setFocusedOption('decrement');
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return setFocusedOption('increment');
  }), _defineProperty(_useGlobalKeyDown, keycode.Enter, function () {
    return selectFocusedOption();
  }), _defineProperty(_useGlobalKeyDown, keycode.Space, function () {
    return selectFocusedOption();
  }), _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return setFocusedOption('first');
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return setFocusedOption('last');
  }), _useGlobalKeyDown));
  var focusedItem = items[focusedOption];

  if (focusedItem) {
    focusedItem.className = classNames(focusedItem.className, 'focus');
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

  return /*#__PURE__*/React.createElement(ListSelectorSingleWrapper, _extends({
    id: id,
    className: classNames("list list-selector single-selector shape--".concat(shape), className),
    ref: innerRef,
    width: width
  }, other), items.map(function (item, index) {
    return renderItem(_extends({
      key: index,
      shape: 'squared'
    }, item), item.ref);
  }));
});
export { ListSelectorSingle };
export default ListSelectorSingle;