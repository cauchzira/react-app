import React from 'react';
import "./styles.scss";

export function Message({author, message, sent}) {
  return (
    <div className="message-wrapp">
      <h2 className="message-wrapp__author">{author}</h2>
      <p className="message-wrapp__text">{message}</p>
      <p className="message-wrapp__date-sent">{sent}</p>
    </div>
  );
}

