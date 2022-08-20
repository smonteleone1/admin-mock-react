import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "label"],
    _excluded2 = ["ariaLabel", "crumbs", "crumb", "className"];
import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import BreadcrumbDesktopBase from './styles/BreadcrumbDesktopBase';
var CrumbDesktop = /*#__PURE__*/React.forwardRef(function Crumb(_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, _extends({
    className: classNames("crumb crumb-desktop", className)
  }, props, {
    ref: ref
  }), label));
});
var BreadcrumbDesktop = /*#__PURE__*/React.forwardRef(function Breadcrumb(_ref2, ref) {
  var _ref2$ariaLabel = _ref2.ariaLabel,
      ariaLabel = _ref2$ariaLabel === void 0 ? 'Breadcrumb' : _ref2$ariaLabel,
      crumbs = _ref2.crumbs,
      _ref2$crumb = _ref2.crumb,
      CrumbComponent = _ref2$crumb === void 0 ? CrumbDesktop : _ref2$crumb,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  // Get Backyard Theme
  var theme = useBackyardTheme(); // Validate theme hook

  validateBackyardTheme(theme, 'BreadcrumbDesktop');
  var items = React.useMemo(function () {
    return crumbs.map(function (crumb, index) {
      return /*#__PURE__*/React.createElement(CrumbComponent, _extends({
        key: index
      }, index === crumbs.length - 1 ? {
        color: 'primary',
        'aria-current': 'page'
      } : {
        bold: true,
        underline: 'hover',
        color: 'interactive'
      }, crumb));
    });
  }, [crumbs, CrumbComponent]);
  return /*#__PURE__*/React.createElement(BreadcrumbDesktopBase, _extends({
    "aria-label": ariaLabel,
    className: classNames('breadcrumb-desktop', className),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("ol", null, items));
});
CrumbDesktop.bdsName = 'CrumbDesktop';
BreadcrumbDesktop.bdsName = 'BreadcrumbDesktop';
export { BreadcrumbDesktop, CrumbDesktop };
export default BreadcrumbDesktop;