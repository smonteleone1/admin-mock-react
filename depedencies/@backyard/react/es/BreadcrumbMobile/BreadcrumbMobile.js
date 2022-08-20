import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ArrowLeft, _Dots;

const _excluded = ["className", "label"],
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
const CrumbMobile = /*#__PURE__*/React.forwardRef(function Crumb(_ref, ref) {
  let {
    className,
    label
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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

const BreadcrumbMobile = /*#__PURE__*/React.forwardRef(function BreadcrumMobile(_ref2, ref) {
  var _IconButton;

  let {
    ariaLabel = 'Breadcrumb',
    crumbs,
    crumb: CrumbComponent = CrumbMobile,
    className,
    menuProps,
    menuPopoverProps,
    disabled: disabledProp = false,
    open: openProp = false,
    toggle: toggleProp
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  // Get Backyard Theme
  const theme = useBackyardTheme(); // Validate theme hook

  validateBackyardTheme(theme, 'BreadcrumbMobile'); // Memoize context props

  const {
    disabled,
    open
  } = React.useMemo(() => ({
    disabled: disabledProp,
    open: openProp
  }), [openProp]); // Last crumb is current crum

  const currentCrumb = React.useMemo(() => crumbs[crumbs.length - 1], [crumbs]); // Each crumb...

  const items = React.useMemo(() => crumbs // Remove last (current) crumb
  .slice(0, crumbs.length - 1) // Map to rendered crumb components
  .map((crumb, index) => /*#__PURE__*/React.createElement(CrumbComponent, _extends({
    key: index
  }, crumb))) // Reverse crumbs in mobile popover
  .reverse(), [crumbs, CrumbComponent]); // Render toggle component

  const toggle = React.useMemo(() => // IconButton by default
  toggleProp || _IconButton || (_IconButton = /*#__PURE__*/React.createElement(IconButton, {
    disabled: disabled,
    size: "small",
    variant: "inverse",
    color: "interactive"
  }, _Dots || (_Dots = /*#__PURE__*/React.createElement(Dots, null)))), [toggleProp, disabled]);
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