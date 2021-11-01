import React from "react";
import {Link, useParams} from "react-router-dom";
import PhotoProfileContainer from "../PhotoProfile/photoProfileContainer";
import "./styles.scss";

const ChatList = ({props}) => {
  const {chatId} = useParams();

  return (
    <div className="chats_wrapp">
      <ul className="chats">
        {props.map(({id, title, lastMessage}) => {
          return (
            <Link to={`/messanger/${id}`}>
              <li className="chats_chat-item" key={id}>
                <PhotoProfileContainer />
                <div className="item-wrapp">
                  <p className="chats_chat-item-title">{title}</p>
                  <p className="chats_chat-item-subtitle">{lastMessage}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;
