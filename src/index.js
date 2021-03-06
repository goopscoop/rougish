import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './configureStore';

// DEV IMPORTS
import {addResource} from './user/userModule';
import {__devGetAllImporvements} from './UI/shopModule';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// DEV TOOLS

window.__addResource = function(type, amount){
  store.dispatch(addResource(type, amount));
}
window.__getAllImprvs = () => store.dispatch(__devGetAllImporvements())
