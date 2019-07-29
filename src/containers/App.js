import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";
import "./App.css";
import _ from "lodash";

function App() {
  const { contacts, user, activeUserId } = store.getState();
  console.log(store.getState().contacts);
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
