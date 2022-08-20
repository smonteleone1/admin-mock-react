import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "thumbnails"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Gallery Skeleton
 */

const GallerySkeleton = /*#__PURE__*/React.forwardRef(function GallerySkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    thumbnails = 5
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'GallerySkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
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
  }, [...new Array(thumbnails || 0)].map((_, index) => theme.isDesktop ? /*#__PURE__*/React.createElement(Skeleton, {
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
  }))) : null);
});
GallerySkeleton.bdsName = 'GallerySkeleton';
export { GallerySkeleton };
export default GallerySkeleton;