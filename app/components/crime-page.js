import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      arrests: []
    };
  },

  componentDidMount() {
    let { id } = this.props.params;

    fetch(`http://nflarrest.com/api/v1/crime/arrests/${id}`)
      .then(response => response.json())
      .then(arrests => this.setState({ arrests }));
  },

  arrestsList() {
    if (this.state.arrests.length <= 0) {
      return <strong>Loading arrests&hellip;</strong>;
    } else {
      return this.state.arrests.map(arrest => {
        return (
          <li key={arrest.arrest_stats_id}>
            <em>{arrest.Date}</em>: <strong>{arrest.Name}</strong>
            <p>{arrest.Description}</p>
          </li>
        );
      });
    }
  },

  render() {
    let { id } = this.props.params;

    return (
      <div>
        <h1>Who did {id} crimes?</h1>
        {this.arrestsList()}
      </div>
    );
  }
});
