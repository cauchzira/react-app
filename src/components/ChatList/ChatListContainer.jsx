import React from "react";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import ChatList from "./ChatList";

const ChatListContainer = () => {
  const [chat, setChat] = useState([
    {id: "1", title: `Mother of Dragons`, lastMessage: "Сообщение: Hello!"},
    {id: "2", title: `Mother of Dragons`, lastMessage: "Сообщение: Hello!"},
    {id: "3", title: `Mother of Dragons`, lastMessage: "Сообщение: Hello!"}
  ]);
  return <ChatList props={chat} />;
};

export default ChatListContainer;
