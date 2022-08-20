import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "id", "selected"];
import * as React from 'react';
import classNames from 'classnames';
import TabContentWrapper from './style/TabContentWrapper';
const TabContent = /*#__PURE__*/React.forwardRef(function TabContent(_ref, ref) {
  let {
    children,
    className,
    id,
    selected
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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