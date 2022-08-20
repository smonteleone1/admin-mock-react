import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "anchor", "drawer", "style", "drawerStyle", "position"];
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import ModalController from '../ModalController';
import { useBackyardTheme } from '../ThemeProvider';
import DrawerControllerBase from './styles/DrawerControllerBase'; // Inherit from `ModalController`

const DrawerControllerWrapper = styled(ModalController).withConfig({
  displayName: "DrawerController__DrawerControllerWrapper",
  componentId: "sc-ijaxzq-0"
})(["", ""], DrawerControllerBase); // Maps `DrawerController`'s `anchor` to `Drawer`'s `orientation`

const orientationMap = {
  top: 'horizontal',
  bottom: 'horizontal',
  left: 'vertical',
  right: 'vertical'
}; // Maps `DraweController`'s `anchor` to CSS Properties for positioning

const positionMap = {
  top: {
    top: '0'
  },
  bottom: {
    bottom: '0'
  },
  left: {
    left: '0'
  },
  right: {
    right: '0'
  }
};
/**
 * Backyard React Drawer Controller
 *
 * Extends from `DrawerHandler` to offer and cleaner API to work with
 *
 * Controls drawer defined in `drawer` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `DrawerHandler`
 *
 * Example:
 *  <DrawerController
 *      drawer={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */

const DrawerController = /*#__PURE__*/React.forwardRef(function DrawerController(_ref, ref) {
  let {
    className,
    anchor = 'left',
    drawer: drawerProp,
    style: styleProp,
    drawerStyle: drawerStyleProp,
    position: positionProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme({
    validate: true,
    name: 'DrawerController'
  }); // Memoize style prop

  const style = React.useMemo(() => _extends({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.drawer
  }, styleProp), [theme.name, styleProp]); // Memoize modal style

  const drawerStyle = React.useMemo(() => _extends({
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    transform: 'none'
  }, drawerProp?.props?.style, drawerStyleProp), [theme.zIndex]); // Memoize modal render

  const drawer = React.useMemo(() => /*#__PURE__*/React.cloneElement(drawerProp, {
    style: drawerStyle
  }), [drawerStyle]); // Memoize position on page

  const position = React.useMemo(() => positionProp || positionMap[anchor], [positionProp, anchor]); // Memoize context props

  const context = React.useMemo(() => ({
    orientation: orientationMap[anchor]
  }), [anchor]);
  /**
   * Layout:
   *  <DrawerHandler>
   *      ...
   *  </DrawerHandler>
   */

  return /*#__PURE__*/React.createElement(DrawerControllerWrapper, _extends({
    className: classNames(`drawer-controller anchor--${anchor}`, className),
    modal: drawer,
    modalStyle: drawerStyle,
    position: position,
    context: context,
    style: style
  }, props, {
    ref: ref
  }));
});
DrawerController.bdsName = 'DrawerController';
export { DrawerController };
export default DrawerController;