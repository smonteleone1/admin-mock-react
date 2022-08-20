import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "width", "size", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import { ThemeContext } from '../../ThemeProvider';
const LinkSkeleton = /*#__PURE__*/React.forwardRef(function LinkSkeleton(_ref, ref) {
  let {
    animate = false,
    width,
    size = 'medium',
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const theme = React.useContext(ThemeContext);
  let height = '';

  if (theme.isDesktop) {
    height = size === 'medium' ? 'size_24' : 'size_20';
  } else {
    height = size === 'medium' ? 'size_20' : 'size_16';
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    height: height,
    width: width || '6rem',
    animate: animate,
    className: classnames(className, 'Link--skeleton')
  }, props, {
    ref: ref
  }));
});
LinkSkeleton.bdsName = 'LinkSkeleton';
export { LinkSkeleton };
export default LinkSkeleton;