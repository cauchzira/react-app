import React from "react";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import InputContainer from "../components/MessageInput/messageInputContainer";
import {MessageList} from "../components";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import {deepPurple, purple} from "@mui/material/colors";
import ChatListContainer from "../components/ChatList/ChatListContainer";
import "./styles/index.scss";

const date = new Date();
const getTime = `${date.getHours()}:${date.getMinutes()}`;

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: deepPurple
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontsize: "14px",
          position: "absolute",
          top: "12px",
          right: "22px",
          padding: "10px 16px"
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          margin: "16px 0"
        }
      }
    }
  }
});

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
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
            sent: getTime,
            photo: "../src/images/robot.png"
          }
        ]);
      }
    }, 1500);
  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="Header"></div>
        <div className="Content">
          <div className="content_wrapp">
            <MessageList messageList={messageList} />
          </div>
        </div>
        <div className="Sidebar">
          <ChatListContainer />
        </div>
        <div className="Input">
          <InputContainer
            className="input-wrapp"
            postMessage={setMessageList}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
