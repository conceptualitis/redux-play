import React from 'react';
import TeamItem from './team-item';

export default React.createClass({
  getInitialState() {
    return {
      teams: []
    };
  },

  componentDidMount() {
    fetch('http://nflarrest.com/api/v1/team')
      .then(response => response.json())
      .then(teams => this.setState({ teams }));
  },

  teamList() {
    if (this.state.teams.length <= 0) {
      return <strong>Loading teams&hellip;</strong>;
    } else {
      return this.state.teams.map(team => {
        return <TeamItem key={team.Team} name={team.Team} totalArrests={parseInt(team.arrest_count, 10)} />;
      });
    }
  },

  render() {
    return (
      <div>
        <h1>Cool teams!</h1>
        {this.teamList()}
      </div>
    );
  }
});
