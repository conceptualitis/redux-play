import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import TeamList from './components/team-list';

render((
    // <TeamList/>
    <Router history={browserHistory}>
      <Route path="/" component={TeamList} />
    </Router>
  ),
  document.getElementById('app')
);
