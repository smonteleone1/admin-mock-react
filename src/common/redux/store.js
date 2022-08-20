import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const loggerMiddleware = createLogger();

const getMiddleware = () => applyMiddleware(thunk, loggerMiddleware);

export const store = createStore(reducer, getMiddleware());
