import React from "react";
import { TiInfoLarge } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import "./style.css";

function LgChats(props) {
  return (
    <div className="large-screen-chats">
      <div className="chats-meta">
        <div className="h-100 chats-profile-info">
          <img src="./snow.jpg" width="55px" className="rounded-circle" />
          <div className="titles">
            <small>
              <b style={{ fontSize: "11px" }}>Shirly Cook</b>
            </small>
            <small style={{ fontSize: "11px" }}>@JohntheD</small>
          </div>
        </div>
        <div className="h-100 chats-subject">
          <h6>Inquiry about relocation from Nairobi</h6>
        </div>
        <div className="h-100 chats-secondary">
          <div>
            <button className="btn contact-btn">
              <TiInfoLarge style={{ fontSize: "23px", color: "#e5af1f" }} />
              <small>Contact Info</small>
            </button>
          </div>
          <span>
            <FiMoreVertical style={{ fontSize: "25px" }} />
          </span>
        </div>
      </div>
      <div className="chats">
        <div className="chats-id">
          <small>
            Chat ID:
            <span className="ml-1" style={{ fontWeight: "600" }}>
              3362Gd2
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default LgChats;
