import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import CrimeList from './components/crime-list';
import CrimePage from './components/crime-page';
import foundation from './styles/vendors/foundation.css';

render((
    <Router history={browserHistory}>
      <Route path="/" component={CrimeList} />
      <Route path="/crimes/:id" component={CrimePage} />
    </Router>
  ),
  document.getElementById('app')
);
