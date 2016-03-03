import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import TeamList from './components/team-list';
import TeamPage from './components/team-page';

render((
    <Router history={browserHistory}>
      <Route path="/" component={TeamList} />
      <Route path="/teams/:id" component={TeamPage} />
    </Router>
  ),
  document.getElementById('app')
);
