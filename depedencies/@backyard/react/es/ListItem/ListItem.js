import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children"];
import * as React from 'react';
import { ListItemWrapper } from './styles/ListItemWrapper';
const ListItem = /*#__PURE__*/React.forwardRef(function ListItem(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ListItemWrapper, _extends({
    ref: ref
  }, props), children);
});
ListItem.bdsName = 'ListItem';
export { ListItem };
export default ListItem;