import React from 'react';

const FingguDashboard = ({ complianceStatus }) => {
  return (
    <div className='finggu-dashboard'>
      <h1>Compliance Status</h1>
      <p>{complianceStatus ? 'Compliant' : 'Non-Compliant'}</p>
    </div>
  );
};

export default FingguDashboard;