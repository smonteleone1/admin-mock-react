import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "id", "selected"];
import * as React from 'react';
import classNames from 'classnames';
import TabContentWrapper from './style/TabContentWrapper';
var TabContent = /*#__PURE__*/React.forwardRef(function TabContent(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TabContentWrapper, _extends({
    id: id,
    className: classNames('tab-content', className, selected && "selected"),
    hidden: !selected,
    ref: ref,
    role: "tabpanel"
  }, props), children);
});
TabContent.bdsName = 'TabContent';
export { TabContent };
export default TabContent;