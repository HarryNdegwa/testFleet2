import React from "react";

import "./style.css";

function Chat(props) {
  const { sender } = props;
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
  return (
    <div className={`chat ${sender ? `my-chat` : `other-chat`}`}>
      <p className="w-75">{props.content}</p>
      <span>{props.time}</span>
      {sender ? <span>{getStatusIcon(props.status)}</span> : null}
    </div>
  );
}

export default Chat;
