import _extends from "@babel/runtime/helpers/esm/extends";

var _br, _br2, _br3, _CreditCard, _HomeOutlined, _br4, _br5, _br6, _CreditCard2, _HomeOutlined2, _br7, _br8, _ApiLink, _br9, _br10, _br11, _CreditCard3, _HomeOutlined3, _br12, _br13, _br14, _CreditCard4, _HomeOutlined4, _ApiLink2;

import React from 'react';
import styled from 'styled-components';
import { GridV3 as Grid, ProgressStepper, ProgressStep, FormGroup, Button, ProgressStepperSkeleton } from '../';
import { CreditCard, HomeOutlined } from '@backyard/icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/ProgressStepper',
  decorators: [withKnobs]
};
const StyledGroup = styled.div.withConfig({
  displayName: "ProgressStepperstories__StyledGroup",
  componentId: "sc-1827d4l-0"
})(["display:flex;justify-content:center;align-items:center;margin-top:", ";"], ({
  theme
}) => theme.sizes.size_32);
const sizes = {
  small: 'small',
  large: 'large'
};
const directions = {
  row: 'row',
  column: 'column'
};
export const RowDirection = () => {
  const [step, setStep] = React.useState(0);
  const [states, setStates] = React.useState({});
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(ProgressStepper, {
    nonLinear: boolean('Non Linear', false),
    direction: "row",
    size: select('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: () => setStep(0)
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: () => setStep(1)
    }, {
      state: states[2],
      title: 'Third Step',
      caption: 'caption text for step three',
      onClick: () => setStep(2)
    }]
  }), _br || (_br = /*#__PURE__*/React.createElement("br", null)), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ProgressStepper, {
    nonLinear: boolean('Non Linear', false),
    direction: "row",
    size: select('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: () => setStep(0)
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: () => setStep(1)
    }, {
      state: states[2],
      disabled: true,
      icon: _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(CreditCard, null)),
      title: 'Third Step',
      caption: 'caption text for step three (disabled)',
      onClick: () => setStep(2)
    }, {
      state: states[3],
      icon: _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(HomeOutlined, null)),
      title: 'Fourth Step',
      caption: 'caption text for step four',
      onClick: () => setStep(3)
    }]
  }), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), _br5 || (_br5 = /*#__PURE__*/React.createElement("br", null)), _br6 || (_br6 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ProgressStepper, {
    nonLinear: boolean('Non Linear', false),
    direction: "row",
    size: select('Sizes', sizes, 'small'),
    step: step
  }, /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[0],
    title: "First Step",
    caption: "caption Text for step one",
    onSelected: action('onSelected (step 1)'),
    onComplete: action('onComplete (step 1)'),
    onError: action('onError (step 1)'),
    onSuccess: action('onSuccess (step 1)'),
    onClick: () => setStep(0)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[1],
    title: "Second Step",
    caption: "caption text for step two",
    onSelected: action('onSelected (step 2)'),
    onComplete: action('onComplete (step 2)'),
    onError: action('onError (step 2)'),
    onSuccess: action('onSuccess (step 2)'),
    onClick: () => setStep(1)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[2],
    title: "Third Step",
    caption: "caption text for step three",
    onSelected: action('onSelected (step 3)'),
    onComplete: action('onComplete (step 3)'),
    onError: action('onError (step 3)'),
    onSuccess: action('onSuccess (step 3)'),
    onClick: () => setStep(2)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[3],
    icon: _CreditCard2 || (_CreditCard2 = /*#__PURE__*/React.createElement(CreditCard, null)),
    title: "Fourth Step",
    caption: "caption text for step four",
    onSelected: action('onSelected (step 4)'),
    onComplete: action('onComplete (step 4)'),
    onError: action('onError (step 4)'),
    onSuccess: action('onSuccess (step 4)'),
    onClick: () => setStep(3)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[4],
    icon: _HomeOutlined2 || (_HomeOutlined2 = /*#__PURE__*/React.createElement(HomeOutlined, null)),
    title: "Fifth Step",
    caption: "caption text for step five",
    onSelected: action('onSelected (step 5)'),
    onComplete: action('onComplete (step 5)'),
    onError: action('onError (step 5)'),
    onSuccess: action('onSuccess (step 5)'),
    onClick: () => setStep(4)
  })), _br7 || (_br7 = /*#__PURE__*/React.createElement("br", null)), _br8 || (_br8 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(StyledGroup, null, /*#__PURE__*/React.createElement(FormGroup, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    color: "neutral",
    size: "small",
    onClick: () => setStep(step => step - 1)
  }, "Previous Step"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    color: "interactive",
    size: "small",
    onClick: () => setStates(states => _extends({}, states, {
      [step]: 'complete'
    }))
  }, "Complete Step"), states[step] === 'error' ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    color: "green",
    size: "small",
    onClick: () => setStates(states => _extends({}, states, {
      [step]: null
    }))
  }, "Resolve Error") : /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    color: "red",
    size: "small",
    onClick: () => setStates(states => _extends({}, states, {
      [step]: 'error'
    }))
  }, "Trigger Error"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    onClick: () => setStep(step => step + 1)
  }, "Next Step"))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ProgressStepper"
  })));
};
export const ColumnDirection = () => {
  const [step, setStep] = React.useState(0);
  const [states, setStates] = React.useState({});
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(ProgressStepper, {
    nonLinear: boolean('Non Linear', false),
    direction: "column",
    size: select('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: () => setStep(0)
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: () => setStep(1)
    }, {
      state: states[2],
      title: 'Third Step',
      caption: 'caption text for step three',
      onClick: () => setStep(2)
    }]
  }), _br9 || (_br9 = /*#__PURE__*/React.createElement("br", null)), _br10 || (_br10 = /*#__PURE__*/React.createElement("br", null)), _br11 || (_br11 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ProgressStepper, {
    nonLinear: boolean('Non Linear', false),
    direction: "column",
    size: select('Sizes', sizes, 'small'),
    step: step,
    steps: [{
      state: states[0],
      title: 'First Step',
      caption: 'caption Text for step one',
      onClick: () => setStep(0)
    }, {
      state: states[1],
      title: 'Second Step',
      caption: 'caption text for step two',
      onClick: () => setStep(1)
    }, {
      state: states[2],
      disabled: true,
      icon: _CreditCard3 || (_CreditCard3 = /*#__PURE__*/React.createElement(CreditCard, null)),
      title: 'Third Step',
      caption: 'caption text for step three (disabled)',
      onClick: () => setStep(2)
    }, {
      state: states[3],
      icon: _HomeOutlined3 || (_HomeOutlined3 = /*#__PURE__*/React.createElement(HomeOutlined, null)),
      title: 'Fourth Step',
      caption: 'caption text for step four',
      onClick: () => setStep(3)
    }]
  }), _br12 || (_br12 = /*#__PURE__*/React.createElement("br", null)), _br13 || (_br13 = /*#__PURE__*/React.createElement("br", null)), _br14 || (_br14 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ProgressStepper, {
    nonLinear: boolean('Non Linear', false),
    direction: "column",
    size: select('Sizes', sizes, 'small'),
    step: step
  }, /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[0],
    title: "First Step",
    caption: "caption Text for step one",
    onSelected: action('onSelected (step 1)'),
    onComplete: action('onComplete (step 1)'),
    onError: action('onError (step 1)'),
    onSuccess: action('onSuccess (step 1)'),
    onClick: () => setStep(0)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[1],
    title: "Second Step",
    caption: "caption text for step two",
    onSelected: action('onSelected (step 2)'),
    onComplete: action('onComplete (step 2)'),
    onError: action('onError (step 2)'),
    onSuccess: action('onSuccess (step 2)'),
    onClick: () => setStep(1)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[2],
    title: "Third Step",
    caption: "caption text for step three",
    onSelected: action('onSelected (step 3)'),
    onComplete: action('onComplete (step 3)'),
    onError: action('onError (step 3)'),
    onSuccess: action('onSuccess (step 3)'),
    onClick: () => setStep(2)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[3],
    icon: _CreditCard4 || (_CreditCard4 = /*#__PURE__*/React.createElement(CreditCard, null)),
    title: "Fourth Step",
    caption: "caption text for step four",
    onSelected: action('onSelected (step 4)'),
    onComplete: action('onComplete (step 4)'),
    onError: action('onError (step 4)'),
    onSuccess: action('onSuccess (step 4)'),
    onClick: () => setStep(3)
  }), /*#__PURE__*/React.createElement(ProgressStep, {
    state: states[4],
    icon: _HomeOutlined4 || (_HomeOutlined4 = /*#__PURE__*/React.createElement(HomeOutlined, null)),
    title: "Fifth Step",
    caption: "caption text for step five",
    onSelected: action('onSelected (step 5)'),
    onComplete: action('onComplete (step 5)'),
    onError: action('onError (step 5)'),
    onSuccess: action('onSuccess (step 5)'),
    onClick: () => setStep(4)
  }))), /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(StyledGroup, {
    style: {
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(FormGroup, {
    direction: "column"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    color: "neutral",
    size: "small",
    onClick: () => setStep(step => step - 1)
  }, "Previous Step"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    color: "interactive",
    size: "small",
    onClick: () => setStates(states => _extends({}, states, {
      [step]: 'complete'
    }))
  }, "Complete Step"), states[step] === 'error' ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    color: "green",
    size: "small",
    onClick: () => setStates(states => _extends({}, states, {
      [step]: null
    }))
  }, "Resolve Error") : /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    color: "red",
    size: "small",
    onClick: () => setStates(states => _extends({}, states, {
      [step]: 'error'
    }))
  }, "Trigger Error"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    onClick: () => setStep(step => step + 1)
  }, "Next Step"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ProgressStepper"
  }))));
};
export const Skeleton = () => /*#__PURE__*/React.createElement(ProgressStepperSkeleton, {
  direction: select('Direction', directions, 'row'),
  size: select('Size', sizes, 'small'),
  withCaption: boolean('Caption', false),
  steps: number('Steps', 4),
  animate: boolean('Animate', false)
});