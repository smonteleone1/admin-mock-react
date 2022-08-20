import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "items", "density", "width", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import SkeletonWrapper from './styles';
/**
 * Backard OrderedListSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <OrderedListSkeleton />
*/

const OrderedListSkeleton = /*#__PURE__*/React.forwardRef(function OrderedListSkeleton(_ref, ref) {
  let {
    animate = false,
    items = 4,
    density = 'normal',
    width = '18.75rem',
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const rects = [...new Array(items)];
  return /*#__PURE__*/React.createElement(SkeletonWrapper, _extends({
    className: classnames(`ordered-list--skeleton density--${density}`, className),
    width: width
  }, props, {
    ref: ref
  }), rects.map((item, index) => /*#__PURE__*/React.createElement(Skeleton, {
    key: `skeleton-ol-${index}`,
    variant: "rect",
    height: "size_24",
    width: "100%",
    animate: animate,
    className: "list-item--skeleton"
  })));
});
OrderedListSkeleton.bdsName = 'OrderedListSkeleton';
export { OrderedListSkeleton };
export default OrderedListSkeleton;