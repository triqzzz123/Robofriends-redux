import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import 'tachyons';
import App from './Container/App';
import { searchRobots,requestRobots } from './reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducers=combineReducers({searchRobots,requestRobots})

const logger=createLogger()
const store=createStore(rootReducers,applyMiddleware(thunkMiddleware,logger));


ReactDOM.render(
  <Provider store={store}>
   <App />
   </Provider>,
     document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
