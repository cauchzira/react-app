import React from "react";
import Message from "../message/Message";
import "../messageField/messageField.scss";

const message =
  "Первое переданное сообщение с помощью Props! Теперь я лучше знаю React.js!";

function MessageField() {
  return (
    <div className="message__field">
      <Message message={message} />
      <div className="message__field__comma"></div>
    </div>
  );
}

export default MessageField;
