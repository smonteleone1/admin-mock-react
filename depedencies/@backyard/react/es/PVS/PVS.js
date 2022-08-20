import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "fill", "unavailable", "checked", "defaultChecked", "color", "title", "name", "value", "onChange", "tooltipProps", "popoverProps", "popperProps", "wrapperProps", "inputClassName", "id"];
import * as React from 'react';
import classNames from 'classnames';
import isURL from 'validator/lib/isURL';
import { CheckCircleFilled } from '@backyard/icons/CheckCircleFilled';
import Radio from '../Radio';
import Tooltip from '../Tooltip';
import TooltipPopper from '../TooltipPopper';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import PVSWrapper from './styles/PVSWrapper';
const badgeColorMap = {
  interactive: 'action_interactive',
  green: 'action_green'
};
/**
 * Backyard PVS component
 * Also known as a swatch selector.
 *
 * The PVS component allows the user to choose between various textures or colors offered for a particular item.
 * It provides a quick view of what options are available, and typically changes the relevant images to reflect
 * the changes made from the PVS selector.
 *
 * Only one option in a PVS may be selected at a time. Essentially, the swatches function as a radio button but
 * with images/color swatches included for a quick preview.
 *
 * The name of the swatch is visible on hover through a tooltip.
 *
 * ex.
 * <RadioGroup
 *      direction="row"
 *      defaultValue="crema-oak">
 *     <PVS
 *          value="natural-oak"
 *          title="Natural Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753008645_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="cambridge-abbey-oak"
 *          title="Cambridge Abbey Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/1000128595_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="crema-oak"
 *          title="Crema Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753349960_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="black"
 *          fill="#000"
 *          unavailable
 *          title="Black"
 *          color="green"
 *     />
 *     <PVS
 *          value="white"
 *          fill="#ffffff"
 *          title="White"
 *          color="green" />
 * </RadioGroup>
 */

const PVS = /*#__PURE__*/React.forwardRef(function PVS(_ref, ref) {
  let {
    className,
    fill,
    unavailable,
    checked,
    defaultChecked,
    color = 'interactive',
    title,
    value,
    onChange,
    tooltipProps = {},
    popoverProps = {},
    popperProps = {},
    wrapperProps = {},
    inputClassName
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'PVS'); // Checks if `fill` prop is a URL

  const isFillURL = isURL(fill, {
    // protocols - valid protocols can be modified with this option
    protocols: ['http', 'https'],
    require_tld: true,
    // require_protocol - if set as true isURL will return false if protocol is not present in the URL
    require_protocol: false,
    // require_host - if set as false isURL will not check if host is present in the URL
    require_host: true,
    // require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    // allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
    allow_protocol_relative_urls: false
  });
  const pvsTemplate = /*#__PURE__*/React.createElement(PVSWrapper, _extends({
    className: classNames('pvs-wrapper', className)
  }, wrapperProps), /*#__PURE__*/React.createElement(Radio, _extends({
    id: `pvs--${value}`,
    className: inputClassName,
    checked: checked,
    defaultChecked: defaultChecked,
    name: `pvs--${value}`,
    value: value,
    wrapperProps: {
      className: 'pvs-input' + (unavailable ? " unavailable" : "")
    },
    onChange: onChange
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "swatch",
    style: {
      backgroundColor: isFillURL ? 'transparent' : fill
    }
  }, isFillURL ? /*#__PURE__*/React.createElement("img", {
    src: fill,
    alt: title,
    height: "50",
    width: "50"
  }) : null, /*#__PURE__*/React.createElement(CheckCircleFilled, {
    className: "selected-badge",
    size: "size_16",
    color: unavailable ? 'disabled' : badgeColorMap[color]
  }))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, title ? /*#__PURE__*/React.createElement(TooltipPopper, _extends({
    tooltip: /*#__PURE__*/React.createElement(Tooltip, tooltipProps, title)
  }, popoverProps, popperProps), pvsTemplate) : pvsTemplate);
});
PVS.bdsName = 'PVS';
export { PVS };
export default PVS;