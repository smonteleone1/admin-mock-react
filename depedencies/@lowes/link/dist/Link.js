"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./link.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateClasses = props => {
  const classes = props.classes.slice(0);

  if (!!props.isInverse === true) {
    classes.push('inverse');
  }

  if (!!props.isUnderline === true) {
    classes.push('underline');
  }

  return classes.join(' ');
};

const Link = props => {
  const classString = generateClasses(props);

  if (classString.length > 0) {
    return _react.default.createElement("a", {
      href: props.href,
      title: props.title,
      className: classString
    }, props.children);
  }

  return _react.default.createElement("a", {
    href: props.href,
    title: props.title
  }, props.children);
};

Link.propTypes = {
  href: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  isClose: _propTypes.default.bool,
  isInverse: _propTypes.default.bool,
  isUnderline: _propTypes.default.bool
};
Link.defaultProps = {
  isInverse: false,
  isUnderline: false,
  title: 'title',
  classes: [],
  isClose: false
};
var _default = Link;
exports.default = _default;