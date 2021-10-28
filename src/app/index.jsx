import "./styles/index.scss";
import React from "react";
import {useState, useEffect} from "react";
import {MessageList, MessageInput} from "../components";
import {ThemeProvider} from "@mui/material";
import {createMuiTheme} from "@mui/material";
import {deepPurple, purple} from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {createId} from "../lib";

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
    }
  }
});

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chat, setChat] = useState([]);

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
        <div className="Header">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quia
          error hic iusto nihil iste, praesentium cumque similique! Eligendi
          optio beatae asperiores corrupti velit veniam voluptate consectetur
          culpa porro ratione!
        </div>
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
          <MessageInput className="input-wrapp" postMessage={setMessageList} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
