import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { useAsyncDebounce } from 'react-table';
import Dropdown from '../../Dropdown';

var SelectFilter = function SelectFilter(optionValues) {
  return function (_ref) {
    var column = _ref.column;
    var filterValue = column.filterValue,
        setFilter = column.setFilter,
        id = column.id;

    var _React$useState = React.useState(filterValue),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

    var handleChange = function handleChange(_, _ref2) {
      var val = _ref2.value;
      setValue(val);
    };

    var setDebounceValue = useAsyncDebounce(function (val) {
      setFilter(val || undefined);
    }, 200);
    React.useEffect(function () {
      if (filterValue !== value) {
        setDebounceValue(value);
      }
    }, [value]);
    React.useEffect(function () {
      if (filterValue !== value) {
        setValue(filterValue);
      }
    }, [filterValue]);
    return /*#__PURE__*/React.createElement(Dropdown, {
      onChange: handleChange,
      label: "Select",
      options: [{
        value: '',
        label: 'none'
      }].concat(_toConsumableArray(optionValues.map(function (optionValue) {
        return {
          value: optionValue,
          label: optionValue
        };
      }))),
      size: "small",
      wrapperProps: {
        className: 'cell-filter'
      },
      className: "".concat(id, "-filter"),
      value: value
    });
  };
};

export { SelectFilter };
export default SelectFilter;