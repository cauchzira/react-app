import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import {deepPurple, purple} from "@mui/material/colors";
import Chat from "../pages/Chat/Chat";
import Header from "../components/Header/Header";
import "./styles/index.scss";

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/main">
            <Header />
          </Route>
          <Route exact path="/messanger/:chatId?">
            <Chat />
          </Route>
          <Redirect to="/main">
            <Header />
          </Redirect>
          <Route path="*">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
