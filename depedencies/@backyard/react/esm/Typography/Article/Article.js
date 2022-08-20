import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import * as React from 'react';
import { ArticleRegular } from './styles';
/**
 * Backyard React Article
 *
 * Internal Component for Typography
 */

var Article = /*#__PURE__*/React.forwardRef(function Article(_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ArticleRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Article.bdsName = 'Article';
export { Article };
export default Article;