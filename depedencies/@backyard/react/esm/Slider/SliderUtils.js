/**
 * Clamps a value between the minimum and the maximum value of the slider.
 * 
 * @param value - the value to be clamped
 * @param min - the minimum value
 * @param max - the maximum value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}
/**
 * 
 * @param values 
 * @param currentValue 
 */

export function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function (_ref) {
    var acc = _ref.acc,
        value = _ref.value,
        index = _ref.index;
    var distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance: distance,
        index: index
      };
    }

    return acc;
  }, null),
      closestIndex = _values$reduce.index;

  return closestIndex;
}
/**
 * Returns the x and y position of the pointer (Touch or Mouse) event.
 * 
 * @param event - the pointer event
 * @param touchId - the ref for the component that recieved the touch event
 */

export function trackFinger(event, touchId) {
  // if touchId is not undefined and the event is a touch event
  if ((touchId === null || touchId === void 0 ? void 0 : touchId.current) !== undefined && event !== null && event !== void 0 && event.changedTouches) {
    // iterate through all touch events performed for this event
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i]; // if the touch event's identifier is equal to the ref's current value

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  } // return the mouse event's x and y position


  return {
    x: event.clientX,
    y: event.clientY
  };
}
export function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
export function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
export function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split('ee-');
    var matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
/**
 * Round the position of the thumb when the mouse releases it to the nearest step.
 * 
 * @param value - the position of the thumb
 * @param step - the step value
 * @param min - the minimum value
 */

export function roundValueToStep(value, step, min, max) {
  var nearest = Math.round(value) !== max ? Math.round((value - min) / step) * step + min : max;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
export function setValueIndex(_ref2) {
  var values = _ref2.values,
      source = _ref2.source,
      newValue = _ref2.newValue,
      index = _ref2.index;

  if (source[index] === newValue) {
    return source;
  }

  var output = values.slice();
  output[index] = newValue;
  return output;
}
/**
 * Focuses the thumb by ref.
 * 
 * @param sliderRef - the ref to the slider
 * @param setActive - the function to set the focus
 */

export function focusThumb(sliderRef, setActive) {
  sliderRef.current.querySelector("[role=\"slider\"]").focus();

  if (setActive) {
    setActive(true);
  }
} // the thumb's position relative values

// the data structure containing functions to calculate the axis offsets and leaps
export var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};
export var Identity = function Identity(x) {
  return x;
};