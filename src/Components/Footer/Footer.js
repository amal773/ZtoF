import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        {/* Academy Name & Address */}
        <div className="footer-info">
          <h4>Z to F Medical & Nursing Academy</h4>
          <p>Near New Atish Market Metro Station, Pillar No-57</p>
          <p>New Sanganer Road, Jaipur – 302019</p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <p><strong>Helpline</strong> <br />8690989822, 8209993077<br />8690989821, 8690989823</p>
          <p><strong>Email</strong><br />
            <a href="mailto:Zerotofinalmedicalandnursingacademy@gmail.com">
              Zerotofinalmedicalandnursingacademy@gmail.com
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/ztof_official" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@ZtoFMedicalAndNursingAcademy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.whatsapp.com/channel/0029Vb5930y3wtazT0xWhs0z" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://t.me/Ramsirateacher" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} ZtoF Nursing Home. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
