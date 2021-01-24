import React, { useState } from "react";
import { TiMicrophone } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { MdAttachment } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./style.css";
import { history } from "../../index";
import { TiInfoLarge } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import Contact from "../Contact";
import More from "../More";

function Chats(props) {
  const [showContact, setShowContact] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="sm-chats">
      <div className="sm-chats-meta">
        <div
          className="sm-chat-profile"
          onClick={() => {
            history.goBack();
          }}
        >
          <span>
            <BiLeftArrowAlt style={{ fontSize: "20px" }} />
          </span>
          <img
            src="./snow.jpg"
            width="50px"
            alt=""
            className="rounded-circle"
          />
        </div>
        <div className="sm-chat-subject">
          <div>
            <p>
              Shirly Cook <small>@JointheD</small>
            </p>
            <h5>Inquiry about relocation from Nairobi</h5>
          </div>
        </div>
        <div className="sm-chat-secondary">
          <span className="contact-popup">
            <TiInfoLarge
              style={{ fontSize: "30px", color: "#ffbb00" }}
              onClick={handleContactClick}
            />
            {showContact ? <Contact /> : null}
          </span>
          <span className="more-popup">
            <FiMoreVertical
              style={{ fontSize: "25px" }}
              onClick={handleMoreClick}
            />
            {showMore ? <More /> : null}
          </span>
        </div>
      </div>
      <div className="sm-chats-wrapper">
        <div style={{ height: "2000px" }}></div>
      </div>
      <div className="sm-chat-input-wrapper">
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
  );
}

export default Chats;
