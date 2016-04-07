import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import CrimeList from './components/crime-list-page';
import CrimePage from './components/crime-page';
import * as reducers from './reducers';

import foundation from './styles/vendors/foundation.css';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunkMiddleware, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={CrimeList} />
        <Route path='/crimes/:id' component={CrimePage} />
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);
