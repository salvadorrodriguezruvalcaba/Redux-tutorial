import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// 1. Initial state
const initialState = {
  count: 0,
}

// 2.- Reducer
// 2.1 add a case for INCREMENT to the reducer
const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
      ...state,
      count: state.count + 1,
     }
    default:
      return state ;
  }
}

// 3. Make a store
const store = createStore(reducer, composeWithDevTools (applyMiddleware()) )

// 1 hook up the store with <provider>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'));
registerServiceWorker();
