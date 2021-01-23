import React from "react";
import { TiInfoLarge } from "react-icons/ti";
import "./style.css";

function Contact(props) {
  return (
    <div className="contact">
      <div className="contact-header">
        <h5>
          <span>
            <TiInfoLarge style={{ fontSize: "25px", color: "#ffbb00" }} />
          </span>
          Contact
        </h5>
      </div>
      <div className="contact-body">
        <div className="contact-wrapper">
          <p>Mobile Number </p>
          <button className="btn">07970787504</button>
        </div>
        <div className="contact-wrapper">
          <p>Email Address </p>
          <button className="btn">johndoe@gmail.com</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
