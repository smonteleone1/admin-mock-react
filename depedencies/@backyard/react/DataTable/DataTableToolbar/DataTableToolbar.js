"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableToolbar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTable = require("react-table");

var _Filter2 = _interopRequireDefault(require("@backyard/icons/Filter"));

var _SearchIcon2 = _interopRequireDefault(require("@backyard/icons/SearchIcon"));

var _DotsVertical = _interopRequireDefault(require("@backyard/icons/DotsVertical"));

var _DataTableToolbarWrapper = _interopRequireDefault(require("./styles/DataTableToolbarWrapper"));

var _IconButton2 = _interopRequireDefault(require("../../IconButton"));

var _MenuPopover = _interopRequireDefault(require("../../MenuPopover"));

var _Menu = require("../../Menu");

var _hooks = require("../hooks");

var _Search = _interopRequireDefault(require("../../Search"));

var _ClickAwayListener = _interopRequireDefault(require("../../ClickAwayListener"));

var _Toggle = require("../../Toggle");

var _Filter, _SearchIcon, _IconButton;

var _excluded = ["children", "className", "size", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Data Table Toolbar
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the toolbar of the data table
 */
var DataTableToolbar = function DataTableToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      sizeProp = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$shape = _ref.shape,
      shapeProp = _ref$shape === void 0 ? 'rounded' : _ref$shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useDataTable = (0, _hooks.useDataTable)(),
      enableFilters = _useDataTable.enableFilters,
      enableSearch = _useDataTable.enableSearch,
      _useDataTable$menuIte = _useDataTable.menuItems,
      menuItems = _useDataTable$menuIte === void 0 ? [] : _useDataTable$menuIte,
      showFilters = _useDataTable.showFilters,
      showSearch = _useDataTable.showSearch,
      setShowFilters = _useDataTable.setShowFilters,
      setShowSearch = _useDataTable.setShowSearch,
      setGlobalFilter = _useDataTable.setGlobalFilter,
      state = _useDataTable.state,
      toolbar = _useDataTable.toolbar,
      sizeContext = _useDataTable.size,
      shapeContext = _useDataTable.shape;

  var size = sizeContext || sizeProp;
  var shape = shapeContext || shapeProp;

  var _React$useState = React.useState(state.globalFilter || ''),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleShowFilters = function handleShowFilters() {
    return setShowFilters(true);
  };

  var handleHideFilters = function handleHideFilters() {
    return setShowFilters(false);
  };

  var handleSearchToggle = function handleSearchToggle() {
    setShowSearch(function (show) {
      return !show;
    });
  };

  var handleSearchDebounce = (0, _reactTable.useAsyncDebounce)(function (val) {
    setGlobalFilter(val);
  }, 200);

  var handleSearchChange = function handleSearchChange(_, val) {
    setValue(val);
  };

  var clearSearch = function clearSearch() {
    setValue('');
  };

  React.useEffect(function () {
    handleSearchDebounce(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(_DataTableToolbarWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("data-table-toolbar size--".concat(size, " shape--").concat(shape), className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "table-toolbar-action-buttons"
  }, /*#__PURE__*/React.createElement(_Toggle.Toggle, (0, _extends2["default"])({
    variant: "ghost",
    buttonProps: {
      variant: 'ghost'
    },
    selectedButtonProps: {
      variant: 'primary'
    },
    exclusive: true,
    shape: shape
  }, showFilters ? {
    value: 'show'
  } : {}), /*#__PURE__*/React.createElement(_Toggle.ToggleButton, {
    disabled: !enableFilters,
    className: 'filter-button',
    size: "small",
    value: "show",
    onSelect: handleShowFilters,
    onDeselect: handleHideFilters,
    shape: shape
  }, _Filter || (_Filter = /*#__PURE__*/React.createElement(_Filter2["default"], null)))), !showSearch && !state.globalFilter ? /*#__PURE__*/React.createElement(_IconButton2["default"], {
    className: 'search-button',
    disabled: !enableSearch,
    size: "small",
    variant: "ghost",
    shape: shape,
    onClick: handleSearchToggle
  }, _SearchIcon || (_SearchIcon = /*#__PURE__*/React.createElement(_SearchIcon2["default"], null))) : /*#__PURE__*/React.createElement(_ClickAwayListener["default"], {
    onClickAway: handleSearchToggle
  }, /*#__PURE__*/React.createElement(_Search["default"], {
    className: 'search-field',
    variant: "filled",
    fill: "canvas",
    placeholder: "Search",
    size: "small",
    shape: shape,
    onChange: handleSearchChange,
    onClearClick: clearSearch,
    value: value
  }))), /*#__PURE__*/React.createElement("div", {
    className: "toolbar-tools"
  }, toolbar.map(function (tool, index) {
    return tool ? /*#__PURE__*/React.cloneElement(tool, {
      key: index,
      shape: shape
    }) : null;
  })), menuItems.length > 0 && /*#__PURE__*/React.createElement(_MenuPopover["default"], {
    placement: "bottom-end",
    menu: /*#__PURE__*/React.createElement(_Menu.Menu, {
      items: menuItems,
      shape: shape,
      width: "10rem"
    }),
    shape: shape
  }, _IconButton || (_IconButton = /*#__PURE__*/React.createElement(_IconButton2["default"], {
    size: "small",
    color: "interactive",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(_DotsVertical["default"], null)))));
};

exports.DataTableToolbar = DataTableToolbar;
process.env.NODE_ENV !== "production" ? DataTableToolbar.propTypes = {
  size: _propTypes["default"].oneOf(['large', 'medium', 'small']),
  shape: _propTypes["default"].oneOf(['rounded', 'squared'])
} : void 0;
var _default = DataTableToolbar;
exports["default"] = _default;