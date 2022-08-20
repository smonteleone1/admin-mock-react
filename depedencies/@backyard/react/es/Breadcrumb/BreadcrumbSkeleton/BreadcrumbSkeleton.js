import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "render"];
import * as React from 'react';
import classNames from 'classnames';
import BreadcrumbDesktopSkeleton from '../../BreadcrumbDesktop/BreadcrumbDesktopSkeleton';
import BreadcrumbMobileSkeleton from '../../BreadcrumbMobile/BreadcrumbMobileSkeleton';
import useBackyardTheme from '../../ThemeProvider/useBackyardTheme';
const BreadcrumbSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbSkeleton(_ref, ref) {
  let {
    className,
    render = 'auto'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const theme = useBackyardTheme();
  const {
    isMobile
  } = theme;
  const BreadcrumbSkeletonComponent = React.useMemo(() => {
    switch (render) {
      case 'desktop':
        return BreadcrumbDesktopSkeleton;

      case 'mobile':
        return BreadcrumbMobileSkeleton;

      case 'auto':
      default:
        return isMobile ? BreadcrumbMobileSkeleton : BreadcrumbDesktopSkeleton;
    }
  }, [render]);
  return /*#__PURE__*/React.createElement(BreadcrumbSkeletonComponent, _extends({
    className: classNames(className, 'breadcrumb--skeleton')
  }, props, {
    ref: ref
  }));
});
BreadcrumbSkeleton.bdsName = 'BreadcrumbSkeleton';
export { BreadcrumbSkeleton };
export default BreadcrumbSkeleton;