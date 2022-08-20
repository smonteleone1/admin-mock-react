import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children"];
import * as React from 'react';
import { ArticleRegular } from './styles';
/**
 * Backyard React Article
 *
 * Internal Component for Typography
 */

const Article = /*#__PURE__*/React.forwardRef(function Article(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ArticleRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Article.bdsName = 'Article';
export { Article };
export default Article;