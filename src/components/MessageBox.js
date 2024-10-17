import React from 'react';

export default function MessageBox(PropTypes) {
  return (
    <div className={`alert alert-${PropTypes.variant || 'info'}`}>
      {PropTypes.children}
    </div>
  );
}