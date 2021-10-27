import React from "react";
import {Message} from "../Message";
import "./styles.scss";

export function MessageBox(props) {
  return (
    <div
      className={
        props.author !== "AutoBot" ? "message__field" : "message__field left"
      }
    >
      <Message {...props} />
    </div>
  );
}
