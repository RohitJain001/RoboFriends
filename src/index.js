import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './Container/App';
import 'tachyons';
import {searchRobots, requestRobots} from './reducers.js';

const rootReducer = combineReducers({searchRobots, requestRobots});

const logger = createLogger();                  //it is middleware for checking history what was entered etc.
                                     //read it its IMPORTANT           //Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.              
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware , logger));          //thunkmiddleware waits if any action returns a function and not object and will act on it.       //we have now just one store 
                                                                                
// here requestRobots returns a function so thunk gets triggered and says here is dispatch and you can call some actions
ReactDOM.render(
<Provider store={store}>               {/*provider wraps up App with state as a prop and provide it to all the elments of the App*/}
  <App /> 
</Provider>,
  document.getElementById('root')
);
//registerServiceWorker();