import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "label"],
      _excluded2 = ["ariaLabel", "crumbs", "crumb", "className"];
import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import BreadcrumbDesktopBase from './styles/BreadcrumbDesktopBase';
const CrumbDesktop = /*#__PURE__*/React.forwardRef(function Crumb(_ref, ref) {
  let {
    className,
    label
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, _extends({
    className: classNames("crumb crumb-desktop", className)
  }, props, {
    ref: ref
  }), label));
});
const BreadcrumbDesktop = /*#__PURE__*/React.forwardRef(function Breadcrumb(_ref2, ref) {
  let {
    ariaLabel = 'Breadcrumb',
    crumbs,
    crumb: CrumbComponent = CrumbDesktop,
    className
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  // Get Backyard Theme
  const theme = useBackyardTheme(); // Validate theme hook

  validateBackyardTheme(theme, 'BreadcrumbDesktop');
  const items = React.useMemo(() => crumbs.map((crumb, index) => /*#__PURE__*/React.createElement(CrumbComponent, _extends({
    key: index
  }, index === crumbs.length - 1 ? {
    color: 'primary',
    'aria-current': 'page'
  } : {
    bold: true,
    underline: 'hover',
    color: 'interactive'
  }, crumb))), [crumbs, CrumbComponent]);
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