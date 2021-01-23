import React from "react";

import "./style.css";

function LgChats(props) {
  return (
    <div className="large-screen-chats">
      <div className="chats-meta">
        <div className="h-100 chats-profile-info"></div>
        <div className="h-100 chats-subject"></div>
        <div className="h-100 chats-secondary"></div>
      </div>
    </div>
  );
}

export default LgChats;
