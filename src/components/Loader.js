import React from 'react';
import './Loader.css';

const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-spinner"></div>
        <div className="loader-spinner-2"></div>
        <div className="loader-spinner-3"></div>
      </div>
      <p className="loader-message">{message}</p>
    </div>
  );
};

export default Loader;
