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
        <div className="row no-gutters contact-wrapper">
          <div className="col-md-6">
            <p>Mobile Number </p>
          </div>
          <div className="col-md-6">
            <button className="btn">0733221133</button>
          </div>
        </div>
        <div className="row no-gutters contact-wrapper">
          <div className="col-md-6">
            <p>Email Address </p>
          </div>
          <div className="col-md-6 p-0">
            <button className="btn">johndoe@gmail.com</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
