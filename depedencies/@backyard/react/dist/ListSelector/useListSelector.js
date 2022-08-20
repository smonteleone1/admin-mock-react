"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListSelector = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _persistSyntheticEvent = _interopRequireDefault(require("../utils/functions/persistSyntheticEvent"));

var _excluded = ["disabled", "onChange", "children", "options", "innerRef", "defaultValue", "value"],
    _excluded2 = ["label", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Returns true if option is defined with value that is
 *  * not undefined, and
 *  * not null, and
 *  * not an empty string
 *
 * @param {ListSelectorOption['value']} option - Option to validate
 * @return {Boolean}
 */
var isValid = function isValid(value) {
  return typeof value !== 'undefined' && value !== null && value !== '';
};

var useListSelector = function useListSelector(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      onChange = _ref.onChange,
      children = _ref.children,
      options = _ref.options,
      innerRef = _ref.innerRef,
      defaultValue = _ref.defaultValue,
      valueProp = _ref.value,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var refs = React.useRef((0, _toConsumableArray2["default"])(new Array(options ? options.length : React.Children.count(children))).map(React.createRef));
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  } // eslint-disable-next-line no-shadow


  var handleClick = function handleClick(event, value, index) {
    // Persist event propagation
    (0, _persistSyntheticEvent["default"])(event);
    var newEvent = getEvent(event);

    if (!disabled) {
      setValue(value);
      var container = innerRef.current;
      var _item = newEvent.target;
      var label = _item.textContent;

      if (onChange) {
        onChange(newEvent, {
          value: value,
          index: index,
          container: container,
          item: _item,
          label: label,
          text: label,
          disabled: _item.disabled
        });
      }
    }
  }; // Convert the basic item list to PaginationItem props objects


  var items = options ? options.map(function (_ref2, index) {
    var optionLabel = _ref2.label,
        val = _ref2.value,
        itemProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
    var itemValue = typeof val !== 'undefined' ? val : String(index);
    var isSelected = Boolean(isValid(value) && itemValue === value);
    return (0, _extends2["default"])({
      onClick: function onClick(event) {
        handleClick(event, itemValue, index);
      },
      index: index,
      selected: isSelected,
      'data-selected': isSelected ? 'true' : undefined,
      disabled: disabled,
      'aria-current': isSelected ? 'true' : undefined
    }, itemProps, {
      value: itemValue,
      children: optionLabel,
      ref: refs.current && refs.current[index]
    });
  }) : React.Children.toArray(children).map(function (item, index) {
    var itemValue = item.props.value ? item.props.value : index; // eslint-disable-next-line eqeqeq

    var isSelected = Boolean(typeof value === 'number' && itemValue == value);
    var itemProps = item.props;
    return (0, _extends2["default"])({
      onClick: function onClick(event) {
        handleClick(event, itemValue, index);
      },
      index: index,
      selected: isSelected,
      'data-selected': isSelected ? 'true' : undefined,
      disabled: disabled,
      'aria-current': isSelected ? 'true' : undefined
    }, itemProps, {
      value: itemValue,
      ref: refs.current && refs.current[index]
    });
  });
  React.useEffect(function () {
    if (valueProp !== undefined && valueProp !== value) {
      setValue(valueProp);
      var _item2 = items.filter(function (i) {
        return i.value === valueProp;
      })[0];

      if (_item2) {
        var container = innerRef.current;
        var ref = _item2.ref.current;
        var label = ref.textContent;

        if (onChange) {
          onChange({
            target: ref
          }, {
            value: _item2.value,
            index: _item2.index,
            container: container,
            item: ref,
            label: label,
            text: label,
            disabled: _item2.disabled
          });
        }
      }
    }
  }, [valueProp]);
  return (0, _extends2["default"])({
    refs: refs,
    items: items
  }, props);
};

exports.useListSelector = useListSelector;
var _default = useListSelector;
exports["default"] = _default;