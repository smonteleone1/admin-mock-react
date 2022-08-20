import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { useAsyncDebounce } from 'react-table';
import Search from '../../Search';

function TextFilter(_ref) {
  var column = _ref.column;
  var filterValue = column.filterValue,
      setFilter = column.setFilter,
      id = column.id;

  var _React$useState = React.useState(filterValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var searchRef = React.useRef(null);

  var handleChange = function handleChange(_, val) {
    setValue(val);
  };

  var handleClear = function handleClear(_, val) {
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
    setValue(filterValue);
  }, [filterValue]);
  return /*#__PURE__*/React.createElement(Search, {
    value: value || '',
    onChange: handleChange,
    onClearClick: handleClear,
    placeholder: "Search",
    variant: "filled",
    fill: "canvas",
    size: "small",
    wrapperProps: {
      className: 'cell-filter'
    },
    className: "".concat(id, "-filter"),
    label: "".concat(id, " filter"),
    ref: searchRef
  });
}

export { TextFilter };
export default TextFilter;