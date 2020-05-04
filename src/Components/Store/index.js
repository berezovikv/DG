import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from '../Reducers';
import Product from '../../Pages/Product/Product';


const Store = createStore (allReducers);


ReactDOM.render(
    <Provider store={Store}>
        <Product />
    </Provider>,
    document.getElementById('fieldToShow')
);