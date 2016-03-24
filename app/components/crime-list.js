import React from 'react';
import CrimeItem from './crime-item';

export default React.createClass({
  getInitialState() {
    return {
      crimes: []
    };
  },

  componentDidMount() {
    fetch('http://nflarrest.com/api/v1/crime')
      .then(response => response.json())
      .then(crimes => this.setState({ crimes }));
  },

  teamList() {
    if (this.state.crimes.length <= 0) {
      return <strong>Loading crimes&hellip;</strong>;
    } else {
      return this.state.crimes.map(crime => {
        return <CrimeItem key={crime.Category} name={crime.Category} totalArrests={parseInt(crime.arrest_count, 10)} />;
      });
    }
  },

  render() {
    return (
      <div>
        <h1>Popular NFL crimes</h1>
        {this.teamList()}
      </div>
    );
  }
});
