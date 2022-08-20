import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _TriangleDown, _PlusFilled, _TriangleUp, _MinusFilled;

const _excluded = ["children", "className", "title", "subtitle", "open", "defaultOpen", "keepMounted", "size", "variant", "color", "onClick", "onOpen", "onClose"];
import * as React from 'react';
import classNames from 'classnames';
import TriangleDown from '@backyard/icons/TriangleDown';
import TriangleUp from '@backyard/icons/TriangleUp';
import PlusFilled from '@backyard/icons/PlusFilled';
import MinusFilled from '@backyard/icons/MinusFilled';
import AccordionWrapper from './styles/AccordionWrapper';

/**
 * Backyard React Accordion
 *
 * Accordion uses chevronUp and chevronDown by default. To use the plus and minus
 * icons, you can change openIcon to 'plus' and closeIcon to 'minus'.
 *
 * The accordion size is medium by default.
 *
 * <Accordion
 *  title="Title"
 * >
 *     This is the contents of the accordion.
 * </Accordion>
 *
 */
const Accordion = /*#__PURE__*/React.forwardRef(function Accordion(_ref, ref) {
  let {
    children,
    className,
    title,
    subtitle,
    open: openProp,
    defaultOpen = false,
    keepMounted = true,
    size = 'medium',
    variant = 'triangle',
    color = 'transparent',
    onClick,
    onOpen,
    onClose
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // State of whether or not <Accordion> is open
  const [open, setOpen] = React.useState(openProp || defaultOpen); // Get relevant icons from icon maps

  const mappedOpenIcon = variant === 'triangle' ? _TriangleDown || (_TriangleDown = /*#__PURE__*/React.createElement(TriangleDown, {
    color: "action_interactive"
  })) : _PlusFilled || (_PlusFilled = /*#__PURE__*/React.createElement(PlusFilled, {
    color: "action_interactive"
  }));
  const mappedCloseIcon = variant === 'triangle' ? _TriangleUp || (_TriangleUp = /*#__PURE__*/React.createElement(TriangleUp, {
    color: "action_interactive"
  })) : _MinusFilled || (_MinusFilled = /*#__PURE__*/React.createElement(MinusFilled, {
    color: "action_interactive"
  }));
  /**
   * Handles the `onOpen` event of the accordion header
   * Triggers defined `onOpen` from props if available
   *
   * @param {Event} event - DOM event
   */

  function openAccordion() {
    setOpen(true);

    if (onOpen) {
      onOpen();
    }
  }
  /**
   * Handles the `onClose` event of the accordion header
   * Triggers defined `onClose` from props if available
   *
   * @param {Event} event - DOM event
   */


  function closeAccordion() {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  }
  /**
   * Toggle opened/closed state
   */


  function handleClick(event) {
    if (open) {
      closeAccordion();
    } else {
      openAccordion();
    }

    if (onClick) {
      onClick(event, !open);
    }
  } // Side effect to control open state externally


  React.useEffect(() => openProp ? openAccordion() : closeAccordion(), [openProp]);
  /**
   * Layout:
   * <div wrapper>
   *  <span header>
   *    <Typography title>
   *
   *    <span>
   *      <svg icon>
   *    </span>
   *  </span>
   *
   *  <span>
   *    <children>
   *  </span>
   * </div>
   */

  return /*#__PURE__*/React.createElement(AccordionWrapper, _extends({
    className: classNames(`backyard accordion variant--${variant} color--${color} size--${size}`, open ? 'opened' : 'closed', className),
    size: size
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "accordion-header " + (open ? 'opened' : 'closed'),
    onClick: handleClick,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-title-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "accordion-title"
  }, title), size === 'large' ? /*#__PURE__*/React.createElement("span", {
    className: "accordion-subtitle"
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    className: "accordion-icon"
  }, open ? mappedCloseIcon : mappedOpenIcon)), open || keepMounted ? /*#__PURE__*/React.createElement("span", {
    className: "accordion-content " + (open ? 'opened' : 'closed'),
    "aria-hidden": "true"
  }, children) : null);
});
Accordion.bdsName = 'Accordion';
export { Accordion };
export default Accordion;