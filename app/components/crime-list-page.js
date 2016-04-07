import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CrimeItem from './crime-item';
import { fetchCrimes } from '../actions';

const CrimeListPage = React.createClass({
  componentDidMount() {
    this.props.fetchCrimes();
  },

  teamList() {
    if (this.props.crimes.length <= 0) {
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
  state => ({ crimes: state.default.crimes }),
  dispatch => bindActionCreators({ fetchCrimes }, dispatch)
)(CrimeListPage);
