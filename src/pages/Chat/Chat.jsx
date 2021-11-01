import React from "react";
import ChatWidget from "../../components/chatWidget/ChatWidget";
import Header from "../../components/Header/Header";
import "./styles.scss";

const Chat = () => {
  return (
    <div className="container">
      <Header />
      <ChatWidget />
    </div>
  );
};

export default Chat;
