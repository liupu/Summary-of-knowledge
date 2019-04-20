import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './components/app';
import { Provider } from 'react-redux';
import reducer from './reducer';
const logger = createLogger();

const rootElement = document.querySelector('#root');
const store = createStore(
    reducer,
    applyMiddleware(logger));

console.log(store.getState());

render(<Provider store={store}>
    <App />
</Provider>, rootElement);