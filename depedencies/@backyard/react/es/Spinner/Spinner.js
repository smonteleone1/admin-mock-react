import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "show", "small", "invisible", "inline", "color"];
import * as React from 'react';
import classNames from 'classnames';
import Loading from '@backyard/icons/Loading';
import Overlay from '../Overlay';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import SpinnerWrapper from './styles/SpinnerWrapper';
/**
 * Backyard React Spinner
 *
 * To be used when retrieving data or performing slow computations.
 * They notify to the user that their request is being processed.
 *
 * <Spinner show={true}
 *          color={'commerce'}
 *          invisible/>
 *
 * Loading spinners may be scaled down by adding the `inline` attribute if the loading experience is contextual
 * to a certain item on the page.
 *
 *  <Spinner
 *      show
 *      small
 *      inline
 *  />
 */

const Spinner = /*#__PURE__*/React.forwardRef(function Spinner(_ref, ref) {
  let {
    className,
    show = false,
    small = false,
    invisible = false,
    inline = false,
    color = inline ? 'interactive' : 'white'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Spinner');
  /**
   * Builds out the spinner to either wrap the Loading icon with the Overlay if its not inline mode
   * or provides just the Loading icon if it is in inline mode
   */

  const spinner = inline ? /*#__PURE__*/React.createElement(Loading, {
    color: color
  }) : /*#__PURE__*/React.createElement(Overlay, {
    className: classNames('spinner-overlay', className),
    open: show,
    invisible: invisible
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-wrapper" + (small ? " size--small" : "")
  }, /*#__PURE__*/React.createElement(Loading, {
    color: color
  })));
  return /*#__PURE__*/React.createElement(SpinnerWrapper, _extends({
    className: classNames(inline && 'inline-spinner', small && 'size--small'),
    show: show,
    small: small,
    ref: ref
  }, props), spinner);
});
Spinner.bdsName = 'Spinner';
export { Spinner };
export default Spinner;