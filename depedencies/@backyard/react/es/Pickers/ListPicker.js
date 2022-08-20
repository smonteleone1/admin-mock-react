import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "readOnly", "onChange", "wrapperProps", "value", "defaultValue", "options", "format", "type", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import List from '../ListSelector';
import ListOption from '../ListOption';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useAdapter from './hooks/useAdapter';
import { useListItems } from './hooks/useListItems';
import ListPickerWrapper from './styles/ListPickerWrapper';

const isArrayString = str => str.match(/^\[.*\]$/);
/**
 * Backyard React List Picker
 *
 * @todo Comments
 */


const ListPicker = /*#__PURE__*/React.forwardRef(function ListPicker(_ref, ref) {
  let {
    className,
    readOnly = false,
    onChange,
    wrapperProps,
    value: valueProp,
    defaultValue,
    options,
    format,
    type = 'date',
    shape: shapeProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'ListPicker'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const adapter = useAdapter();
  const [value, setValue] = React.useState(valueProp || defaultValue);
  const items = useListItems({
    adapter,
    value,
    type,
    format,
    options
  });

  const handleChange = (event, info) => {
    if (!readOnly) {
      setValue(info.value);

      if (onChange) {
        const dateTime = isArrayString(info.value) ? {
          date: JSON.parse(info.value).map(date => adapter.parse(date, 'yyyy-MM-dd')),
          time: JSON.parse(info.value).map(date => {
            const time = adapter.parse(date, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })
        } : {
          date: adapter.parse(info.value, 'yyyy-MM-dd'),
          time: (() => {
            const time = adapter.parse(info.value, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })()
        };
        onChange(event, _extends({}, info, dateTime));
      }
    }
  };

  React.useEffect(() => setValue(valueProp), [valueProp]);
  return /*#__PURE__*/React.createElement(ListPickerWrapper, _extends({
    className: classNames(`datepicker-list shape--${shape}`, className)
  }, wrapperProps), /*#__PURE__*/React.createElement(List, _extends({
    onChange: handleChange,
    value: value || null,
    shape: shape
  }, props, {
    ref: ref
  }), items.map(item => /*#__PURE__*/React.createElement(ListOption, _extends({
    shape: shape
  }, item, {
    tabIndex: -1
  })))));
});
ListPicker.bdsName = 'ListPicker';
export { ListPicker };
export default ListPicker;