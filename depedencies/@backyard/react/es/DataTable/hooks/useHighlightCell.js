import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["Cell"];
import * as React from 'react';

function escapeRegExp(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

const HighlightText = ({
  text = '',
  highlight = ''
}) => {
  if (!highlight) {
    return /*#__PURE__*/React.createElement("span", null, text);
  }

  const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi');
  const parts = text.split(regex);
  return /*#__PURE__*/React.createElement("span", null, parts.filter(part => part).map((part, i) => regex.test(part) ? /*#__PURE__*/React.createElement("b", {
    key: i,
    style: {
      textDecoration: 'underline'
    }
  }, part) : /*#__PURE__*/React.createElement("span", {
    key: i
  }, part)));
};

const addHighlightCell = hooks => {
  hooks.visibleColumns.push(columns => [...columns.map(_ref => {
    let {
      Cell
    } = _ref,
        column = _objectWithoutPropertiesLoose(_ref, _excluded);

    return _extends({}, column, {
      OriginalCell: Cell,
      Cell: ({
        cell,
        state
      }) => {
        const text = String(cell.value);
        const filter = state.globalFilter;
        return typeof Cell !== 'undefined' ? cell.render('OriginalCell') : /*#__PURE__*/React.createElement(HighlightText, {
          text: text,
          highlight: filter
        });
      }
    });
  })]);
};

const useHighlightCell = disableFuzzyHighlight => {
  return !disableFuzzyHighlight ? addHighlightCell : () => null;
};

export { useHighlightCell, addHighlightCell, HighlightText };
export default useHighlightCell;