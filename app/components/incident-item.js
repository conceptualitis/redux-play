import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const IncidentItem = ({ arrest, editing, startEdit, finishEdit, updateArrest }) => {
  if (editing) {
    return (
        <li>
          <input value={arrest.Description} onChange={ e => updateArrest(e) } type="text" />
          <button onClick={finishEdit}>Done</button>
        </li>
      );
  } else {
    return (
      <li onClick={startEdit}>
        <em>{arrest.Date}</em>: <strong>{arrest.Name}</strong>
        <p>{arrest.Description}</p>
      </li>
    );
  }
};

IncidentItem.propTypes = {
  arrest: PropTypes.object.isRequired,
};

export default IncidentItem;
