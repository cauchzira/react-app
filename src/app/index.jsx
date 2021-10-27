import "./styles/index.scss";
import React from 'react';
import { useState, useEffect } from "react";
import {MessageList, MessageInput} from "../components";

function App() {

  const [messageList, setMessageList] = useState([
    // {id: 1, author: 'Daniil Fishchenko', message: 'Some text for test React.js App', sent: `${date.getHours()}:${date.getMinutes()}`},
    // {id: 2, author: 'Daniil Fishchenko', message: 'Задача организации, в особенности же новая модель организационной деятельности напрямую зависит от соответствующих условий активизации.', sent: `${date.getHours()}:${date.getMinutes()}`},
    // {id: 3, author: 'Daniil Fishchenko', message: 'Повседневная практика показывает, что дальнейшее развитие различных форм деятельности напрямую зависит от ключевых компонентов планируемого обновления. Значимость этих проблем настолько очевидна, что постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развитая системы массового участия.', sent: `${date.getHours()}:${date.getMinutes()}`},
  ])

  useEffect(() => {
    console.log('Стейт был изменен!');
  }, [messageList])

  return (
    <div className="App"> 
      <div className="Header">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quia error hic iusto nihil iste, praesentium cumque similique! Eligendi optio beatae asperiores corrupti velit veniam voluptate consectetur culpa porro ratione!</div>
      <div className="Content">
        <div className="content_wrapp">
          <MessageList messageList={messageList}/>
        </div>
      </div>
      <div className="Sidebar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit eum nulla sit eveniet at suscipit saepe molestiae commodi eligendi ipsam inventore culpa alias expedita voluptatem ad! Voluptatum, in commodi.</div>
      <div className="Input">
      <MessageInput className="input-wrapp" postMessage={setMessageList}/>
      </div>
      {/* <MessageInput postMessage={setMessageList}/> */}
      {/* <MessageList messageList={messageList}/> */}
    </div>
  );
}

export default App;
