import React from "react";
import "./App.css";
import Chats from "./Chats";
import Header from "./Header";
import ChatScreen from "./ChatScreen";
import SwipeButtons from "./SwipeButtons";
import TinderCard from "./TinderCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCard />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
