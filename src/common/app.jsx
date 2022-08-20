import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeVariables } from '@backyard/design-tokens/v3/light/_scProperties';
import { createGlobalStyle } from 'styled-components';
import theme from '@backyard/design-tokens/v3/light/_theme';
import {
	ThemeProvider,
	Gridv3, Fonts,
	Roboto
} from '@backyard/react';

import AppHeader from './components/AppHeader';

const GlobalCSS = createGlobalStyle`
body {
    background-color: ${'#F2F4F8'};
  }
* {
    border: 0;
	box-sizing: border-box;
	margin: 0;
    padding: 0;
}
   ${ThemeVariables}
   ${Roboto}
   ${Gridv3}
   ${Fonts}
`;

const app = (routers) => (
	<ThemeProvider theme={ theme.name } font={ 'roboto' }>
		<GlobalCSS />
		<AppHeader />
		<Switch>
			{routers.routers.map((route) => <Route key={ route.path } { ...route } />)}
		</Switch>
	</ThemeProvider>
);

export default app;
