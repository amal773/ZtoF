import React, { useState } from 'react';
import './CallInfo.css';

export default function CallInfo() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="inspirox-info-call">
      {showInfo && (
        <div className="inspirox-call-details">
          <small className="inspirox-text-muted">Call Or Whatsapp Now</small>
          <div>
            <a href="tel:+918690989822">
              <i className="fa fa-phone"></i> +918690989822
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=+918690989822&text=Hi, need more information about *ZtoF*. Please ping me."
              style={{ color: 'green' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp"></i> +918690989822
            </a>
          </div>
        </div>
      )}

      <div className="btn call-btn openCallInfo blink-me" onClick={() => setShowInfo(!showInfo)}>
        <span><i className="fa fa-phone"></i> +91 86909 89822</span>
      </div>
    </div>
  );
}
