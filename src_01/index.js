import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './components/app';
import reducer from './reducer';
const rootElement = document.querySelector('#root');
const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(logger));

const render1 = () => {
    render(
        <App
            value={store.getState()}
            addFun={() => { store.dispatch({ type: 'ADD' }) }}
            minusFun={() => { store.dispatch({ type: 'MINUS' }) }}
            addAsNumFun={(num) => { store.dispatch({ type: 'ADDASNUM', num }) }}
        />, rootElement
    )
}
render1();
store.subscribe(render1);