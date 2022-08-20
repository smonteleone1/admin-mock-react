import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "onChange", "children", "options", "innerRef", "defaultValue", "value"],
    _excluded2 = ["label", "value"];
import * as React from 'react';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';

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
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var refs = React.useRef(_toConsumableArray(new Array(options ? options.length : React.Children.count(children))).map(React.createRef));
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
    persistSyntheticEvent(event);
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
        itemProps = _objectWithoutProperties(_ref2, _excluded2);

    var itemValue = typeof val !== 'undefined' ? val : String(index);
    var isSelected = Boolean(isValid(value) && itemValue === value);
    return _extends({
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
    return _extends({
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
  return _extends({
    refs: refs,
    items: items
  }, props);
};

export { useListSelector };
export default useListSelector;