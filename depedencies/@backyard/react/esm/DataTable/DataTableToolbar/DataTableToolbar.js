import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _pt from "prop-types";

var _Filter, _SearchIcon, _IconButton;

var _excluded = ["children", "className", "size", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import { useAsyncDebounce } from 'react-table';
import Filter from '@backyard/icons/Filter';
import SearchIcon from '@backyard/icons/SearchIcon';
import DotsVertical from '@backyard/icons/DotsVertical';
import DataTableToolbarWrapper from './styles/DataTableToolbarWrapper';
import IconButton from '../../IconButton';
import MenuPopover from '../../MenuPopover';
import { Menu } from '../../Menu';
import { useDataTable } from '../hooks';
import Search from '../../Search';
import ClickAwayListener from '../../ClickAwayListener';
import { Toggle, ToggleButton } from '../../Toggle';
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
      props = _objectWithoutProperties(_ref, _excluded);

  var _useDataTable = useDataTable(),
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
      _React$useState2 = _slicedToArray(_React$useState, 2),
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

  var handleSearchDebounce = useAsyncDebounce(function (val) {
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
  return /*#__PURE__*/React.createElement(DataTableToolbarWrapper, _extends({
    className: classNames("data-table-toolbar size--".concat(size, " shape--").concat(shape), className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "table-toolbar-action-buttons"
  }, /*#__PURE__*/React.createElement(Toggle, _extends({
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
  } : {}), /*#__PURE__*/React.createElement(ToggleButton, {
    disabled: !enableFilters,
    className: 'filter-button',
    size: "small",
    value: "show",
    onSelect: handleShowFilters,
    onDeselect: handleHideFilters,
    shape: shape
  }, _Filter || (_Filter = /*#__PURE__*/React.createElement(Filter, null)))), !showSearch && !state.globalFilter ? /*#__PURE__*/React.createElement(IconButton, {
    className: 'search-button',
    disabled: !enableSearch,
    size: "small",
    variant: "ghost",
    shape: shape,
    onClick: handleSearchToggle
  }, _SearchIcon || (_SearchIcon = /*#__PURE__*/React.createElement(SearchIcon, null))) : /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleSearchToggle
  }, /*#__PURE__*/React.createElement(Search, {
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
  })), menuItems.length > 0 && /*#__PURE__*/React.createElement(MenuPopover, {
    placement: "bottom-end",
    menu: /*#__PURE__*/React.createElement(Menu, {
      items: menuItems,
      shape: shape,
      width: "10rem"
    }),
    shape: shape
  }, _IconButton || (_IconButton = /*#__PURE__*/React.createElement(IconButton, {
    size: "small",
    color: "interactive",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(DotsVertical, null)))));
};

process.env.NODE_ENV !== "production" ? DataTableToolbar.propTypes = {
  size: _pt.oneOf(['large', 'medium', 'small']),
  shape: _pt.oneOf(['rounded', 'squared'])
} : void 0;
export { DataTableToolbar };
export default DataTableToolbar;