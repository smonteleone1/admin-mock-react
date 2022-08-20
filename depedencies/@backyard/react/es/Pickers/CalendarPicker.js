import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "date", "onChange"];
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
const CalendarPicker = /*#__PURE__*/React.forwardRef(function CalendarPicker(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    date: dateProp,
    onChange
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'CalendarPicker'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const adapter = useAdapter();
  const [date, setDate] = React.useState(adapter.parse(dateProp, 'yyyy-MM-dd'));
  React.useEffect(() => {
    const parsedDateValue = adapter.parse(dateProp);
    setDate(curDate => {
      if (!adapter.isEqual(curDate, parsedDateValue)) {
        return parsedDateValue;
      }

      return curDate;
    });
  }, [dateProp]);

  const handleChange = newDate => {
    setDate(newDate);

    if (onChange) {
      onChange(newDate);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(`datepicker-calendar shape--${shape}`, className)
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