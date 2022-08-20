import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import * as React from 'react';
import { ListItemWrapper } from './styles/ListItemWrapper';
var ListItem = /*#__PURE__*/React.forwardRef(function ListItem(_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ListItemWrapper, _extends({
    ref: ref
  }, props), children);
});
ListItem.bdsName = 'ListItem';
export { ListItem };
export default ListItem;