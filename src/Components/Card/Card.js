import React from "react";
import "./Card.css";

export default function Card({ name, subject, experience }) {
  return (
    <div className="faculty-card">
      <h3 className="faculty-name">{name}</h3>
      <p className="faculty-subject">{subject}</p>
      <p className="faculty-experience">Experience: {experience}</p>
    </div>
  );
}
