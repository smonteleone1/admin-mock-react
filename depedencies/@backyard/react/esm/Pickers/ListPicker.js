import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "readOnly", "onChange", "wrapperProps", "value", "defaultValue", "options", "format", "type", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import List from '../ListSelector';
import ListOption from '../ListOption';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useAdapter from './hooks/useAdapter';
import { useListItems } from './hooks/useListItems';
import ListPickerWrapper from './styles/ListPickerWrapper';

var isArrayString = function isArrayString(str) {
  return str.match(/^\[.*\]$/);
};
/**
 * Backyard React List Picker
 *
 * @todo Comments
 */


var ListPicker = /*#__PURE__*/React.forwardRef(function ListPicker(_ref, ref) {
  var className = _ref.className,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      onChange = _ref.onChange,
      wrapperProps = _ref.wrapperProps,
      valueProp = _ref.value,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      format = _ref.format,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      shapeProp = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'ListPicker'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var adapter = useAdapter();

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var items = useListItems({
    adapter: adapter,
    value: value,
    type: type,
    format: format,
    options: options
  });

  var handleChange = function handleChange(event, info) {
    if (!readOnly) {
      setValue(info.value);

      if (onChange) {
        var dateTime = isArrayString(info.value) ? {
          date: JSON.parse(info.value).map(function (date) {
            return adapter.parse(date, 'yyyy-MM-dd');
          }),
          time: JSON.parse(info.value).map(function (date) {
            var time = adapter.parse(date, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })
        } : {
          date: adapter.parse(info.value, 'yyyy-MM-dd'),
          time: function () {
            var time = adapter.parse(info.value, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          }()
        };
        onChange(event, _extends({}, info, dateTime));
      }
    }
  };

  React.useEffect(function () {
    return setValue(valueProp);
  }, [valueProp]);
  return /*#__PURE__*/React.createElement(ListPickerWrapper, _extends({
    className: classNames("datepicker-list shape--".concat(shape), className)
  }, wrapperProps), /*#__PURE__*/React.createElement(List, _extends({
    onChange: handleChange,
    value: value || null,
    shape: shape
  }, props, {
    ref: ref
  }), items.map(function (item) {
    return /*#__PURE__*/React.createElement(ListOption, _extends({
      shape: shape
    }, item, {
      tabIndex: -1
    }));
  })));
});
ListPicker.bdsName = 'ListPicker';
export { ListPicker };
export default ListPicker;