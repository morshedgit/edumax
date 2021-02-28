import React, { useReducer } from "react";

import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";

import {
  reducer as userReducer,
  initialState as userInitialState,
} from "./store/useReducer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export const UserContext = React.createContext();

function App() {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  const loggedIn = userState.loggedIn;

  return (
    <MuiThemeProvider theme={theme}>
      <UserContext.Provider
        value={{ state: userState, dispatch: userDispatch }}
      >
        <Container maxWidth="lg">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/dashboard">
                {loggedIn ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Container>
      </UserContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
