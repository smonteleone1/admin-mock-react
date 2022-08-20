import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ArrowLeft, _Dots;

var _excluded = ["className", "label"],
    _excluded2 = ["ariaLabel", "crumbs", "crumb", "className", "menuProps", "menuPopoverProps", "disabled", "open", "toggle"];
import * as React from 'react';
import classNames from 'classnames';
import Dots from '@backyard/icons/Dots';
import ArrowLeft from '@backyard/icons/ArrowLeft';
import Link from '../Link';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import MenuPopover from '../MenuPopover';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import BreadcrumbMobileBase from './styles/BreadcrumbMobileBase';
var CrumbMobile = /*#__PURE__*/React.forwardRef(function Crumb(_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MenuItem, _extends({
    className: classNames("crumb crumb-mobile", className),
    iconBefore: _ArrowLeft || (_ArrowLeft = /*#__PURE__*/React.createElement(ArrowLeft, null)),
    variant: "inverse",
    color: "interactive",
    shape: "squared",
    as: Link
  }, props, {
    ref: ref
  }), label);
});
/**
 * Backyard React Breadcrumb Mobile
 *
 * Mobile-only version of `Breadcrumb`
 */

var BreadcrumbMobile = /*#__PURE__*/React.forwardRef(function BreadcrumMobile(_ref2, ref) {
  var _IconButton;

  var _ref2$ariaLabel = _ref2.ariaLabel,
      ariaLabel = _ref2$ariaLabel === void 0 ? 'Breadcrumb' : _ref2$ariaLabel,
      crumbs = _ref2.crumbs,
      _ref2$crumb = _ref2.crumb,
      CrumbComponent = _ref2$crumb === void 0 ? CrumbMobile : _ref2$crumb,
      className = _ref2.className,
      menuProps = _ref2.menuProps,
      menuPopoverProps = _ref2.menuPopoverProps,
      _ref2$disabled = _ref2.disabled,
      disabledProp = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$open = _ref2.open,
      openProp = _ref2$open === void 0 ? false : _ref2$open,
      toggleProp = _ref2.toggle,
      props = _objectWithoutProperties(_ref2, _excluded2);

  // Get Backyard Theme
  var theme = useBackyardTheme(); // Validate theme hook

  validateBackyardTheme(theme, 'BreadcrumbMobile'); // Memoize context props

  var _React$useMemo = React.useMemo(function () {
    return {
      disabled: disabledProp,
      open: openProp
    };
  }, [openProp]),
      disabled = _React$useMemo.disabled,
      open = _React$useMemo.open; // Last crumb is current crum


  var currentCrumb = React.useMemo(function () {
    return crumbs[crumbs.length - 1];
  }, [crumbs]); // Each crumb...

  var items = React.useMemo(function () {
    return crumbs // Remove last (current) crumb
    .slice(0, crumbs.length - 1) // Map to rendered crumb components
    .map(function (crumb, index) {
      return /*#__PURE__*/React.createElement(CrumbComponent, _extends({
        key: index
      }, crumb));
    }) // Reverse crumbs in mobile popover
    .reverse();
  }, [crumbs, CrumbComponent]); // Render toggle component

  var toggle = React.useMemo(function () {
    return (// IconButton by default
      toggleProp || _IconButton || (_IconButton = /*#__PURE__*/React.createElement(IconButton, {
        disabled: disabled,
        size: "small",
        variant: "inverse",
        color: "interactive"
      }, _Dots || (_Dots = /*#__PURE__*/React.createElement(Dots, null))))
    );
  }, [toggleProp, disabled]);
  return /*#__PURE__*/React.createElement(BreadcrumbMobileBase, _extends({
    "aria-label": ariaLabel,
    className: classNames('breadcrumb', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(MenuPopover, _extends({
    open: open,
    menu: /*#__PURE__*/React.createElement(Menu, _extends({
      width: "17.5rem"
    }, menuProps), items)
  }, menuPopoverProps), toggle), /*#__PURE__*/React.createElement(Typography, _extends({
    className: "crumb-current",
    variant: "body_1",
    color: "text_secondary",
    "aria-current": "page",
    bold: true
  }, currentCrumb), currentCrumb.label));
});
CrumbMobile.bdsName = 'CrumbMobile';
BreadcrumbMobile.bdsName = 'BreadcrumbMobile';
export { BreadcrumbMobile, CrumbMobile };
export default BreadcrumbMobile;