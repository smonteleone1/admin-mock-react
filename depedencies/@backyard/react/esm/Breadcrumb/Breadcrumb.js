import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "render"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import BreadcrumbDesktop from '../BreadcrumbDesktop';
import BreadcrumbMobile from '../BreadcrumbMobile';
var Breadcrumb = /*#__PURE__*/React.forwardRef(function Breadcrumb(_ref, ref) {
  var className = _ref.className,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? 'auto' : _ref$render,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme();
  var isMobile = theme.isMobile; // Validate theme hook

  validateBackyardTheme(theme, 'Breadcrumb'); // Memoize component on render

  var BreadcrumbComponent = React.useMemo(function () {
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
    className: classNames("breadcrumb render--".concat(render), className)
  }, props, {
    ref: ref
  }));
});
Breadcrumb.bdsName = 'Breadcrumb';
export { Breadcrumb };
export default Breadcrumb;