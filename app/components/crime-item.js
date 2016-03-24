import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    totalArrests: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <li>
        <Link to={`/crimes/${this.props.name}`}>
          {this.props.name} ({this.props.totalArrests})
        </Link>
      </li>
    );
  }
});
