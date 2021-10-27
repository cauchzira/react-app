import "./styles/index.scss";
import React from "react";
import {useState, useEffect} from "react";
import {MessageList, MessageInput} from "../components";
import {createId} from "../lib";

const date = new Date();
const getTime = `${date.getHours()}:${date.getMinutes()}`;

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      const id = createId();
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
            sent: getTime,
            photo: "../src/images/robot.png"
          }
        ]);
      }
    }, 3000);
  }, [messageList]);

  return (
    <div className="App">
      <div className="Header">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quia
        error hic iusto nihil iste, praesentium cumque similique! Eligendi optio
        beatae asperiores corrupti velit veniam voluptate consectetur culpa
        porro ratione!
      </div>
      <div className="Content">
        <div className="content_wrapp">
          <MessageList messageList={messageList} />
        </div>
      </div>
      <div className="Sidebar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit
        eum nulla sit eveniet at suscipit saepe molestiae commodi eligendi ipsam
        inventore culpa alias expedita voluptatem ad! Voluptatum, in commodi.
      </div>
      <div className="Input">
        <MessageInput className="input-wrapp" postMessage={setMessageList} />
      </div>
    </div>
  );
}

export default App;
