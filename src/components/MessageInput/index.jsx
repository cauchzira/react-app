import React from 'react';
import "./styles.scss";
import {useEffect, useRef} from "react";

const date = new Date();

export function MessageInput({postMessage}) {
  const input = useRef(null);

  function onSubmit() {
    postMessage(prev => [...prev, {id: 4, author: 'Daniil Fishchenko', message: input.current.value, sent: `${date.getHours()}:${date.getMinutes()}`}])
  }

  useEffect(() => {
    console.log(input.current.value)
    
  }, [input.current])
  

  return (
    <div className="user__message">
      <input placeholder="Write your message..." className="user__message-input" ref={input}></input>
      <button onClick={onSubmit} className="user__message-send">Send</button>
    </div>
  );
}
