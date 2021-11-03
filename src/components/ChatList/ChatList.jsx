import React from "react";
import PhotoProfileContainer from "../PhotoProfile/photoProfileContainer";
import "./styles.scss";

const ChatList = ({props}) => {
  return (
    <div className="chats_wrapp">
      <ul className="chats">
        {props.map(item => {
          return (
            <li className="chats_chat-item" key={item.id}>
              <PhotoProfileContainer />
              <div className="item-wrapp">
                <h3 className="chats_chat-item-title">{item.title}</h3>
                <p className="chats_chat-item-subtitle">{item.lastMessage}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;
