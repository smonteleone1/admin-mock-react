import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "items", "density", "width", "className"];
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

var OrderedListSkeleton = /*#__PURE__*/React.forwardRef(function OrderedListSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? 4 : _ref$items,
      _ref$density = _ref.density,
      density = _ref$density === void 0 ? 'normal' : _ref$density,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '18.75rem' : _ref$width,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var rects = _toConsumableArray(new Array(items));

  return /*#__PURE__*/React.createElement(SkeletonWrapper, _extends({
    className: classnames("ordered-list--skeleton density--".concat(density), className),
    width: width
  }, props, {
    ref: ref
  }), rects.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Skeleton, {
      key: "skeleton-ol-".concat(index),
      variant: "rect",
      height: "size_24",
      width: "100%",
      animate: animate,
      className: "list-item--skeleton"
    });
  }));
});
OrderedListSkeleton.bdsName = 'OrderedListSkeleton';
export { OrderedListSkeleton };
export default OrderedListSkeleton;