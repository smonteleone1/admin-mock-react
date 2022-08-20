"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tabs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChevronLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _TabsWrapper = _interopRequireDefault(require("./style/TabsWrapper"));

var _Carousel = _interopRequireWildcard(require("../Carousel"));

var _ThemeProvider = require("../ThemeProvider");

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _ChevronLeft, _ChevronRight;

var _excluded = ["children", "className", "defaultSelected", "shape", "isOnLayer", "keepMounted", "handleOnChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Tabs'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // the index of the current selected tab

  var _React$useState = React.useState(defaultSelected),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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

  var computedTabs = theme.isMobile ? /*#__PURE__*/React.createElement(_Carousel["default"], {
    id: "mobile-tabs-scrollbar",
    carouselButtonProps: {
      shape: 'squared',
      style: {
        border: 'none'
      }
    },
    role: "tablist",
    leftIcon: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(_ChevronLeft2["default"], null)),
    noScrollbar: true,
    rightIcon: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(_ChevronRight2["default"], null)),
    ref: tabListRef
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement(_Carousel.CarouselItem, {
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

  return /*#__PURE__*/React.createElement(_TabContext["default"].Provider, {
    value: {
      selected: selected,
      handleClick: handleClick,
      handleKeyDown: handleKeyDown,
      isOnLayer: isOnLayer
    }
  }, /*#__PURE__*/React.createElement(_TabsWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("tabs-wrapper shape--".concat(shape), className),
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
  !keepMounted ? /*#__PURE__*/React.createElement(_TabContent["default"], {
    id: "".concat(tabs.find(function (tab) {
      return tab.props.index === selected;
    }).props.id, "-panel"),
    selected: true
  }, tabs.find(function (tab) {
    return tab.props.index === selected;
  }).props.children) : React.Children.map(tabs, function (tab, index) {
    return /*#__PURE__*/React.createElement(_TabContent["default"], {
      key: index,
      id: "".concat(tab.props.id, "-panel"),
      selected: selected === index
    }, tab.props.children);
  })));
});
exports.Tabs = Tabs;
Tabs.bdsName = 'Tabs';
var _default = Tabs;
exports["default"] = _default;