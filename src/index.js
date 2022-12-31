import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteSwitch from './RouteSwitch';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import "bootstrap/dist/css/bootstrap.min.css"
// import  cartSlice  from './Components/usingRedux/cartSlice';
// import {cartReducer} from './Components/usingRedux/incrementReducer';
import  { cartReducer } from './Components/usingRedux/cartSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = configureStore({reducer:cartReducer})
const store = configureStore({reducer:cartReducer})
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

