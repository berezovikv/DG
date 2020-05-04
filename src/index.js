import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './Components/Reducers';


const Store = createStore (allReducers);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);





