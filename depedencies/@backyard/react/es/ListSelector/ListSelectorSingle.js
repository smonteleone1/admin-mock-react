import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "id", "enableGlobalKeyDown", "renderItem", "width", "shape", "defaultValue", "value"];
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

const ListSelectorSingle = /*#__PURE__*/React.forwardRef(function ListSelectorSingle(props, ref) {
  const {
    className,
    id,
    enableGlobalKeyDown = false,
    // eslint-disable-next-line no-shadow
    renderItem = (props, ref) => {
      return /*#__PURE__*/React.createElement(ListOption, _extends({}, props, {
        ref: ref
      }));
    },
    width = 'auto',
    shape,
    defaultValue,
    value: valueProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const innerRef = useForwardedRef(ref);
  const [focusedOption, setFocusedOptionState] = React.useState(-1);
  const [value, setValue] = React.useState(valueProp || defaultValue);
  const {
    items,
    refs
  } = useListSelector(_extends({}, props, {
    value,
    innerRef
  }));

  const selectFocusedOption = () => {
    const focusedItem = items[focusedOption];

    if (focusedItem) {
      setValue(focusedItem.value);
    }
  };
  /**
   * Logic to handle setting currently focused option
   *
   * @param type
   */


  const setFocusedOption = type => {
    // Set new focused option
    setFocusedOptionState(option => {
      // Clamp new option
      const newOption = clampOption(type, option, items); // Look ahead to next option for scrolling

      const lookaheadOption = clampOption(type, option, items); // Get lookahead option

      const listOption = refs.current?.[lookaheadOption]?.current; // Scroll option into view

      listOption?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      return newOption;
    });
  };

  useGlobalKeyDown(enableGlobalKeyDown, {
    [keycode.ArrowUp]: () => setFocusedOption('decrement'),
    [keycode.ArrowDown]: () => setFocusedOption('increment'),
    [keycode.Enter]: () => selectFocusedOption(),
    [keycode.Space]: () => selectFocusedOption(),
    [keycode.Home]: () => setFocusedOption('first'),
    [keycode.End]: () => setFocusedOption('last')
  });
  const focusedItem = items[focusedOption];

  if (focusedItem) {
    focusedItem.className = classNames(focusedItem.className, 'focus');
  } // Side effect for when `value` is modified externally...


  React.useEffect(() => {
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
    className: classNames(`list list-selector single-selector shape--${shape}`, className),
    ref: innerRef,
    width: width
  }, other), items.map((item, index) => renderItem(_extends({
    key: index,
    shape: 'squared'
  }, item), item.ref)));
});
export { ListSelectorSingle };
export default ListSelectorSingle;