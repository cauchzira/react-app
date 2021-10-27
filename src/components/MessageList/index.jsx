import React from "react";
import "./styles.scss";
import {MessageBox} from "../MessageBox";

export function MessageList({messageList}) {
  return (
    <div className="message-wrapp">
      <div className="message-list">
        {messageList.map(props => (
          <MessageBox key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}
