import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const IncidentItem = ({ arrest }) => (
  <li>
    <em>{arrest.Date}</em>: <strong>{arrest.Name}</strong>
    <p>{arrest.Description}</p>
  </li>
);

IncidentItem.propTypes = {
  arrest: PropTypes.object.isRequired,
};

export default IncidentItem;
