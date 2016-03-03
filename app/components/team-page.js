import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      years: []
    };
  },

  componentDidMount() {
    let { id } = this.props.params;

    fetch(`http://nflarrest.com/api/v1/team/timeline/${id}`)
      .then(response => response.json())
      .then(years => this.setState({ years }));
  },

  yearsList() {
    if (this.state.years.length <= 0) {
      return <strong>Loading years&hellip;</strong>;
    } else {
      return this.state.years.map(year => {
        return (
          <li key={`${year.Year}-${year.Month}`}>
            <strong>{year.Year}</strong>: {year.arrest_count}
          </li>
        );
      });
    }
  },

  render() {
    let { id } = this.props.params;

    return (
      <div>
        <h1>I am a team, {id}</h1>
        {this.yearsList()}
      </div>
    );
  }
});
