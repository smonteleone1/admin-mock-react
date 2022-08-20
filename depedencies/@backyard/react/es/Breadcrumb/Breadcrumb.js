import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "render"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import BreadcrumbDesktop from '../BreadcrumbDesktop';
import BreadcrumbMobile from '../BreadcrumbMobile';
const Breadcrumb = /*#__PURE__*/React.forwardRef(function Breadcrumb(_ref, ref) {
  let {
    className,
    render = 'auto'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme();
  const {
    isMobile
  } = theme; // Validate theme hook

  validateBackyardTheme(theme, 'Breadcrumb'); // Memoize component on render

  const BreadcrumbComponent = React.useMemo(() => {
    // Switch on `render`
    switch (render) {
      // Case desktop,
      case 'desktop':
        // Render Breadcrumb Desktop,
        return BreadcrumbDesktop;
      // Case mobile,

      case 'mobile':
        // Render Breadcrumb Mobile
        return BreadcrumbMobile;
      // Auto or default,

      case 'auto':
      default:
        // Render Breadcrumb Mobile if mobile viewport, else Desktop
        return isMobile ? BreadcrumbMobile : BreadcrumbDesktop;
    }
  }, [render]);
  return /*#__PURE__*/React.createElement(BreadcrumbComponent, _extends({
    className: classNames(`breadcrumb render--${render}`, className)
  }, props, {
    ref: ref
  }));
});
Breadcrumb.bdsName = 'Breadcrumb';
export { Breadcrumb };
export default Breadcrumb;