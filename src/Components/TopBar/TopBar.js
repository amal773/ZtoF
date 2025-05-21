import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <a href="tel:+918690989822" className="top-bar-link">
            <i className="fa-solid fa-phone"></i> +91 8690989822
          </a>
          <a href="mailto:z2f@gmail.com" className="top-bar-link">
            <i className="fa-solid fa-envelope"></i> z2f@gmail.com
          </a>
          <a href="#enquiry" className="top-bar-link help-link">
            Need Help?
          </a>
        </div>

        <div className="top-bar-right">
          <a
            href="https://www.facebook.com/ztof_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/ztof_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.youtube.com/@ZtoFMedicalAndNursingAcademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <i className="fa-brands fa-pinterest-p"></i>
          </a>
          <a
            href="https://www.instagram.com/ztof_official/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
