import React from "react";
import { TiInfoLarge } from "react-icons/ti";
import "./style.css";

function LgChats(props) {
  return (
    <div className="large-screen-chats">
      <div className="chats-meta">
        <div className="h-100 chats-profile-info"></div>
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
        </div>
      </div>
    </div>
  );
}

export default LgChats;
