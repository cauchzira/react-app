import React from "react";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import {MessageList} from "../MessageList";
import ChatListContainer from "../ChatList/ChatListContainer";
import InputContainer from "../MessageInput/messageInputContainer";
import "./styles/styles.scss";

const ChatWidget = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const date = new Date();
    const getTime = `${date.getHours()}:${date.getMinutes()}`;
    setTimeout(function () {
      const id = uuidv4();
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author !== "AutoBot"
      ) {
        setMessageList(prev => [
          ...prev,
          {
            id,
            author: "AutoBot",
            message: "Это сообщение от робота!",
            sent: getTime
          }
        ]);
      }
    }, 1500);
  }, [messageList]);

  return (
    <div className="chat_widget">
      <div className="Content">
        <div className="content_wrapp">
          <MessageList messageList={messageList} />
        </div>
      </div>
      <div className="Sidebar">
        <ChatListContainer />
      </div>
      <div className="Input">
        <InputContainer className="input-wrapp" postMessage={setMessageList} />
      </div>
    </div>
  );
};

export default ChatWidget;
