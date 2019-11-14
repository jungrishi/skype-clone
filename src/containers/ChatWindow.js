import React from "react";
import values from "lodash/object";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import "../assets/chatwindow.css";
import MessageInput from "./MessageInput";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const { typing } = state;
  return (
    <div className="chatWindow">
      <Header user={activeUser} />
      <Chats messages={values(activeMessages)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
