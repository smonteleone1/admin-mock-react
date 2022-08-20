"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SubMenuPopoverHover = exports.SubMenuPopover = exports.DefaultMenuPopover = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _icons = require("@backyard/icons");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _MenuItem, _MenuItem2, _MenuItem3, _MenuItem4, _IconButton, _ApiLink, _Menu, _Departments, _ApiLink2, _Menu2, _Departments2, _ApiLink3;

var _default = {
  title: '@backyard/react/MenuPopover',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultMenuPopover = function DefaultMenuPopover() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.MenuPopover, {
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    menu: /*#__PURE__*/_react["default"].createElement(_.Menu, {
      width: "15rem",
      shape: _addonKnobs.select.apply(void 0, shapes)
    }, _MenuItem || (_MenuItem = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "interactive",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)
    }, "Menu Item")), _MenuItem2 || (_MenuItem2 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.NotesOutlined, null)
    }, "Menu Item")), _MenuItem3 || (_MenuItem3 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.DocumentOutlined, null)
    }, "Menu Item")), _MenuItem4 || (_MenuItem4 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "red",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.TrashOutlined, null)
    }, "Menu Item")))
  }, _IconButton || (_IconButton = /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "ghost",
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_icons.DotsVertical, null)))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/MenuPopover"
  })));
};

exports.DefaultMenuPopover = DefaultMenuPopover;

var SubMenuPopover = function SubMenuPopover() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.MenuPopover, {
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    menu: _Menu || (_Menu = /*#__PURE__*/_react["default"].createElement(_.Menu, {
      width: "15rem"
    }, /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "interactive",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.NotesOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.DocumentOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "red",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.TrashOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.SubMenu, {
      label: "More Options",
      listenHover: true
    }, /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "red"
    }, "Menu Item")))),
    open: true
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "ghost",
    color: "neutral",
    size: "medium",
    style: {
      transform: 'translate(-10rem, -10rem)'
    }
  }, _Departments || (_Departments = /*#__PURE__*/_react["default"].createElement(_icons.Departments, null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/MenuPopover"
  })));
};

exports.SubMenuPopover = SubMenuPopover;

var SubMenuPopoverHover = function SubMenuPopoverHover() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.MenuPopover, {
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    disableClick: true,
    listenHover: true,
    menu: _Menu2 || (_Menu2 = /*#__PURE__*/_react["default"].createElement(_.Menu, {
      width: "15rem"
    }, /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "interactive",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.NotesOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.DocumentOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "red",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.TrashOutlined, null)
    }, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.SubMenu, {
      label: "More Options",
      listenHover: true
    }, /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
      color: "red"
    }, "Menu Item")))),
    open: true
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "ghost",
    color: "neutral",
    size: "medium",
    style: {
      transform: 'translate(-10rem, -10rem)'
    }
  }, _Departments2 || (_Departments2 = /*#__PURE__*/_react["default"].createElement(_icons.Departments, null)))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/MenuPopover"
  })));
};

exports.SubMenuPopoverHover = SubMenuPopoverHover;