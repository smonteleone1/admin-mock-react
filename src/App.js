import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import App from './common/app';
import routes from './common/routes';
import { store } from './common/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@backyard/react';

import 'animate.css';
import 'styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
            <BrowserRouter basename="/node-onboard">
                <ThemeProvider theme={'light'}>
                    <App routers={routes} />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>,
  </React.StrictMode>
);
reportWebVitals();


