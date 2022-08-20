import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value"],
    _excluded2 = ["className", "count", "defaultValue", "emptyIcon", "emptyLabelText", "getLabelText", "icon", "IconContainerComponent", "max", "name", "onChange", "onChangeHover", "onMouseLeave", "onMouseMove", "interactive", "precision", "size", "value"];
import * as React from 'react';
import classNames from 'classnames';
import RatingEmpty from '@backyard/icons/RatingEmpty';
import RatingFilled from '@backyard/icons/RatingFull';
import useRandomId from '../utils/hooks/useRandomId';
import useForkRef from '../utils/hooks/useForkRef';
import useControlled from '../utils/hooks/useControlled';
import useIsFocusVisible from '../utils/hooks/useIsFocusVisible';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import RatingWrapper from './styles/RatingWrapper';

function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function getDecimalPrecision(num) {
  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }

  var nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}

function IconContainer(props) {
  var value = props.value,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", other);
}

var defaultEmptyIcon = /*#__PURE__*/React.createElement(RatingEmpty, null);
var defaultIcon = /*#__PURE__*/React.createElement(RatingFilled, null);

function defaultLabelText(value) {
  return "".concat(value || 'Zero', " Star").concat(value !== 1 ? 's' : '');
}
/**
 * Backyard React Rating
 *
 * @todo Comments
 */


var Rating = /*#__PURE__*/React.forwardRef(function Rating(_ref, ref) {
  var className = _ref.className,
      count = _ref.count,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      _ref$emptyIcon = _ref.emptyIcon,
      emptyIcon = _ref$emptyIcon === void 0 ? defaultEmptyIcon : _ref$emptyIcon,
      _ref$emptyLabelText = _ref.emptyLabelText,
      emptyLabelText = _ref$emptyLabelText === void 0 ? 'Empty' : _ref$emptyLabelText,
      _ref$getLabelText = _ref.getLabelText,
      getLabelText = _ref$getLabelText === void 0 ? defaultLabelText : _ref$getLabelText,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? defaultIcon : _ref$icon,
      _ref$IconContainerCom = _ref.IconContainerComponent,
      IconContainerComponent = _ref$IconContainerCom === void 0 ? IconContainer : _ref$IconContainerCom,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 5 : _ref$max,
      nameProp = _ref.name,
      onChange = _ref.onChange,
      onChangeHover = _ref.onChangeHover,
      onMouseLeave = _ref.onMouseLeave,
      onMouseMove = _ref.onMouseMove,
      _ref$interactive = _ref.interactive,
      interactive = _ref$interactive === void 0 ? false : _ref$interactive,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? interactive ? 1 : 0.1 : _ref$precision,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      valueProp = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded2);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Rating');
  var name = useRandomId(nameProp);

  var _useControlled = useControlled({
    controlled: valueProp,
    "default": defaultValue,
    name: "Backyard->Rating->[name=\"".concat(name, "\"]")
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1];

  var valueRounded = roundValueToPrecision(valueDerived, precision);

  var _React$useState = React.useState({
    hover: -1,
    focus: -1
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _React$useState2$ = _React$useState2[0],
      hover = _React$useState2$.hover,
      focus = _React$useState2$.focus,
      setState = _React$useState2[1];

  var value = valueRounded;

  if (hover !== -1) {
    value = hover;
  }

  if (focus !== -1) {
    value = focus;
  }

  var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      focusVisible = _React$useState4[0],
      setFocusVisible = _React$useState4[1];

  var rootRef = React.useRef();
  var handleFocusRef = useForkRef(focusVisibleRef, rootRef);
  var handleRef = useForkRef(handleFocusRef, ref);

  var handleMouseMove = function handleMouseMove(event) {
    if (onMouseMove) {
      onMouseMove(event);
    }

    var rootNode = rootRef.current; // eslint-disable-next-line @typescript-eslint/no-unused-vars

    var _rootNode$getBounding = rootNode.getBoundingClientRect(),
        right = _rootNode$getBounding.right,
        left = _rootNode$getBounding.left;

    var _getBoundingClientRec = rootNode.firstChild.getBoundingClientRect(),
        width = _getBoundingClientRec.width;

    var percent = (event.clientX - left) / (width * max);
    var newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = clamp(newHover, precision, max);
    setState(function (prev) {
      return prev.hover === newHover && prev.focus === newHover ? prev : {
        hover: newHover,
        focus: newHover
      };
    });
    setFocusVisible(false);

    if (onChangeHover && hover !== newHover) {
      onChangeHover(event, newHover);
    }
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    var newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });

    if (onChangeHover && hover !== newHover) {
      onChangeHover(event, newHover);
    }
  };

  var handleChange = function handleChange(event) {
    var newValue = parseFloat(event.target.value);
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  };

  var handleClear = function handleClear(event) {
    // Ignore keyboard events
    // https://github.com/facebook/react/issues/7407
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }

    setState({
      hover: -1,
      focus: -1
    });
    setValueState(null);

    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }

    var newFocus = parseFloat(event.target.value);
    setState(function (prev) {
      return {
        hover: prev.hover,
        focus: newFocus
      };
    });

    if (onChangeHover && focus !== newFocus) {
      onChangeHover(event, newFocus);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (hover !== -1) {
      return;
    }

    if (focusVisible !== false) {
      setFocusVisible(false);
      onBlurVisible();
    }

    var newFocus = -1;
    setState(function (prev) {
      return {
        hover: prev.hover,
        focus: newFocus
      };
    });

    if (onChangeHover && focus !== newFocus) {
      onChangeHover(event, newFocus);
    }
  };

  var item = function item(state) {
    var labelProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var id = "".concat(name, "-").concat(String(state.value).replace('.', '-'));
    var container = /*#__PURE__*/React.createElement(IconContainerComponent, {
      value: state.value,
      className: classNames('rating-icon', state.filled ? "filled" : "empty", state.hover && "hover", state.focus && "focus", state.active && "active")
    }, emptyIcon && !state.filled ? emptyIcon : icon);

    if (!interactive) {
      return /*#__PURE__*/React.createElement("div", _extends({
        key: state.value,
        className: "rating-item"
      }, labelProps), container);
    }

    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: state.value
    }, /*#__PURE__*/React.createElement("label", _extends({
      className: "rating-label",
      htmlFor: id
    }, labelProps), container, /*#__PURE__*/React.createElement("span", {
      className: "hidden"
    }, getLabelText(state.value))), /*#__PURE__*/React.createElement("input", {
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
      onClick: handleClear,
      value: state.value,
      id: id,
      type: "radio",
      name: name,
      checked: state.checked,
      className: "hidden"
    }));
  };

  return /*#__PURE__*/React.createElement(RatingWrapper, _extends({
    ref: handleRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: classNames("rating size--".concat(size), interactive ? 'interactive' : 'read-only', className, focusVisible && 'focus-visible'),
    role: !interactive ? 'img' : null,
    "aria-label": !interactive ? getLabelText(value) : null
  }, props), _toConsumableArray(new Array(max)).map(function (_, index) {
    var itemValue = index + 1;

    if (precision < 1) {
      var items = _toConsumableArray(new Array(1 / precision));

      return /*#__PURE__*/React.createElement("div", {
        key: itemValue,
        className: "rating-item decimal" + (itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1) ? " active" : "")
      }, items.map(function ($, indexDecimal) {
        var itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
        return item({
          value: itemDecimalValue,
          filled: itemDecimalValue <= value,
          hover: itemDecimalValue <= hover,
          focus: itemDecimalValue <= focus,
          checked: itemDecimalValue === valueRounded
        }, {
          style: items.length - 1 === indexDecimal ? {} : {
            width: itemDecimalValue === value ? "".concat((indexDecimal + 1) * precision * 100, "%") : '0%',
            overflow: 'hidden',
            // zIndex: 1,
            position: 'absolute'
          }
        });
      }));
    }

    return item({
      value: itemValue,
      active: itemValue === value && (hover !== -1 || focus !== -1),
      filled: itemValue <= value,
      hover: itemValue <= hover,
      focus: itemValue <= focus,
      checked: itemValue === valueRounded
    });
  }), interactive && valueRounded == null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    value: "",
    id: "".concat(name, "-empty"),
    type: "radio",
    name: name,
    defaultChecked: true,
    className: "hidden"
  }), /*#__PURE__*/React.createElement("label", {
    className: "rating-empty",
    htmlFor: "".concat(name, "-empty")
  }, /*#__PURE__*/React.createElement("span", {
    className: "hidden"
  }, emptyLabelText))), !interactive && count ? /*#__PURE__*/React.createElement("span", {
    className: "rating-count"
  }, count) : null);
});
Rating.bdsName = 'Rating';
export { Rating };
export default Rating;