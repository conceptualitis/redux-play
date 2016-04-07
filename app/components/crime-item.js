import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CrimeItem = ({ name, totalArrests }) => (
  <li>
    <Link to={`/crimes/${name}`}>
      {name} ({totalArrests})
    </Link>
  </li>
);

CrimeItem.propTypes = {
  name: PropTypes.string.isRequired,
  totalArrests: PropTypes.number.isRequired
};

export default CrimeItem;
