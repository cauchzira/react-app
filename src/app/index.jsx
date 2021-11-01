import React from "react";
import {useState, useEffect} from "react";
import InputContainer from "../components/MessageInput/messageInputContainer";
import {MessageList} from "../components";
import {ThemeProvider} from "@mui/material";
import {createMuiTheme} from "@mui/material";
import {deepPurple, purple} from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {createId} from "../lib";
import "./styles/index.scss";

const date = new Date();
const getTime = `${date.getHours()}:${date.getMinutes()}`;

const theme = createMuiTheme({
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="Header"></div>
        <div className="Content">
          <div className="content_wrapp">
            <MessageList messageList={messageList} />
          </div>
        </div>
        <div className="Sidebar">
          <List
            dense
            sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
          >
            {[0, 1, 2, 3].map(value => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`Чат №${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
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
