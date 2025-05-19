import React from 'react';
import './Popup.css';
import nurseImage from '../../Images/nurse.png';

const Popup = ({ onClose }) => {
    return (
        <div className="ad-popup-overlay">
            <div className="ad-popup-container">
                <button className="close-button" onClick={onClose}>×</button>

                <div className="popup-background-text">NURSING OFFICER</div>

                <div className="popup-content">
                    <div className="popup-left">
                        <p className="batch-start">Regular Batch Starts</p>
                        <div className="registration-box">Registration Open</div>
                    </div>

                    <div className="popup-center">
                        <img src={nurseImage} alt="Nurse" className="popup-image" />
                        <div className="exam-box">NORCET, ESIC, DSSSB, RML, UPUMS</div>
                    </div>

                    <div className="popup-right">
                        <div className="class-type-heading">Class Modes</div>
                        <ul className="class-type-list">
                            <li>Offline Classes</li>
                            <li>Online Classes</li>
                        </ul>
                    </div>

                </div>

                <div className="popup-footer">
                    <p className="seats-info">More than 1000 seats available</p>
                    <div className="popup-contact">
                        <p className="contact-line">🌐 www.z2f.com</p>
                        <p className="contact-line">
                            <i className="fas fa-phone-alt contact-icon"></i> 8690989822, 8209993077
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Popup;
