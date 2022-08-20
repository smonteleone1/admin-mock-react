import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["value"],
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
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }

  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}

function IconContainer(props) {
  const other = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement("div", other);
}

const defaultEmptyIcon = /*#__PURE__*/React.createElement(RatingEmpty, null);
const defaultIcon = /*#__PURE__*/React.createElement(RatingFilled, null);

function defaultLabelText(value) {
  return `${value || 'Zero'} Star${value !== 1 ? 's' : ''}`;
}
/**
 * Backyard React Rating
 *
 * @todo Comments
 */


const Rating = /*#__PURE__*/React.forwardRef(function Rating(_ref, ref) {
  let {
    className,
    count,
    defaultValue = null,
    emptyIcon = defaultEmptyIcon,
    emptyLabelText = 'Empty',
    getLabelText = defaultLabelText,
    icon = defaultIcon,
    IconContainerComponent = IconContainer,
    max = 5,
    name: nameProp,
    onChange,
    onChangeHover,
    onMouseLeave,
    onMouseMove,
    interactive = false,
    precision = interactive ? 1 : 0.1,
    size = 'medium',
    value: valueProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded2);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Rating');
  const name = useRandomId(nameProp);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: `Backyard->Rating->[name="${name}"]`
  });
  const valueRounded = roundValueToPrecision(valueDerived, precision);
  const [{
    hover,
    focus
  }, setState] = React.useState({
    hover: -1,
    focus: -1
  });
  let value = valueRounded;

  if (hover !== -1) {
    value = hover;
  }

  if (focus !== -1) {
    value = focus;
  }

  const {
    isFocusVisible,
    onBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const rootRef = React.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, rootRef);
  const handleRef = useForkRef(handleFocusRef, ref);

  const handleMouseMove = event => {
    if (onMouseMove) {
      onMouseMove(event);
    }

    const rootNode = rootRef.current; // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const {
      right,
      left
    } = rootNode.getBoundingClientRect();
    const {
      width
    } = rootNode.firstChild.getBoundingClientRect();
    const percent = (event.clientX - left) / (width * max);
    let newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = clamp(newHover, precision, max);
    setState(prev => prev.hover === newHover && prev.focus === newHover ? prev : {
      hover: newHover,
      focus: newHover
    });
    setFocusVisible(false);

    if (onChangeHover && hover !== newHover) {
      onChangeHover(event, newHover);
    }
  };

  const handleMouseLeave = event => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });

    if (onChangeHover && hover !== newHover) {
      onChangeHover(event, newHover);
    }
  };

  const handleChange = event => {
    const newValue = parseFloat(event.target.value);
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  };

  const handleClear = event => {
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

  const handleFocus = event => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }

    const newFocus = parseFloat(event.target.value);
    setState(prev => ({
      hover: prev.hover,
      focus: newFocus
    }));

    if (onChangeHover && focus !== newFocus) {
      onChangeHover(event, newFocus);
    }
  };

  const handleBlur = event => {
    if (hover !== -1) {
      return;
    }

    if (focusVisible !== false) {
      setFocusVisible(false);
      onBlurVisible();
    }

    const newFocus = -1;
    setState(prev => ({
      hover: prev.hover,
      focus: newFocus
    }));

    if (onChangeHover && focus !== newFocus) {
      onChangeHover(event, newFocus);
    }
  };

  const item = (state, labelProps = {}) => {
    const id = `${name}-${String(state.value).replace('.', '-')}`;
    const container = /*#__PURE__*/React.createElement(IconContainerComponent, {
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
    className: classNames(`rating size--${size}`, interactive ? 'interactive' : 'read-only', className, focusVisible && 'focus-visible'),
    role: !interactive ? 'img' : null,
    "aria-label": !interactive ? getLabelText(value) : null
  }, props), [...new Array(max)].map((_, index) => {
    const itemValue = index + 1;

    if (precision < 1) {
      const items = [...new Array(1 / precision)];
      return /*#__PURE__*/React.createElement("div", {
        key: itemValue,
        className: "rating-item decimal" + (itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1) ? " active" : "")
      }, items.map(($, indexDecimal) => {
        const itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
        return item({
          value: itemDecimalValue,
          filled: itemDecimalValue <= value,
          hover: itemDecimalValue <= hover,
          focus: itemDecimalValue <= focus,
          checked: itemDecimalValue === valueRounded
        }, {
          style: items.length - 1 === indexDecimal ? {} : {
            width: itemDecimalValue === value ? `${(indexDecimal + 1) * precision * 100}%` : '0%',
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
    id: `${name}-empty`,
    type: "radio",
    name: name,
    defaultChecked: true,
    className: "hidden"
  }), /*#__PURE__*/React.createElement("label", {
    className: "rating-empty",
    htmlFor: `${name}-empty`
  }, /*#__PURE__*/React.createElement("span", {
    className: "hidden"
  }, emptyLabelText))), !interactive && count ? /*#__PURE__*/React.createElement("span", {
    className: "rating-count"
  }, count) : null);
});
Rating.bdsName = 'Rating';
export { Rating };
export default Rating;