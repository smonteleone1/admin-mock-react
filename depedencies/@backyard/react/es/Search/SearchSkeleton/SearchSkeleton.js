import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "size"];
import * as React from 'react';
import classNames from 'classnames';
import TextFieldSkeleton from '../../TextField/TextFieldSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Search Skeleton
 */

const SearchSkeleton = /*#__PURE__*/React.forwardRef(function SearchSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    size = 'large'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'SearchSkeleton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(TextFieldSkeleton, _extends({
    className: classNames('search--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    size: size
  }, props, {
    ref: ref
  }));
});
SearchSkeleton.bdsName = 'SearchSkeleton';
export { SearchSkeleton };
export default SearchSkeleton;