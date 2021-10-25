import React from 'react';
import "./styles.scss";
import {useState} from "react";


let date = new Date();

export function MessageInput() {
  const [message, setMessage] = useState({id: 1, text:'', sent: `${date.getHours()}:${date.getMinutes()}`});

  const userMessage = React.createRef();

  function sendMessage() {
    let text = userMessage.current.value;
    let addTxt = [...message, text]; 
    setMessage(addTxt)
    userMessage.current.value = '';
  }

  return (
    <div className="user__message">
      <textarea placeholder="Write your message..." className="user__message-input" name="" id="" ref={userMessage}></textarea>
      <button onClick={sendMessage} className="user__message-send">Send</button>
    </div>
  );
}
