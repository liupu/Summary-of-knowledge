import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { createLogger } from 'redux-logger'; 
import App from './components/app';

const logger = createLogger(); 
const rootElement = document.querySelector('#root');
const store = createStore(reducer,applyMiddleware(logger));

render(<Provider store={store}>
    <App />
</Provider>, rootElement)