import "./styles/index.scss";
import React from 'react';
import { useState } from "react";
import {MessageList, MessageInput} from "../components";

let date = new Date();

function App() {

  const [messageList, setMessageList] = useState([
    // {id: 1, author: 'Daniil Fishchenko', message: 'Some text for test React.js App', sent: `${date.getHours()}:${date.getMinutes()}`},
    // {id: 2, author: 'Daniil Fishchenko', message: 'Задача организации, в особенности же новая модель организационной деятельности напрямую зависит от соответствующих условий активизации.', sent: `${date.getHours()}:${date.getMinutes()}`},
    // {id: 3, author: 'Daniil Fishchenko', message: 'Повседневная практика показывает, что дальнейшее развитие различных форм деятельности напрямую зависит от ключевых компонентов планируемого обновления. Значимость этих проблем настолько очевидна, что постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развитая системы массового участия.', sent: `${date.getHours()}:${date.getMinutes()}`},
])

  return (
    <div className="App">
      <MessageList messageList={messageList}/>
      <MessageInput postMessage={setMessageList}/>
    </div>
  );
}

export default App;
