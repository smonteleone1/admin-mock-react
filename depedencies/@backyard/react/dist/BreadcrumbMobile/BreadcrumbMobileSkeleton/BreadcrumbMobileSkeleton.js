"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BreadcrumbMobileSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _IconButtonSkeleton = _interopRequireDefault(require("../../IconButton/IconButtonSkeleton"));

var _BreadcrumbMobileSkeletonWrapper = _interopRequireDefault(require("./styles/BreadcrumbMobileSkeletonWrapper"));

var _excluded = ["animate", "width", "className", "iconButtonSkeletonProps", "typographySkeletonProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BreadcrumbMobileSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbMobileSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      className = _ref.className,
      iconButtonSkeletonProps = _ref.iconButtonSkeletonProps,
      typographySkeletonProps = _ref.typographySkeletonProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_BreadcrumbMobileSkeletonWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, 'breadcrumb-mobile--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_IconButtonSkeleton["default"], (0, _extends2["default"])({
    size: "small",
    animate: animate
  }, iconButtonSkeletonProps)), /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "rect",
    height: "size_24",
    width: width || '15rem',
    animate: animate
  }, typographySkeletonProps, {
    style: (0, _extends2["default"])({
      marginLeft: 'var(--bds-sizes-size-8)'
    }, typographySkeletonProps === null || typographySkeletonProps === void 0 ? void 0 : typographySkeletonProps.style)
  })));
});
exports.BreadcrumbMobileSkeleton = BreadcrumbMobileSkeleton;
BreadcrumbMobileSkeleton.bdsName = 'BreadcrumbMobileSkeleton';
var _default = BreadcrumbMobileSkeleton;
exports["default"] = _default;