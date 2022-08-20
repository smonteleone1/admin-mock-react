import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "cols", "xsCols", "smCols", "mdCols", "lgCols", "xlCols", "xxlCols", "gutter", "xsGutter", "smGutter", "mdGutter", "lgGutter", "xlGutter", "xxlGutter", "gap", "xsGap", "smGap", "mdGap", "lgGap", "xlGap", "xxlGap", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { GridRow as RowBase } from '../styles/GridStyles';
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider';
const RowV3 = /*#__PURE__*/React.forwardRef(function Row(_ref, ref) {
  let {
    className,
    children,
    cols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    gutter,
    xsGutter,
    smGutter,
    mdGutter,
    lgGutter,
    xlGutter,
    xxlGutter,
    gap,
    xsGap,
    smGap,
    mdGap,
    lgGap,
    xlGap,
    xxlGap,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Grid.Row');

  const changeSize = gutter => {
    let newGutter;

    if (gutter === undefined) {
      newGutter = undefined;
    } else {
      newGutter = gutter.split('_').join('-');
    }

    return newGutter;
  };

  const getGutterValues = () => {
    return {
      '--gutter-default': `var(--bds-sizes-${changeSize(gutter) || 'size-16'})`,
      '--gutter-xs': `var(--bds-sizes-${changeSize(xsGutter) || changeSize(gutter) || 'size-16'})`,
      '--gutter-sm': `var(--bds-sizes-${changeSize(smGutter) || changeSize(gutter) || 'size-32'})`,
      '--gutter-md': `var(--bds-sizes-${changeSize(mdGutter) || changeSize(gutter) || 'size-32'})`,
      '--gutter-lg': `var(--bds-sizes-${changeSize(lgGutter) || changeSize(gutter) || 'size-32'})`,
      '--gutter-xl': `var(--bds-sizes-${changeSize(xlGutter) || changeSize(gutter) || 'size-40'})`,
      '--gutter-xxl': `var(--bds-sizes-${changeSize(xxlGutter) || changeSize(gutter) || 'size-56'})`
    };
  };

  const getGapValues = () => {
    return {
      '--gap-default': `var(--bds-sizes-${changeSize(gap) || 'size-32'})`,
      '--gap-xs': `var(--bds-sizes-${changeSize(xsGap) || changeSize(gap) || 'size-32'})`,
      '--gap-sm': `var(--bds-sizes-${changeSize(smGap) || changeSize(gap) || 'size-32'})`,
      '--gap-md': `var(--bds-sizes-${changeSize(mdGap) || changeSize(gap) || 'size-32'})`,
      '--gap-lg': `var(--bds-sizes-${changeSize(lgGap) || changeSize(gap) || 'size-32'})`,
      '--gap-xl': `var(--bds-sizes-${changeSize(xlGap) || changeSize(gap) || 'size-32'})`,
      '--gap-xxl': `var(--bds-sizes-${changeSize(xxlGap) || changeSize(gap) || 'size-32'})`
    };
  };

  const getColsValues = () => {
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