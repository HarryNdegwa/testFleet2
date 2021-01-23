import React from "react";

import "./style.css";

function Chat(props) {
  const { sender, content, status, time } = props.data;
  console.log(sender);
  const getStatusIcon = (status) => {
    switch (status) {
      case "read":
        return;
      case "received":
        return;
      case "sent":
        return;
      default:
        return;
    }
  };
  if (sender) {
    return (
      <div className="chat my-chat">
        <div style={{ flex: "1" }}></div>
        <div className="x">
          <p className="w-75">{content}</p>
          <span>{time}</span>
          <span>{getStatusIcon(status)}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="chat other-chat">
      <div>
        <p className="w-75">{content}</p>
        <span>{time}</span>
      </div>
      <div style={{ flex: "1" }}></div>
    </div>
  );
}

export default Chat;
