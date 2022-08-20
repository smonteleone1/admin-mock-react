import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["disabled", "onChange", "children", "options", "innerRef", "defaultValue", "value"],
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
const isValid = value => typeof value !== 'undefined' && value !== null && value !== '';

const useListSelector = _ref => {
  let {
    disabled = false,
    onChange,
    children,
    options,
    innerRef,
    defaultValue,
    value: valueProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [value, setValue] = React.useState(valueProp || defaultValue);
  const refs = React.useRef([...new Array(options ? options.length : React.Children.count(children))].map(React.createRef));
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  } // eslint-disable-next-line no-shadow


  const handleClick = (event, value, index) => {
    // Persist event propagation
    persistSyntheticEvent(event);
    const newEvent = getEvent(event);

    if (!disabled) {
      setValue(value);
      const container = innerRef.current;
      const item = newEvent.target;
      const label = item.textContent;

      if (onChange) {
        onChange(newEvent, {
          value,
          index,
          container,
          item,
          label,
          text: label,
          disabled: item.disabled
        });
      }
    }
  }; // Convert the basic item list to PaginationItem props objects


  const items = options ? options.map((_ref2, index) => {
    let {
      label: optionLabel,
      value: val
    } = _ref2,
        itemProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    const itemValue = typeof val !== 'undefined' ? val : String(index);
    const isSelected = Boolean(isValid(value) && itemValue === value);
    return _extends({
      onClick: event => {
        handleClick(event, itemValue, index);
      },
      index,
      selected: isSelected,
      'data-selected': isSelected ? 'true' : undefined,
      disabled,
      'aria-current': isSelected ? 'true' : undefined
    }, itemProps, {
      value: itemValue,
      children: optionLabel,
      ref: refs.current && refs.current[index]
    });
  }) : React.Children.toArray(children).map((item, index) => {
    const itemValue = item.props.value ? item.props.value : index; // eslint-disable-next-line eqeqeq

    const isSelected = Boolean(typeof value === 'number' && itemValue == value);
    const itemProps = item.props;
    return _extends({
      onClick: event => {
        handleClick(event, itemValue, index);
      },
      index,
      selected: isSelected,
      'data-selected': isSelected ? 'true' : undefined,
      disabled,
      'aria-current': isSelected ? 'true' : undefined
    }, itemProps, {
      value: itemValue,
      ref: refs.current && refs.current[index]
    });
  });
  React.useEffect(() => {
    if (valueProp !== undefined && valueProp !== value) {
      setValue(valueProp);
      const item = items.filter(i => i.value === valueProp)[0];

      if (item) {
        const container = innerRef.current;
        const ref = item.ref.current;
        const label = ref.textContent;

        if (onChange) {
          onChange({
            target: ref
          }, {
            value: item.value,
            index: item.index,
            container,
            item: ref,
            label,
            text: label,
            disabled: item.disabled
          });
        }
      }
    }
  }, [valueProp]);
  return _extends({
    refs,
    items
  }, props);
};

export { useListSelector };
export default useListSelector;