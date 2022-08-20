import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "render"];
import * as React from 'react';
import classNames from 'classnames';
import BreadcrumbDesktopSkeleton from '../../BreadcrumbDesktop/BreadcrumbDesktopSkeleton';
import BreadcrumbMobileSkeleton from '../../BreadcrumbMobile/BreadcrumbMobileSkeleton';
import useBackyardTheme from '../../ThemeProvider/useBackyardTheme';
var BreadcrumbSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbSkeleton(_ref, ref) {
  var className = _ref.className,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? 'auto' : _ref$render,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useBackyardTheme();
  var isMobile = theme.isMobile;
  var BreadcrumbSkeletonComponent = React.useMemo(function () {
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