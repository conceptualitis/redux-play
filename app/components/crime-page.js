import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentItem from './incident-item';
import { fetchArrests, editArrest, updateArrest } from '../actions';

const CrimePage = React.createClass({
  componentDidMount() {
    let { id } = this.props.params;

    this.props.fetchArrests(id);
  },

  edit(id) {
    this.props.editArrest(id);
  },

  updateArrest(e, id) {
    this.props.updateArrest(id, e.target.value);
  },

  finishEdit() {
    this.props.editArrest(null);
  },

  arrestsList() {
    if (this.props.arrests.length <= 0) {
      return <strong>Loading arrests&hellip;</strong>;
    } else {
      return this.props.arrests.map(arrest => (
        <IncidentItem arrest={arrest}
                      key={arrest.arrest_stats_id}
                      editing={arrest.arrest_stats_id === this.props.editingArrest}
                      updateArrest={ e => this.updateArrest(e, arrest.arrest_stats_id) }
                      startEdit={ () => this.edit(arrest.arrest_stats_id) }
                      finishEdit={ () => this.finishEdit() } />
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
  state => ({
    editingArrest: state.default.editingArrest,
    arrests: state.default.arrests
  }),
  dispatch => bindActionCreators({ fetchArrests, editArrest, updateArrest }, dispatch)
)(CrimePage);
