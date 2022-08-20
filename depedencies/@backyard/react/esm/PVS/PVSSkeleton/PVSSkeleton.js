import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["items", "animate", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyards PVSSkeleton component
 * 
 * Returns a series of Skeleton circles based on the value of the
 * items prop. Sizing and spacing of each swatch matches that of the
 * default PVS component.
 * 
 * <PVSSkeleton />
 */

var PVSSkeleton = /*#__PURE__*/React.forwardRef(function PVSSkeleton(_ref, ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? 1 : _ref$items,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var circles = _toConsumableArray(new Array(items));

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'row'
    },
    className: classnames(className, 'pvs--skeleton')
  }, circles.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Skeleton, _extends({
      key: "skeleton-".concat(index),
      variant: "circle",
      height: "size_40",
      width: "size_40",
      animate: animate,
      style: {
        margin: '0.5rem',
        display: 'inline-block'
      }
    }, props, {
      ref: ref
    }));
  }));
});
PVSSkeleton.bdsName = 'PVSSkeleton';
export { PVSSkeleton };
export default PVSSkeleton;