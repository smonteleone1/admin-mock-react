/* eslint-disable no-underscore-dangle */
/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@backyard/react';
import App from '../common/app';
import routes from '../common/routes';
import { store } from '../common/redux/store';

const rootEle = document.getElementById('app');

loadableReady(() => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter basename="/node-onboard">
                <ThemeProvider theme={'light'}>
                    <App routers={routes} />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>,
        rootEle
    );
});

