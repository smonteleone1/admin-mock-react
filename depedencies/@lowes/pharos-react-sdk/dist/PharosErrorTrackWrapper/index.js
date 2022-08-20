"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _pharos = _interopRequireDefault(require("@lowes/pharos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-unresolved */
var _ref = /*#__PURE__*/_react.default.createElement("h1", null, "Something went wrong.");

class PharosTrackErrorBoundary extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  } // eslint-disable-next-line


  componentDidCatch(error, info) {
    if (_pharos.default.trackError) {
      _pharos.default.trackError(error.stack);
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return _ref;
    }

    return this.props.children || null;
  }

}

exports.default = PharosTrackErrorBoundary;