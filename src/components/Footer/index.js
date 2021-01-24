import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { AiFillTwitterSquare } from "react-icons/ai";
import { TiSocialYoutube } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";

import "./style.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h5>Useful Links</h5>
          <ul className="mt-2">
            <li>
              <p>About InstaDriver</p>
            </li>
            <li>
              <p>Verified Search (for Employers & Drivers)</p>
            </li>
            <li>
              <p>Top Ad Feature (For Drivers)</p>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Useful Links</h5>
          <ul className="mt-2">
            <li>
              <p>Driver Sign In</p>
            </li>
            <li>
              <p>Driver Sign Up</p>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Useful Links</h5>
          <ul className="mt-2">
            <li>
              <p>FAQs</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Social Media</h5>
          <ul className="mt-2 social-icons">
            <li>
              <span>
                <ImFacebook2 style={{ fontSize: "30px" }} />
              </span>
            </li>
            <li>
              <span>
                <AiFillTwitterSquare style={{ fontSize: "40px" }} />
              </span>
            </li>
            <li>
              <span>
                <TiSocialYoutube style={{ fontSize: "50px" }} />
              </span>
            </li>
            <li>
              <span>
                <GrInstagram style={{ fontSize: "30px" }} />
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Contact Info</h5>
          <ul>
            <li>
              <p>saysomething@instadriver.co</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
