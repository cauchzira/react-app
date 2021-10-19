import React from "react";
import "../message/message.scss";

function Message({message}) {
  return (
    <div className="message__wrapp">
      <p className="message__wrapp__text_message">{message}</p>
    </div>
  );
}

export default Message;
