import React from 'react';

const FingguAlertList = ({ alerts }) => {
  return (
    <ul className='finggu-alert-list'>
      {alerts.map((alert, index) => (
        <li key={index}>{alert}</li>
      ))}
    </ul>
  );
};

export default FingguAlertList;