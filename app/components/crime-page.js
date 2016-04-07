import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentItem from './incident-item';
import { fetchArrests } from '../actions';

const CrimePage = React.createClass({
  componentDidMount() {
    let { id } = this.props.params;

    this.props.fetchArrests(id);
  },

  arrestsList() {
    if (this.props.arrests.length <= 0) {
      return <strong>Loading arrests&hellip;</strong>;
    } else {
      return this.props.arrests.map(arrest => (
        <IncidentItem arrest={arrest}
                      key={arrest.arrest_stats_id} />
      ));
    }
  },

  render() {
    let { id } = this.props.params;

    return (
      <div>
        <h1>Who did {id} crimes?</h1>
        { this.arrestsList() }
      </div>
    );
  }
});

export default connect(
  state => ({ arrests: state.default.arrests }),
  dispatch => bindActionCreators({ fetchArrests }, dispatch)
)(CrimePage);
