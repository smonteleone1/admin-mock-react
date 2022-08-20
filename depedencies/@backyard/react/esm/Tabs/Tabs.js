import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ChevronLeft, _ChevronRight;

var _excluded = ["children", "className", "defaultSelected", "shape", "isOnLayer", "keepMounted", "handleOnChange"];
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
var Tabs = /*#__PURE__*/React.forwardRef(function Tabs(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$defaultSelected = _ref.defaultSelected,
      defaultSelected = _ref$defaultSelected === void 0 ? 0 : _ref$defaultSelected,
      shapeProp = _ref.shape,
      _ref$isOnLayer = _ref.isOnLayer,
      isOnLayer = _ref$isOnLayer === void 0 ? false : _ref$isOnLayer,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? false : _ref$keepMounted,
      handleOnChange = _ref.handleOnChange,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'Tabs'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // the index of the current selected tab

  var _React$useState = React.useState(defaultSelected),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1]; // ref of tab list


  var tabListRef = React.useRef(null);
  /**
   * The `handleClick` prop.
   *
   * This is passed to the tab component's `onClick` property and is called inside
   * of the Tab component.
   *
   * @param index - the index of the tab within the list of the tabs
   */

  var handleClick = function handleClick(index, event) {
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


  var getEnabledSibling = function getEnabledSibling(direction, element) {
    // Get next or previous sibling depending on dirction
    var sibling = direction === 'next' ? element.nextElementSibling : element.previousElementSibling; // If sibling found,

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


  var handleKeyDown = function handleKeyDown(index, event) {
    // get tab from event target
    var tab = event.target; // default target to null

    var target = null; // where key down...

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


  var getTabs = function getTabs(role) {
    return React.Children.map(children, function (tab, index) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        React.cloneElement(tab, {
          // @ts-ignore
          ariaControls: "".concat(tab.props.id, "-panel"),
          role: role,
          index: index
        })
      );
    });
  }; // The tabs mapped with the event handlers and their respective index


  var tabs = theme.isMobile ? getTabs('') : getTabs('tab'); // if is mobile, wrap the tabs in a carousel
  // else return the tabs

  var computedTabs = theme.isMobile ? /*#__PURE__*/React.createElement(Carousel, {
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
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement(CarouselItem, {
      key: index
    }, tab);
  })) : /*#__PURE__*/React.createElement("div", {
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
      selected: selected,
      handleClick: handleClick,
      handleKeyDown: handleKeyDown,
      isOnLayer: isOnLayer
    }
  }, /*#__PURE__*/React.createElement(BaseTabsWrapper, _extends({
    className: classNames("tabs-wrapper shape--".concat(shape), className),
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
    id: "".concat(tabs.find(function (tab) {
      return tab.props.index === selected;
    }).props.id, "-panel"),
    selected: true
  }, tabs.find(function (tab) {
    return tab.props.index === selected;
  }).props.children) : React.Children.map(tabs, function (tab, index) {
    return /*#__PURE__*/React.createElement(TabContent, {
      key: index,
      id: "".concat(tab.props.id, "-panel"),
      selected: selected === index
    }, tab.props.children);
  })));
});
Tabs.bdsName = 'Tabs';
export { Tabs };
export default Tabs;