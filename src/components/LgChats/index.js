import React, { useState } from "react";
import { TiInfoLarge } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import "./style.css";
import { data } from "../../chats";
import Chat from "../Chat";
import { TiMicrophone } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { MdAttachment } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import Contact from "../Contact";

function LgChats(props) {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };
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
          <div className="contact-popup">
            <button className="btn contact-btn" onClick={handleContactClick}>
              <TiInfoLarge style={{ fontSize: "23px", color: "#ffbb00" }} />
              <small>Contact Info</small>
            </button>
            {showContact ? <Contact /> : null}
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
        {data.map((chat, idx) => (
          <Chat key={idx} data={chat} />
        ))}
      </div>
      <div className="chat-section">
        <div className="chat-input-wrapper">
          <input type="text" placeholder="Type your message" />
          <div className="chat-input-secondary">
            <div className="chat-input-secondary-icons">
              <span>
                <MdAttachment className="mx-2" style={{ fontSize: "40px" }} />
              </span>
              <span>
                <VscSmiley className="mx-2" style={{ fontSize: "30px" }} />
              </span>
              <span>
                <TiMicrophone className="mx-2" style={{ fontSize: "30px" }} />
              </span>
            </div>
            <div className="chat-send-btn-wrapper">
              <button className="btn send-btn">
                <span>
                  <RiSendPlane2Fill style={{ fontSize: "30px" }} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LgChats;
