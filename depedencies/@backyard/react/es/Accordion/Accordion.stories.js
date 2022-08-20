var _ApiLink, _Typography, _ApiLink2, _FormHeading, _br;

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Accordion, GridV3 as Grid, Typography, FormControl, FormHeading, AccordionSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Accordion',
  decorators: [withKnobs]
};
const sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'medium'];
const variants = ['Variant', {
  triangle: 'triangle',
  plus: 'plus'
}, 'triangle'];
const colors = ['Color', {
  transparent: 'transparent',
  interactive: 'interactive',
  neutral: 'neutral'
}, 'transparent'];
export const DefaultAccordion = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Accordion, {
  title: text('Title', 'Title'),
  subtitle: text('Subtitle', 'Subtitle'),
  open: boolean('Open', false),
  keepMounted: boolean('Keep Mounted', true),
  variant: select(...variants),
  size: select(...sizes),
  color: select(...colors)
}, /*#__PURE__*/React.createElement(Typography, {
  style: {
    margin: 0,
    padding: 0
  }
}, "Child text")), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Accordion"
})));
export const OpenedAccordion = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Accordion, {
  title: text('Title', 'Title'),
  open: boolean('Open', false),
  keepMounted: boolean('Keep Mounted', true),
  size: select(...sizes)
}, _Typography || (_Typography = /*#__PURE__*/React.createElement(Typography, null, "Child text"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Accordion"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Accordion Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(AccordionSkeleton, {
  size: select(...sizes),
  animate: boolean('Animate', false)
}))); // export default {
//     title: '@backyard/react/Accordion',
//     argTypes: {
//         size: {
//             options: ['small', 'medium', 'large'],
//             control: { type: 'select' }
//         },
//         variants: {
//             options: ['triangle', 'plus'],
//             control: { type: 'select' }
//         },
//         color: {
//             options: ['transparent', 'interactive', 'neutral'],
//             control: { type: 'select' }
//         },
//     }
// } as ComponentMeta<typeof Accordion>
// const Template: ComponentStory<typeof Accordion> = (props) => <Accordion {...props} />
// export const DefaultAccordion = Template.bind({})
// DefaultAccordion.args = {
//     size: 'medium',
//     variant: 'triangle',
//     color: 'transparent'
// }