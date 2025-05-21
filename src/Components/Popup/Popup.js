import React from 'react';
import './Popup.css';
import popupImage from '../../Images/site_popup.jpeg';

const Popup = ({ onClose }) => {
  return (
    <div className="ad-popup-overlay">
      <div className="ad-popup-container">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={popupImage} alt="Popup" className="popup-image-only" />
      </div>
    </div>
  );
};

export default Popup;
