// React will be needed after the JSX is compiled
import React from 'react';
// great rendering is its own lib now, yaaay
import { render } from 'react-dom';
// react router stuff
import { Router, Route, browserHistory } from 'react-router';
// gives `connect` calls later access to our store: https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
import { Provider } from 'react-redux';
// connects react router's history api to the redux store
import { syncHistoryWithStore } from 'react-router-redux';
import CrimeList from './components/crime-list-page';
import CrimePage from './components/crime-page';
import store from './store';
import foundation from './styles/vendors/foundation.css';

// wire them together
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
