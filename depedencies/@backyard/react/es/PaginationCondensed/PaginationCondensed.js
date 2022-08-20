import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronDoubleLeft, _ChevronLeft, _ChevronRight, _ChevronDoubleRight;

const _excluded = ["className", "count", "min", "max", "defaultPage", "disabled", "getItemAriaLabel", "showFirstButton", "hideNextButton", "hidePrevButton", "showLastButton", "onChange", "page", "siblingCount", "size", "step", "shape", "variant", "open"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronDoubleLeft from '@backyard/icons/ChevronDoubleLeft';
import ChevronDoubleRight from '@backyard/icons/ChevronDoubleRight';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import Pop from '../Pop';
import IconButton from '../IconButton';
import ListSelector from '../ListSelector';
import ListOption from '../ListOption';
import Stepper from '../Stepper';
import Typography from '../Typography';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import PaginationCondensedWrapper from './styles/PaginationCondensedWrapper';

function defaultGetAriaLabel(type, page = null, selected = false) {
  if (type === 'page' && typeof page === 'number') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
}
/**
 * Backyard React Pagination Condensed
 *
 * Condensed version of Pagination
 */


const PaginationCondensed = /*#__PURE__*/React.forwardRef(function PaginationCondensed(props, ref) {
  const {
    className,
    // color = 'interactive',
    count: countProp,
    min: minProp = 1,
    max: maxProp,
    defaultPage,
    getItemAriaLabel = defaultGetAriaLabel,
    showFirstButton: showFirstButtonProp = true,
    hideNextButton: hideNextButtonProp,
    hidePrevButton: hidePrevButtonProp,
    showLastButton: showLastButtonProp = true,
    page: pageProp = 1,
    size = 'medium',
    step: stepProp = 1,
    shape: shapeProp,
    // = 'rounded',
    variant = 'condensed',
    open: openProp = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded); // Get Backyard Theme Context


  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'PaginationCondensed'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Hold popover ref

  const popoverRef = React.useRef(null); // Hold page number

  const [page, setPage] = React.useState(pageProp || defaultPage); // Hold open state

  const [open, setOpen] = React.useState(openProp); // Memoize props & reactivity

  const {
    max,
    min,
    step
  } = React.useMemo(() => {
    // If page is updated,
    if (page !== pageProp) {
      // Set new page number
      setPage(page => Number(typeof pageProp === 'string' ? page : pageProp));
    } // If open state changed,


    if (open !== openProp) {
      // Set new open state
      setOpen(openProp);
    } // Props update


    return {
      max: typeof maxProp === 'number' ? maxProp : countProp || 0,
      min: typeof minProp === 'number' ? minProp : 0,
      step: stepProp,
      hideNextButton: hideNextButtonProp,
      hidePrevButton: hidePrevButtonProp,
      showFirstButton: showFirstButtonProp,
      showLastButton: showLastButtonProp
    };
  }, [countProp, maxProp, minProp, pageProp, openProp, stepProp, hideNextButtonProp, hidePrevButtonProp, showFirstButtonProp, showLastButtonProp]);
  /**
   * Go to page number
   *
   * @param type - type of go to
   * @param target - target page if type === 'page'
   */

  const goTo = (type, target = null) => {
    switch (type) {
      // When next goto,
      case 'next':
        // Go to next page (with step)
        setPage(page => page + step >= max ? max : Number(page + step));
        break;
      // When previous goto,

      case 'previous':
        // Go to previous page (with step)
        setPage(page => page - step <= min ? min : Number(page - step));
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
        setPage(page => target <= max && target >= min ? Number(target) : page);
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


  const handleNavigation = type => (event, info) => goTo(type, info?.current); // Handle opening the popover


  const handleOpen = () => {
    // Open popover
    setOpen(true); // After timeout,

    setTimeout(() => {
      // Get selected option, if any
      const el = popoverRef.current?.querySelector('.selected'); // If selected option, make sure it is visible

      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }, 50);
  }; // Handle closing the popover


  const handleClose = () => {
    // Close popover
    setOpen(false);
  }; // Navigation buttons
  // Shared button props


  const buttonProps = {
    variant: 'ghost',
    color: 'neutral',
    shape: 'circle',
    size: 'extra_small'
  };
  const buttons = {
    // First button
    first: /*#__PURE__*/React.createElement(IconButton, _extends({
      className: "pagination-button pagination-first"
    }, buttonProps, {
      disabled: page <= min,
      onClick: handleNavigation('first'),
      "aria-label": getItemAriaLabel('first')
    }), _ChevronDoubleLeft || (_ChevronDoubleLeft = /*#__PURE__*/React.createElement(ChevronDoubleLeft, null))),
    // Previous button
    previous: /*#__PURE__*/React.createElement(IconButton, _extends({
      className: "pagination-button pagination-previous"
    }, buttonProps, {
      disabled: page <= min,
      onClick: handleNavigation('previous'),
      "aria-label": getItemAriaLabel('previous')
    }), _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null))),
    // Next button
    next: /*#__PURE__*/React.createElement(IconButton, _extends({
      className: "pagination-button pagination-next"
    }, buttonProps, {
      disabled: page >= max,
      onClick: handleNavigation('next'),
      "aria-label": getItemAriaLabel('next')
    }), _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null))),
    // Last button
    last: /*#__PURE__*/React.createElement(IconButton, _extends({
      className: "pagination-button pagination-last"
    }, buttonProps, {
      disabled: page >= max,
      onClick: handleNavigation('last'),
      "aria-label": getItemAriaLabel('last')
    }), _ChevronDoubleRight || (_ChevronDoubleRight = /*#__PURE__*/React.createElement(ChevronDoubleRight, null)))
  }; // Inputs inside selector

  const inputs = {
    // Stepper input
    stepper: /*#__PURE__*/React.createElement(Stepper, {
      hideButtons: true,
      max: max,
      className: 'condensed-input',
      value: page,
      step: step,
      size: "small",
      onChange: handleNavigation('page')
    }),
    // List selector input
    options: /*#__PURE__*/React.createElement(ListSelector, {
      className: "condensed-selector",
      options: // Create numbered options from map of max
      Array.from(new Array(max - min + 1)).map((_, index) => ({
        value: min + index,
        label: `${min + index}`,
        ariaLabel: getItemAriaLabel('page', min + index)
      })),
      value: page,
      onChange: (event, info) => {
        goTo('page', info.value);
      } // Close with delay on click
      ,
      onClick: () => setTimeout(handleClose, 250),
      renderItem: (props, ref) => /*#__PURE__*/React.createElement(ListOption, _extends({
        component: IconButton,
        size: "small",
        tabIndex: -1
      }, props, {
        ref: ref
      }))
    })
  }; // Combine selector with Pop

  const selector = /*#__PURE__*/React.createElement("div", {
    className: 'pagination-condensed-selector'
  }, /*#__PURE__*/React.createElement(Pop, {
    open: open,
    onOpen: handleOpen,
    onClose: handleClose,
    anchor: inputs.stepper,
    pop: inputs.options,
    popoverProps: {
      offset: [0, 4]
    },
    ref: popoverRef
  }), /*#__PURE__*/React.createElement(Typography, {
    bold: true,
    variant: "body_1",
    className: "condensed-label"
  }, `of ${max}`));
  return /*#__PURE__*/React.createElement(PaginationCondensedWrapper, _extends({
    "aria-label": "pagination navigation",
    color: "interactive",
    className: classNames(`pagination pagination-condensed variant--${variant} size--${size} shape--${shape}`, // `color--${color}`,
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
PaginationCondensed.bdsName = 'PaginationCondensed';
export { PaginationCondensed };
export default PaginationCondensed;