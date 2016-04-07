// tons of tools from redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// a reducer provided by react-router-redux to handle changes to the store involving navigation
import { routerReducer } from 'react-router-redux';
// allows us to return functions from actions that _eventually_ call dispatch
import thunkMiddleware from 'redux-thunk';
// pretty logging
import createLogger from 'redux-logger';
import * as reducers from './reducers';

export default createStore(
  // turn all of our reducers into a single function that produces a new store when given an action
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  // enhancements, being composed here into a single argument
  compose(
    applyMiddleware(thunkMiddleware, createLogger(), ({ getState }) => (next) => (action) => {
      console.log('for example, streaming this to a firehose endpoint or something', action, getState());
      return next(action);
    }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
