import React from "react";
import { setTypingValue, sendMessage } from "../actions";
import store from "../store";
import "../assets/messageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();
  const handleChange = e => {
    let value = e.target.value;
    store.dispatch(setTypingValue(value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="message" onSubmit={handleSubmit}>
      <input
        className="message_input"
        onChange={handleChange}
        value={value}
        placeholder="Write me.."
      />
    </form>
  );
};

export default MessageInput;
