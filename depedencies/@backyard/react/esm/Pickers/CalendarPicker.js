import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "date", "onChange"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useAdapter from './hooks/useAdapter';
import { Calendar } from './Calendar';

/**
 * Backyard React Calendar Picker
 *
 * @todo Comments
 */
var CalendarPicker = /*#__PURE__*/React.forwardRef(function CalendarPicker(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      dateProp = _ref.date,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'CalendarPicker'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var adapter = useAdapter();

  var _React$useState = React.useState(adapter.parse(dateProp, 'yyyy-MM-dd')),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1];

  React.useEffect(function () {
    var parsedDateValue = adapter.parse(dateProp);
    setDate(function (curDate) {
      if (!adapter.isEqual(curDate, parsedDateValue)) {
        return parsedDateValue;
      }

      return curDate;
    });
  }, [dateProp]);

  var handleChange = function handleChange(newDate) {
    setDate(newDate);

    if (onChange) {
      onChange(newDate);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames("datepicker-calendar shape--".concat(shape), className)
  }, /*#__PURE__*/React.createElement(Calendar, _extends({
    date: date,
    onChange: handleChange,
    shape: shape
  }, props, {
    ref: ref
  })));
});
CalendarPicker.bdsName = 'CalendarPicker';
export { CalendarPicker };
export default CalendarPicker;