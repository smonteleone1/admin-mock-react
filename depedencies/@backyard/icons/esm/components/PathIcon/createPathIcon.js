import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
import * as React from 'react';
import PathIcon from "./PathIcon";

var pascalToKebab = function pascalToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2').toLowerCase();
};

var createPathIcon = function createPathIcon(path, displayName) {
  return /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        props = _objectWithoutProperties(_ref, _excluded);

    var classes = ["icon-".concat(pascalToKebab(displayName)), className].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement(PathIcon, _extends({
      className: classes
    }, props, {
      ref: ref
    }), path);
  }));
};

export { createPathIcon };
export default createPathIcon;