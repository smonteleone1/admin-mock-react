import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "anchor", "drawer", "style", "drawerStyle", "position"];
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import ModalController from '../ModalController';
import { useBackyardTheme } from '../ThemeProvider';
import DrawerControllerBase from './styles/DrawerControllerBase'; // Inherit from `ModalController`

var DrawerControllerWrapper = styled(ModalController).withConfig({
  displayName: "DrawerController__DrawerControllerWrapper",
  componentId: "sc-ijaxzq-0"
})(["", ""], DrawerControllerBase); // Maps `DrawerController`'s `anchor` to `Drawer`'s `orientation`

var orientationMap = {
  top: 'horizontal',
  bottom: 'horizontal',
  left: 'vertical',
  right: 'vertical'
}; // Maps `DraweController`'s `anchor` to CSS Properties for positioning

var positionMap = {
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

var DrawerController = /*#__PURE__*/React.forwardRef(function DrawerController(_ref, ref) {
  var className = _ref.className,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? 'left' : _ref$anchor,
      drawerProp = _ref.drawer,
      styleProp = _ref.style,
      drawerStyleProp = _ref.drawerStyle,
      positionProp = _ref.position,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme({
    validate: true,
    name: 'DrawerController'
  }); // Memoize style prop

  var style = React.useMemo(function () {
    return _extends({
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.drawer
    }, styleProp);
  }, [theme.name, styleProp]); // Memoize modal style

  var drawerStyle = React.useMemo(function () {
    var _drawerProp$props;

    return _extends({
      position: 'fixed',
      zIndex: theme.zIndex.drawer + 1,
      transform: 'none'
    }, drawerProp === null || drawerProp === void 0 ? void 0 : (_drawerProp$props = drawerProp.props) === null || _drawerProp$props === void 0 ? void 0 : _drawerProp$props.style, drawerStyleProp);
  }, [theme.zIndex]); // Memoize modal render

  var drawer = React.useMemo(function () {
    return /*#__PURE__*/React.cloneElement(drawerProp, {
      style: drawerStyle
    });
  }, [drawerStyle]); // Memoize position on page

  var position = React.useMemo(function () {
    return positionProp || positionMap[anchor];
  }, [positionProp, anchor]); // Memoize context props

  var context = React.useMemo(function () {
    return {
      orientation: orientationMap[anchor]
    };
  }, [anchor]);
  /**
   * Layout:
   *  <DrawerHandler>
   *      ...
   *  </DrawerHandler>
   */

  return /*#__PURE__*/React.createElement(DrawerControllerWrapper, _extends({
    className: classNames("drawer-controller anchor--".concat(anchor), className),
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