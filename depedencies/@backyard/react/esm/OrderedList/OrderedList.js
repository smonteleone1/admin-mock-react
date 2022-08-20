import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "density", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { OrderedListWrapper } from './styles/OrderedListWrapper';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
/**
 * OrderedList component
 *
 * This component is used to geneate an ordered list (<ol>) within an app.
 *
 * Has one dependent component for usage -- ListItem
 */

var OrderedList = /*#__PURE__*/React.forwardRef(function OrderedList(_ref, ref) {
  var children = _ref.children,
      density = _ref.density,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'OrderedList');
  /**
   * Layout:
   *  <OrderedList density='normal'>
   *      <ListItem>Item List One</ListItem>
   *      <ListItem>Item List Two</ListItem>
   *  </OrderedList>
   */

  return /*#__PURE__*/React.createElement(OrderedListWrapper, _extends({
    className: classNames(className, density && "density--".concat(density)),
    ref: ref
  }, props), children);
});
OrderedList.bdsName = 'OrderedList';
export { OrderedList };
export default OrderedList;