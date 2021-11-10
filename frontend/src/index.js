import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { loadState,saveState } from './localStorage';
//const store = createStore(cartReducer);
const middleware = [thunk]
const persistedState = loadState();
const store = createStore(
    cartReducer,
  persistedState
, composeWithDevTools(applyMiddleware(...middleware)));

store.subscribe(() => {
  saveState(
     store.getState())});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
/*const store = createStore(cartReducer,  composeWithDevTools(applyMiddleware(...middleware)))
store.subscribe(() => {
    saveState(store.getState());
  });
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

*/