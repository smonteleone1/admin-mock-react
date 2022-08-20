"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StubPagination = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _DataTableProvider = _interopRequireDefault(require("../DataTableProvider"));

var _DataTablePagination = _interopRequireDefault(require("./DataTablePagination"));

var _makeData = _interopRequireDefault(require("../utils/makeData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StubPagination = function StubPagination(props) {
  var rowsPerPageOptions = props.rowsPerPageOptions,
      size = props.size,
      onChange = props.onChange,
      paginationProps = props.paginationProps,
      length = props.length;
  var p = {
    rowsPerPageOptions: rowsPerPageOptions,
    size: size,
    onChange: onChange,
    paginationProps: paginationProps
  };
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName'
    }, {
      Header: 'Last Name',
      accessor: 'lastName'
    }, {
      Header: 'Age',
      accessor: 'age'
    }, {
      Header: 'Visits',
      accessor: 'visits'
    }, {
      Header: 'Status',
      accessor: 'status'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress'
    }];
  }, []);
  var data = React.useMemo(function () {
    return (0, _makeData["default"])(length);
  }, []);
  return /*#__PURE__*/React.createElement(_DataTableProvider["default"], {
    columns: columns,
    data: data
  }, /*#__PURE__*/React.createElement(_DataTablePagination["default"], p));
};

exports.StubPagination = StubPagination;
process.env.NODE_ENV !== "production" ? StubPagination.propTypes = {
  length: _propTypes["default"].number
} : void 0;
var _default = StubPagination;
exports["default"] = _default;