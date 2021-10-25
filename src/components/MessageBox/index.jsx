import React from 'react';
import {Message} from "../Message"
import "./styles.scss";


export function MessageBox(props) {
  return (
    <div className="message__field">
      <Message {...props}/>
    </div>
  );
}
