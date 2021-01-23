import React from "react";
import { TiMicrophone } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { MdAttachment } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./style.css";

function Chats(props) {
  return (
    <div className="sm-chats">
      <div className="sm-chats-meta">
        <div className="sm-chat-profile">
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
        <div className="sm-chat-subject"></div>
        <div className="sm-chat-secondary"></div>
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
