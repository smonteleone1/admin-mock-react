import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronLeft, _ChevronRight;

const _excluded = ["children", "className", "defaultSelected", "shape", "isOnLayer", "keepMounted", "handleOnChange"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import BaseTabsWrapper from './style/TabsWrapper';
import Carousel, { CarouselItem } from '../Carousel';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import TabContext from './TabContext';
import TabContent from './TabContent';

/**
 * Backyard React Tabs Component
 */
const Tabs = /*#__PURE__*/React.forwardRef(function Tabs(_ref, ref) {
  let {
    children,
    className,
    defaultSelected = 0,
    shape: shapeProp,
    // = 'rounded',
    isOnLayer = false,
    keepMounted = false,
    handleOnChange
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'Tabs'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // the index of the current selected tab

  const [selected, setSelected] = React.useState(defaultSelected); // ref of tab list

  const tabListRef = React.useRef(null);
  /**
   * The `handleClick` prop.
   *
   * This is passed to the tab component's `onClick` property and is called inside
   * of the Tab component.
   *
   * @param index - the index of the tab within the list of the tabs
   */

  const handleClick = (index, event) => {
    setSelected(index);

    if (handleOnChange) {
      handleOnChange(event);
    }
  }; // (event: React.KeyboardEvent | React.MouseEvent) => void

  /**
   * Get enabled sibling through recursion
   *
   * @param direction - direction to recursively check
   * @param element - current tab
   */


  const getEnabledSibling = (direction, element) => {
    // Get next or previous sibling depending on dirction
    const sibling = direction === 'next' ? element.nextElementSibling : element.previousElementSibling; // If sibling found,

    if (sibling) {
      // If sibling is disabled,
      if (sibling.disabled) {
        // Try next sibling
        return getEnabledSibling(direction, sibling);
      } // Else, sibling is not disabled
      // Return enabled sibling


      return sibling;
    } // Else, sibling was not found,
    // Return no sibling


    return null;
  };
  /**
   * The `handleKeyDown` trigger.
   *
   * This is called inside of the Tab component.
   *
   * @param id - the id of the tab
   * @param index - the index of the tab within the list of tabs
   */


  const handleKeyDown = (index, event) => {
    // get tab from event target
    const tab = event.target; // default target to null

    let target = null; // where key down...

    switch (event.key) {
      // is left arrow...
      case 'ArrowLeft':
        // target is previous tab (if available)
        target = getEnabledSibling('previous', tab);
        break;

      case 'ArrowRight':
        // target is next tab (if available)
        target = getEnabledSibling('next', tab);
        break;

      default:
        // Do nothing
        break;
    }

    if (target !== null) {
      target.focus();
    }

    if (event.key === 'Enter' || event.key === ' ') {
      setSelected(index);
    }

    if (handleOnChange) {
      handleOnChange(event);
    }
  };
  /**
   * Returns the tabs with event handlers and their respective index passed through.
   */


  const getTabs = role => React.Children.map(children, (tab, index) =>
  /*#__PURE__*/
  // @ts-ignore
  React.cloneElement(tab, {
    // @ts-ignore
    ariaControls: `${tab.props.id}-panel`,
    role,
    index
  })); // The tabs mapped with the event handlers and their respective index


  const tabs = theme.isMobile ? getTabs('') : getTabs('tab'); // if is mobile, wrap the tabs in a carousel
  // else return the tabs

  const computedTabs = theme.isMobile ? /*#__PURE__*/React.createElement(Carousel, {
    id: "mobile-tabs-scrollbar",
    carouselButtonProps: {
      shape: 'squared',
      style: {
        border: 'none'
      }
    },
    role: "tablist",
    leftIcon: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null)),
    noScrollbar: true,
    rightIcon: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
    ref: tabListRef
  }, tabs.map((tab, index) => /*#__PURE__*/React.createElement(CarouselItem, {
    key: index
  }, tab))) : /*#__PURE__*/React.createElement("div", {
    className: "tablist",
    role: "tablist",
    ref: tabListRef
  }, tabs);
  /**
   * Layout:
   * <div tabs role='navigation'>
   *   <
   * </div>
   */

  return /*#__PURE__*/React.createElement(TabContext.Provider, {
    value: {
      selected,
      handleClick,
      handleKeyDown,
      isOnLayer
    }
  }, /*#__PURE__*/React.createElement(BaseTabsWrapper, _extends({
    className: classNames(`tabs-wrapper shape--${shape}`, className),
    isOnLayer: isOnLayer,
    role: "navigation"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, computedTabs),
  /**
   * If keepMounted is true, we display only the selected tab's content.
   *
   * If keepMounted is false, we display all tab content, but only set
   * the selected tab's content to be visible. The keepMounted prop should
   * be set to false when content will have an impact on SEO.
   */
  !keepMounted ? /*#__PURE__*/React.createElement(TabContent, {
    id: `${tabs.find(tab => tab.props.index === selected).props.id}-panel`,
    selected: true
  }, tabs.find(tab => tab.props.index === selected).props.children) : React.Children.map(tabs, (tab, index) => {
    return /*#__PURE__*/React.createElement(TabContent, {
      key: index,
      id: `${tab.props.id}-panel`,
      selected: selected === index
    }, tab.props.children);
  })));
});
Tabs.bdsName = 'Tabs';
export { Tabs };
export default Tabs;