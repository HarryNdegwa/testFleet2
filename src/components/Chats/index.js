import React from "react";

import "./style.css";

function Chats(props) {
  return (
    <div className="sm-chats">
      <div className="sm-chats-meta"></div>
      <div className="sm-chats-wrapper">
        <div style={{ height: "2000px" }}></div>
      </div>
      <div className="sm-chat-input-wrapper"></div>
    </div>
  );
}

export default Chats;
