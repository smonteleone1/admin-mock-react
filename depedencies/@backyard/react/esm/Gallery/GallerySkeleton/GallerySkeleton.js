import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate", "thumbnails"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Gallery Skeleton
 */

var GallerySkeleton = /*#__PURE__*/React.forwardRef(function GallerySkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$thumbnails = _ref.thumbnails,
      thumbnails = _ref$thumbnails === void 0 ? 5 : _ref$thumbnails,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'GallerySkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('gallery--skeleton', className)
  }, /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: "32rem"
  }, props, {
    ref: ref
  })), thumbnails > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: theme.sizes.size_16,
      justifyContent: theme.isMobile ? 'center' : 'flex-start'
    }
  }, _toConsumableArray(new Array(thumbnails || 0)).map(function (_, index) {
    return theme.isDesktop ? /*#__PURE__*/React.createElement(Skeleton, {
      key: index,
      variant: "rect",
      shape: shape,
      animate: animate,
      width: "4.625rem",
      height: "4.625rem",
      style: {
        marginRight: index < thumbnails - 1 ? theme.sizes.size_12 : 0
      }
    }) : /*#__PURE__*/React.createElement(Skeleton, {
      key: index,
      variant: "circle",
      shape: shape,
      animate: animate,
      style: {
        minHeight: theme.sizes.size_16,
        minWidth: theme.sizes.size_16,
        marginRight: index < thumbnails - 1 ? theme.sizes.size_12 : 0
      }
    });
  })) : null);
});
GallerySkeleton.bdsName = 'GallerySkeleton';
export { GallerySkeleton };
export default GallerySkeleton;