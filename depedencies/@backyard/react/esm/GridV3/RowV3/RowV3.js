import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "cols", "xsCols", "smCols", "mdCols", "lgCols", "xlCols", "xxlCols", "gutter", "xsGutter", "smGutter", "mdGutter", "lgGutter", "xlGutter", "xxlGutter", "gap", "xsGap", "smGap", "mdGap", "lgGap", "xlGap", "xxlGap", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { GridRow as RowBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
var RowV3 = /*#__PURE__*/React.forwardRef(function Row(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      cols = _ref.cols,
      xsCols = _ref.xsCols,
      smCols = _ref.smCols,
      mdCols = _ref.mdCols,
      lgCols = _ref.lgCols,
      xlCols = _ref.xlCols,
      xxlCols = _ref.xxlCols,
      gutter = _ref.gutter,
      xsGutter = _ref.xsGutter,
      smGutter = _ref.smGutter,
      mdGutter = _ref.mdGutter,
      lgGutter = _ref.lgGutter,
      xlGutter = _ref.xlGutter,
      xxlGutter = _ref.xxlGutter,
      gap = _ref.gap,
      xsGap = _ref.xsGap,
      smGap = _ref.smGap,
      mdGap = _ref.mdGap,
      lgGap = _ref.lgGap,
      xlGap = _ref.xlGap,
      xxlGap = _ref.xxlGap,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Row');

  var changeSize = function changeSize(gutter) {
    var newGutter;

    if (gutter === undefined) {
      newGutter = undefined;
    } else {
      newGutter = gutter.split('_').join('-');
    }

    return newGutter;
  };

  var getGutterValues = function getGutterValues() {
    return {
      '--gutter-default': "var(--bds-sizes-".concat(changeSize(gutter) || 'size-16', ")"),
      '--gutter-xs': "var(--bds-sizes-".concat(changeSize(xsGutter) || changeSize(gutter) || 'size-16', ")"),
      '--gutter-sm': "var(--bds-sizes-".concat(changeSize(smGutter) || changeSize(gutter) || 'size-32', ")"),
      '--gutter-md': "var(--bds-sizes-".concat(changeSize(mdGutter) || changeSize(gutter) || 'size-32', ")"),
      '--gutter-lg': "var(--bds-sizes-".concat(changeSize(lgGutter) || changeSize(gutter) || 'size-32', ")"),
      '--gutter-xl': "var(--bds-sizes-".concat(changeSize(xlGutter) || changeSize(gutter) || 'size-40', ")"),
      '--gutter-xxl': "var(--bds-sizes-".concat(changeSize(xxlGutter) || changeSize(gutter) || 'size-56', ")")
    };
  };

  var getGapValues = function getGapValues() {
    return {
      '--gap-default': "var(--bds-sizes-".concat(changeSize(gap) || 'size-32', ")"),
      '--gap-xs': "var(--bds-sizes-".concat(changeSize(xsGap) || changeSize(gap) || 'size-32', ")"),
      '--gap-sm': "var(--bds-sizes-".concat(changeSize(smGap) || changeSize(gap) || 'size-32', ")"),
      '--gap-md': "var(--bds-sizes-".concat(changeSize(mdGap) || changeSize(gap) || 'size-32', ")"),
      '--gap-lg': "var(--bds-sizes-".concat(changeSize(lgGap) || changeSize(gap) || 'size-32', ")"),
      '--gap-xl': "var(--bds-sizes-".concat(changeSize(xlGap) || changeSize(gap) || 'size-32', ")"),
      '--gap-xxl': "var(--bds-sizes-".concat(changeSize(xxlGap) || changeSize(gap) || 'size-32', ")")
    };
  };

  var getColsValues = function getColsValues() {
    return {
      '--cols-default': cols || 16,
      '--cols-xs': xsCols || cols || 4,
      '--cols-sm': smCols || cols || 8,
      '--cols-md': mdCols || cols || 16,
      '--cols-lg': lgCols || cols || 16,
      '--cols-xl': xlCols || cols || 16,
      '--cols-xxl': xxlCols || cols || 16
    };
  };

  return /*#__PURE__*/React.createElement(RowBase, _extends({
    className: classNames('row', className),
    style: _extends({}, getGutterValues(), getColsValues(), getGapValues(), style)
  }, props, {
    ref: ref
  }), children);
});
RowV3.bdsName = 'Row';
export { RowV3 };
export default RowV3;