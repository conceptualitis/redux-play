import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CrimeItem from './crime-item';
import { fetchCrimes } from '../actions';

const CrimeListPage = React.createClass({
  componentDidMount() {
    if (!this.props.crimes.length) {
      this.props.fetchCrimes();
    }
  },

  teamList() {
    if (!this.props.crimes.length) {
      return <strong>Loading crimes&hellip;</strong>;
    } else {
      return this.props.crimes.map(crime => {
        return <CrimeItem key={crime.Category}
                          name={crime.Category}
                          totalArrests={parseInt(crime.arrest_count, 10)} />;
      });
    }
  },

  render() {
    return (
      <div>
        <h1>Popular NFL crimes</h1>
        { this.teamList() }
      </div>
    );
  }
});

export default connect(
  state => ({ crimes: state.crimes.data }),
  dispatch => bindActionCreators({ fetchCrimes }, dispatch)
)(CrimeListPage);
