import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";

var _Filter, _SearchIcon, _IconButton;

const _excluded = ["children", "className", "size", "shape"];
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

const DataTableToolbar = _ref => {
  let {
    className,
    size: sizeProp = 'medium',
    shape: shapeProp = 'rounded'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    enableFilters,
    enableSearch,
    menuItems = [],
    showFilters,
    showSearch,
    setShowFilters,
    setShowSearch,
    setGlobalFilter,
    state,
    toolbar,
    size: sizeContext,
    shape: shapeContext
  } = useDataTable();
  const size = sizeContext || sizeProp;
  const shape = shapeContext || shapeProp;
  const [value, setValue] = React.useState(state.globalFilter || '');

  const handleShowFilters = () => setShowFilters(true);

  const handleHideFilters = () => setShowFilters(false);

  const handleSearchToggle = () => {
    setShowSearch(show => !show);
  };

  const handleSearchDebounce = useAsyncDebounce(val => {
    setGlobalFilter(val);
  }, 200);

  const handleSearchChange = (_, val) => {
    setValue(val);
  };

  const clearSearch = () => {
    setValue('');
  };

  React.useEffect(() => {
    handleSearchDebounce(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(DataTableToolbarWrapper, _extends({
    className: classNames(`data-table-toolbar size--${size} shape--${shape}`, className)
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
  }, toolbar.map((tool, index) => tool ? /*#__PURE__*/React.cloneElement(tool, {
    key: index,
    shape
  }) : null)), menuItems.length > 0 && /*#__PURE__*/React.createElement(MenuPopover, {
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