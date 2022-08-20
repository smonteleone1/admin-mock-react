"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaginationCondensed = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChevronDoubleLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronDoubleLeft"));

var _ChevronDoubleRight2 = _interopRequireDefault(require("@backyard/icons/ChevronDoubleRight"));

var _ChevronLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _Pop = _interopRequireDefault(require("../Pop"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _ListSelector = _interopRequireDefault(require("../ListSelector"));

var _ListOption = _interopRequireDefault(require("../ListOption"));

var _Stepper = _interopRequireDefault(require("../Stepper"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ThemeProvider = require("../ThemeProvider");

var _PaginationCondensedWrapper = _interopRequireDefault(require("./styles/PaginationCondensedWrapper"));

var _ChevronDoubleLeft, _ChevronLeft, _ChevronRight, _ChevronDoubleRight;

var _excluded = ["className", "count", "min", "max", "defaultPage", "disabled", "getItemAriaLabel", "showFirstButton", "hideNextButton", "hidePrevButton", "showLastButton", "onChange", "page", "siblingCount", "size", "step", "shape", "variant", "open"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultGetAriaLabel(type) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (type === 'page' && typeof page === 'number') {
    return "".concat(selected ? '' : 'Go to ', "page ").concat(page);
  }

  return "Go to ".concat(type, " page");
}
/**
 * Backyard React Pagination Condensed
 *
 * Condensed version of Pagination
 */


var PaginationCondensed = /*#__PURE__*/React.forwardRef(function PaginationCondensed(props, ref) {
  var className = props.className,
      countProp = props.count,
      _props$min = props.min,
      minProp = _props$min === void 0 ? 1 : _props$min,
      maxProp = props.max,
      defaultPage = props.defaultPage,
      disabled = props.disabled,
      _props$getItemAriaLab = props.getItemAriaLabel,
      getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
      _props$showFirstButto = props.showFirstButton,
      showFirstButtonProp = _props$showFirstButto === void 0 ? true : _props$showFirstButto,
      hideNextButtonProp = props.hideNextButton,
      hidePrevButtonProp = props.hidePrevButton,
      _props$showLastButton = props.showLastButton,
      showLastButtonProp = _props$showLastButton === void 0 ? true : _props$showLastButton,
      onChange = props.onChange,
      _props$page = props.page,
      pageProp = _props$page === void 0 ? 1 : _props$page,
      siblingCount = props.siblingCount,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$step = props.step,
      stepProp = _props$step === void 0 ? 1 : _props$step,
      shapeProp = props.shape,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'condensed' : _props$variant,
      _props$open = props.open,
      openProp = _props$open === void 0 ? false : _props$open,
      other = (0, _objectWithoutProperties2["default"])(props, _excluded); // Get Backyard Theme Context

  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'PaginationCondensed'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Hold popover ref

  var popoverRef = React.useRef(null); // Hold page number

  var _React$useState = React.useState(pageProp || defaultPage),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1]; // Hold open state


  var _React$useState3 = React.useState(openProp),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1]; // Memoize props & reactivity


  var _React$useMemo = React.useMemo(function () {
    // If page is updated,
    if (page !== pageProp) {
      // Set new page number
      setPage(function (page) {
        return Number(typeof pageProp === 'string' ? page : pageProp);
      });
    } // If open state changed,


    // If open state changed,
    if (open !== openProp) {
      // Set new open state
      setOpen(openProp);
    } // Props update


    // Props update
    return {
      max: typeof maxProp === 'number' ? maxProp : countProp || 0,
      min: typeof minProp === 'number' ? minProp : 0,
      step: stepProp,
      hideNextButton: hideNextButtonProp,
      hidePrevButton: hidePrevButtonProp,
      showFirstButton: showFirstButtonProp,
      showLastButton: showLastButtonProp
    };
  }, [countProp, maxProp, minProp, pageProp, openProp, stepProp, hideNextButtonProp, hidePrevButtonProp, showFirstButtonProp, showLastButtonProp]),
      max = _React$useMemo.max,
      min = _React$useMemo.min,
      step = _React$useMemo.step;
  /**
   * Go to page number
   *
   * @param type - type of go to
   * @param target - target page if type === 'page'
   */


  var goTo = function goTo(type) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    switch (type) {
      // When next goto,
      case 'next':
        // Go to next page (with step)
        setPage(function (page) {
          return page + step >= max ? max : Number(page + step);
        });
        break;
      // When previous goto,

      case 'previous':
        // Go to previous page (with step)
        setPage(function (page) {
          return page - step <= min ? min : Number(page - step);
        });
        break;
      // When first goto,

      case 'first':
        // Go to minumum page
        setPage(min);
        break;
      // When last goto,

      case 'last':
        // Go to maximum page
        setPage(max);
        break;
      // When page given,

      case 'page':
      default:
        // Go to target page number
        setPage(function (page) {
          return target <= max && target >= min ? Number(target) : page;
        });
        break;
    }
  };
  /**
   * Handle navigation
   *
   * Used for nav buttons
   *
   * @param type type of navigation
   */


  var handleNavigation = function handleNavigation(type) {
    return function (event, info) {
      return goTo(type, info === null || info === void 0 ? void 0 : info.current);
    };
  }; // Handle opening the popover


  var handleOpen = function handleOpen() {
    // Open popover
    setOpen(true); // After timeout,

    setTimeout(function () {
      var _popoverRef$current;

      // Get selected option, if any
      var el = (_popoverRef$current = popoverRef.current) === null || _popoverRef$current === void 0 ? void 0 : _popoverRef$current.querySelector('.selected'); // If selected option, make sure it is visible

      el === null || el === void 0 ? void 0 : el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }, 50);
  }; // Handle closing the popover


  var handleClose = function handleClose() {
    // Close popover
    setOpen(false);
  }; // Navigation buttons
  // Shared button props


  var buttonProps = {
    variant: 'ghost',
    color: 'neutral',
    shape: 'circle',
    size: 'extra_small'
  };
  var buttons = {
    // First button
    first: /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
      className: "pagination-button pagination-first"
    }, buttonProps, {
      disabled: page <= min,
      onClick: handleNavigation('first'),
      "aria-label": getItemAriaLabel('first')
    }), _ChevronDoubleLeft || (_ChevronDoubleLeft = /*#__PURE__*/React.createElement(_ChevronDoubleLeft2["default"], null))),
    // Previous button
    previous: /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
      className: "pagination-button pagination-previous"
    }, buttonProps, {
      disabled: page <= min,
      onClick: handleNavigation('previous'),
      "aria-label": getItemAriaLabel('previous')
    }), _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(_ChevronLeft2["default"], null))),
    // Next button
    next: /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
      className: "pagination-button pagination-next"
    }, buttonProps, {
      disabled: page >= max,
      onClick: handleNavigation('next'),
      "aria-label": getItemAriaLabel('next')
    }), _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(_ChevronRight2["default"], null))),
    // Last button
    last: /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
      className: "pagination-button pagination-last"
    }, buttonProps, {
      disabled: page >= max,
      onClick: handleNavigation('last'),
      "aria-label": getItemAriaLabel('last')
    }), _ChevronDoubleRight || (_ChevronDoubleRight = /*#__PURE__*/React.createElement(_ChevronDoubleRight2["default"], null)))
  }; // Inputs inside selector

  var inputs = {
    // Stepper input
    stepper: /*#__PURE__*/React.createElement(_Stepper["default"], {
      hideButtons: true,
      max: max,
      className: 'condensed-input',
      value: page,
      step: step,
      size: "small",
      onChange: handleNavigation('page')
    }),
    // List selector input
    options: /*#__PURE__*/React.createElement(_ListSelector["default"], {
      className: "condensed-selector",
      options: // Create numbered options from map of max
      Array.from(new Array(max - min + 1)).map(function (_, index) {
        return {
          value: min + index,
          label: "".concat(min + index),
          ariaLabel: getItemAriaLabel('page', min + index)
        };
      }),
      value: page,
      onChange: function onChange(event, info) {
        goTo('page', info.value);
      } // Close with delay on click
      ,
      onClick: function onClick() {
        return setTimeout(handleClose, 250);
      },
      renderItem: function renderItem(props, ref) {
        return /*#__PURE__*/React.createElement(_ListOption["default"], (0, _extends2["default"])({
          component: _IconButton["default"],
          size: "small",
          tabIndex: -1
        }, props, {
          ref: ref
        }));
      }
    })
  }; // Combine selector with Pop

  var selector = /*#__PURE__*/React.createElement("div", {
    className: 'pagination-condensed-selector'
  }, /*#__PURE__*/React.createElement(_Pop["default"], {
    open: open,
    onOpen: handleOpen,
    onClose: handleClose,
    anchor: inputs.stepper,
    pop: inputs.options,
    popoverProps: {
      offset: [0, 4]
    },
    ref: popoverRef
  }), /*#__PURE__*/React.createElement(_Typography["default"], {
    bold: true,
    variant: "body_1",
    className: "condensed-label"
  }, "of ".concat(max)));
  return /*#__PURE__*/React.createElement(_PaginationCondensedWrapper["default"], (0, _extends2["default"])({
    "aria-label": "pagination navigation",
    color: "interactive",
    className: (0, _classnames["default"])("pagination pagination-condensed variant--".concat(variant, " size--").concat(size, " shape--").concat(shape), // `color--${color}`,
    className),
    ref: ref
  }, other), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "pagination-first"
  }, buttons.first), /*#__PURE__*/React.createElement("li", {
    className: "pagination-previous"
  }, buttons.previous), /*#__PURE__*/React.createElement("li", {
    className: "pagination-select"
  }, selector), /*#__PURE__*/React.createElement("li", {
    className: "pagination-next"
  }, buttons.next), /*#__PURE__*/React.createElement("li", {
    className: "pagination-last"
  }, buttons.last)));
});
exports.PaginationCondensed = PaginationCondensed;
PaginationCondensed.bdsName = 'PaginationCondensed';
var _default = PaginationCondensed;
exports["default"] = _default;