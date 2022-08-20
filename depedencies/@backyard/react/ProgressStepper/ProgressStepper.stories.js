"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.RowDirection = exports.ColumnDirection = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends8 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _icons = require("@backyard/icons");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _br, _br2, _br3, _CreditCard, _HomeOutlined, _br4, _br5, _br6, _CreditCard2, _HomeOutlined2, _br7, _br8, _ApiLink, _br9, _br10, _br11, _CreditCard3, _HomeOutlined3, _br12, _br13, _br14, _CreditCard4, _HomeOutlined4, _ApiLink2;

var _default = {
  title: '@backyard/react/ProgressStepper',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var StyledGroup = _styledComponents["default"].div.withConfig({
  displayName: "ProgressStepperstories__StyledGroup",
  componentId: "sc-1827d4l-0"
})(["display:flex;justify-content:center;align-items:center;margin-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_32;
});

var sizes = {
  small: 'small',
  large: 'large'
};
var directions = {
  row: 'row',
  column: 'column'
};

var RowDirection = function RowDirection() {
  var _React$useState = _react["default"].useState(0),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _React$useState3 = _react["default"].useState({}),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      states = _React$useState4[0],
      setStates = _React$useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.ProgressStepper, {
    nonLinear: (0, _addonKnobs["boolean"])('Non Linear', false),
    direction: "row",
    size: (0, _addonKnobs.select)('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: function onClick() {
        return setStep(0);
      }
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: function onClick() {
        return setStep(1);
      }
    }, {
      state: states[2],
      title: 'Third Step',
      caption: 'caption text for step three',
      onClick: function onClick() {
        return setStep(2);
      }
    }]
  }), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.ProgressStepper, {
    nonLinear: (0, _addonKnobs["boolean"])('Non Linear', false),
    direction: "row",
    size: (0, _addonKnobs.select)('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: function onClick() {
        return setStep(0);
      }
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: function onClick() {
        return setStep(1);
      }
    }, {
      state: states[2],
      disabled: true,
      icon: _CreditCard || (_CreditCard = /*#__PURE__*/_react["default"].createElement(_icons.CreditCard, null)),
      title: 'Third Step',
      caption: 'caption text for step three (disabled)',
      onClick: function onClick() {
        return setStep(2);
      }
    }, {
      state: states[3],
      icon: _HomeOutlined || (_HomeOutlined = /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)),
      title: 'Fourth Step',
      caption: 'caption text for step four',
      onClick: function onClick() {
        return setStep(3);
      }
    }]
  }), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), _br5 || (_br5 = /*#__PURE__*/_react["default"].createElement("br", null)), _br6 || (_br6 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.ProgressStepper, {
    nonLinear: (0, _addonKnobs["boolean"])('Non Linear', false),
    direction: "row",
    size: (0, _addonKnobs.select)('Sizes', sizes, 'small'),
    step: step
  }, /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[0],
    title: "First Step",
    caption: "caption Text for step one",
    onSelected: (0, _addonActions.action)('onSelected (step 1)'),
    onComplete: (0, _addonActions.action)('onComplete (step 1)'),
    onError: (0, _addonActions.action)('onError (step 1)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 1)'),
    onClick: function onClick() {
      return setStep(0);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[1],
    title: "Second Step",
    caption: "caption text for step two",
    onSelected: (0, _addonActions.action)('onSelected (step 2)'),
    onComplete: (0, _addonActions.action)('onComplete (step 2)'),
    onError: (0, _addonActions.action)('onError (step 2)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 2)'),
    onClick: function onClick() {
      return setStep(1);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[2],
    title: "Third Step",
    caption: "caption text for step three",
    onSelected: (0, _addonActions.action)('onSelected (step 3)'),
    onComplete: (0, _addonActions.action)('onComplete (step 3)'),
    onError: (0, _addonActions.action)('onError (step 3)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 3)'),
    onClick: function onClick() {
      return setStep(2);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[3],
    icon: _CreditCard2 || (_CreditCard2 = /*#__PURE__*/_react["default"].createElement(_icons.CreditCard, null)),
    title: "Fourth Step",
    caption: "caption text for step four",
    onSelected: (0, _addonActions.action)('onSelected (step 4)'),
    onComplete: (0, _addonActions.action)('onComplete (step 4)'),
    onError: (0, _addonActions.action)('onError (step 4)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 4)'),
    onClick: function onClick() {
      return setStep(3);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[4],
    icon: _HomeOutlined2 || (_HomeOutlined2 = /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)),
    title: "Fifth Step",
    caption: "caption text for step five",
    onSelected: (0, _addonActions.action)('onSelected (step 5)'),
    onComplete: (0, _addonActions.action)('onComplete (step 5)'),
    onError: (0, _addonActions.action)('onError (step 5)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 5)'),
    onClick: function onClick() {
      return setStep(4);
    }
  })), _br7 || (_br7 = /*#__PURE__*/_react["default"].createElement("br", null)), _br8 || (_br8 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(StyledGroup, null, /*#__PURE__*/_react["default"].createElement(_.FormGroup, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "secondary",
    color: "neutral",
    size: "small",
    onClick: function onClick() {
      return setStep(function (step) {
        return step - 1;
      });
    }
  }, "Previous Step"), /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    color: "interactive",
    size: "small",
    onClick: function onClick() {
      return setStates(function (states) {
        return (0, _extends8["default"])({}, states, (0, _defineProperty2["default"])({}, step, 'complete'));
      });
    }
  }, "Complete Step"), states[step] === 'error' ? /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    color: "green",
    size: "small",
    onClick: function onClick() {
      return setStates(function (states) {
        return (0, _extends8["default"])({}, states, (0, _defineProperty2["default"])({}, step, null));
      });
    }
  }, "Resolve Error") : /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    color: "red",
    size: "small",
    onClick: function onClick() {
      return setStates(function (states) {
        return (0, _extends8["default"])({}, states, (0, _defineProperty2["default"])({}, step, 'error'));
      });
    }
  }, "Trigger Error"), /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "primary",
    size: "small",
    onClick: function onClick() {
      return setStep(function (step) {
        return step + 1;
      });
    }
  }, "Next Step"))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ProgressStepper"
  })));
};

exports.RowDirection = RowDirection;

var ColumnDirection = function ColumnDirection() {
  var _React$useState5 = _react["default"].useState(0),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      step = _React$useState6[0],
      setStep = _React$useState6[1];

  var _React$useState7 = _react["default"].useState({}),
      _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
      states = _React$useState8[0],
      setStates = _React$useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.ProgressStepper, {
    nonLinear: (0, _addonKnobs["boolean"])('Non Linear', false),
    direction: "column",
    size: (0, _addonKnobs.select)('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: function onClick() {
        return setStep(0);
      }
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: function onClick() {
        return setStep(1);
      }
    }, {
      state: states[2],
      title: 'Third Step',
      caption: 'caption text for step three',
      onClick: function onClick() {
        return setStep(2);
      }
    }]
  }), _br9 || (_br9 = /*#__PURE__*/_react["default"].createElement("br", null)), _br10 || (_br10 = /*#__PURE__*/_react["default"].createElement("br", null)), _br11 || (_br11 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.ProgressStepper, {
    nonLinear: (0, _addonKnobs["boolean"])('Non Linear', false),
    direction: "column",
    size: (0, _addonKnobs.select)('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: function onClick() {
        return setStep(0);
      }
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: function onClick() {
        return setStep(1);
      }
    }, {
      state: states[2],
      disabled: true,
      icon: _CreditCard3 || (_CreditCard3 = /*#__PURE__*/_react["default"].createElement(_icons.CreditCard, null)),
      title: 'Third Step',
      caption: 'caption text for step three (disabled)',
      onClick: function onClick() {
        return setStep(2);
      }
    }, {
      state: states[3],
      icon: _HomeOutlined3 || (_HomeOutlined3 = /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)),
      title: 'Fourth Step',
      caption: 'caption text for step four',
      onClick: function onClick() {
        return setStep(3);
      }
    }]
  }), _br12 || (_br12 = /*#__PURE__*/_react["default"].createElement("br", null)), _br13 || (_br13 = /*#__PURE__*/_react["default"].createElement("br", null)), _br14 || (_br14 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.ProgressStepper, {
    nonLinear: (0, _addonKnobs["boolean"])('Non Linear', false),
    direction: "column",
    size: (0, _addonKnobs.select)('Sizes', sizes, 'small'),
    step: step
  }, /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[0],
    title: "First Step",
    caption: "caption Text for step one",
    onSelected: (0, _addonActions.action)('onSelected (step 1)'),
    onComplete: (0, _addonActions.action)('onComplete (step 1)'),
    onError: (0, _addonActions.action)('onError (step 1)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 1)'),
    onClick: function onClick() {
      return setStep(0);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[1],
    title: "Second Step",
    caption: "caption text for step two",
    onSelected: (0, _addonActions.action)('onSelected (step 2)'),
    onComplete: (0, _addonActions.action)('onComplete (step 2)'),
    onError: (0, _addonActions.action)('onError (step 2)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 2)'),
    onClick: function onClick() {
      return setStep(1);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[2],
    title: "Third Step",
    caption: "caption text for step three",
    onSelected: (0, _addonActions.action)('onSelected (step 3)'),
    onComplete: (0, _addonActions.action)('onComplete (step 3)'),
    onError: (0, _addonActions.action)('onError (step 3)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 3)'),
    onClick: function onClick() {
      return setStep(2);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[3],
    icon: _CreditCard4 || (_CreditCard4 = /*#__PURE__*/_react["default"].createElement(_icons.CreditCard, null)),
    title: "Fourth Step",
    caption: "caption text for step four",
    onSelected: (0, _addonActions.action)('onSelected (step 4)'),
    onComplete: (0, _addonActions.action)('onComplete (step 4)'),
    onError: (0, _addonActions.action)('onError (step 4)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 4)'),
    onClick: function onClick() {
      return setStep(3);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.ProgressStep, {
    state: states[4],
    icon: _HomeOutlined4 || (_HomeOutlined4 = /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)),
    title: "Fifth Step",
    caption: "caption text for step five",
    onSelected: (0, _addonActions.action)('onSelected (step 5)'),
    onComplete: (0, _addonActions.action)('onComplete (step 5)'),
    onError: (0, _addonActions.action)('onError (step 5)'),
    onSuccess: (0, _addonActions.action)('onSuccess (step 5)'),
    onClick: function onClick() {
      return setStep(4);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(StyledGroup, {
    style: {
      minHeight: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.FormGroup, {
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "secondary",
    color: "neutral",
    size: "small",
    onClick: function onClick() {
      return setStep(function (step) {
        return step - 1;
      });
    }
  }, "Previous Step"), /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    color: "interactive",
    size: "small",
    onClick: function onClick() {
      return setStates(function (states) {
        return (0, _extends8["default"])({}, states, (0, _defineProperty2["default"])({}, step, 'complete'));
      });
    }
  }, "Complete Step"), states[step] === 'error' ? /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    color: "green",
    size: "small",
    onClick: function onClick() {
      return setStates(function (states) {
        return (0, _extends8["default"])({}, states, (0, _defineProperty2["default"])({}, step, null));
      });
    }
  }, "Resolve Error") : /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    color: "red",
    size: "small",
    onClick: function onClick() {
      return setStates(function (states) {
        return (0, _extends8["default"])({}, states, (0, _defineProperty2["default"])({}, step, 'error'));
      });
    }
  }, "Trigger Error"), /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "primary",
    size: "small",
    onClick: function onClick() {
      return setStep(function (step) {
        return step + 1;
      });
    }
  }, "Next Step"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ProgressStepper"
  }))));
};

exports.ColumnDirection = ColumnDirection;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.ProgressStepperSkeleton, {
    direction: (0, _addonKnobs.select)('Direction', directions, 'row'),
    size: (0, _addonKnobs.select)('Size', sizes, 'small'),
    withCaption: (0, _addonKnobs["boolean"])('Caption', false),
    steps: (0, _addonKnobs.number)('Steps', 4),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  });
};

exports.Skeleton = Skeleton;