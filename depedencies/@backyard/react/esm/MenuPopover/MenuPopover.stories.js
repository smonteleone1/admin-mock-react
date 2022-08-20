var _MenuItem, _MenuItem2, _MenuItem3, _MenuItem4, _IconButton, _ApiLink, _Menu, _Departments, _ApiLink2, _Menu2, _Departments2, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, IconButton, MenuPopover, Menu, MenuItem, SubMenu } from '../';
import { HomeOutlined, NotesOutlined, DocumentOutlined, TrashOutlined, DotsVertical, Departments } from '@backyard/icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
export default {
  title: '@backyard/react/MenuPopover',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultMenuPopover = function DefaultMenuPopover() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuPopover, {
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    menu: /*#__PURE__*/React.createElement(Menu, {
      width: "15rem",
      shape: select.apply(void 0, shapes)
    }, _MenuItem || (_MenuItem = /*#__PURE__*/React.createElement(MenuItem, {
      color: "interactive",
      iconBefore: /*#__PURE__*/React.createElement(HomeOutlined, null)
    }, "Menu Item")), _MenuItem2 || (_MenuItem2 = /*#__PURE__*/React.createElement(MenuItem, {
      iconBefore: /*#__PURE__*/React.createElement(NotesOutlined, null)
    }, "Menu Item")), _MenuItem3 || (_MenuItem3 = /*#__PURE__*/React.createElement(MenuItem, {
      iconBefore: /*#__PURE__*/React.createElement(DocumentOutlined, null)
    }, "Menu Item")), _MenuItem4 || (_MenuItem4 = /*#__PURE__*/React.createElement(MenuItem, {
      color: "red",
      iconBefore: /*#__PURE__*/React.createElement(TrashOutlined, null)
    }, "Menu Item")))
  }, _IconButton || (_IconButton = /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "small"
  }, /*#__PURE__*/React.createElement(DotsVertical, null)))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/MenuPopover"
  })));
};
export var SubMenuPopover = function SubMenuPopover() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(MenuPopover, {
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    menu: _Menu || (_Menu = /*#__PURE__*/React.createElement(Menu, {
      width: "15rem"
    }, /*#__PURE__*/React.createElement(MenuItem, {
      color: "interactive",
      iconBefore: /*#__PURE__*/React.createElement(HomeOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      iconBefore: /*#__PURE__*/React.createElement(NotesOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      iconBefore: /*#__PURE__*/React.createElement(DocumentOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      color: "red",
      iconBefore: /*#__PURE__*/React.createElement(TrashOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(SubMenu, {
      label: "More Options",
      listenHover: true
    }, /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      color: "red"
    }, "Menu Item")))),
    open: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    color: "neutral",
    size: "medium",
    style: {
      transform: 'translate(-10rem, -10rem)'
    }
  }, _Departments || (_Departments = /*#__PURE__*/React.createElement(Departments, null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/MenuPopover"
  })));
};
export var SubMenuPopoverHover = function SubMenuPopoverHover() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(MenuPopover, {
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    disableClick: true,
    listenHover: true,
    menu: _Menu2 || (_Menu2 = /*#__PURE__*/React.createElement(Menu, {
      width: "15rem"
    }, /*#__PURE__*/React.createElement(MenuItem, {
      color: "interactive",
      iconBefore: /*#__PURE__*/React.createElement(HomeOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      iconBefore: /*#__PURE__*/React.createElement(NotesOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      iconBefore: /*#__PURE__*/React.createElement(DocumentOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      color: "red",
      iconBefore: /*#__PURE__*/React.createElement(TrashOutlined, null)
    }, "Menu Item"), /*#__PURE__*/React.createElement(SubMenu, {
      label: "More Options",
      listenHover: true
    }, /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, null, "Menu Item"), /*#__PURE__*/React.createElement(MenuItem, {
      color: "red"
    }, "Menu Item")))),
    open: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    color: "neutral",
    size: "medium",
    style: {
      transform: 'translate(-10rem, -10rem)'
    }
  }, _Departments2 || (_Departments2 = /*#__PURE__*/React.createElement(Departments, null)))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/MenuPopover"
  })));
};