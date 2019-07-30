import React from "react";
import "../assets/user.css";
import store from "../store";
import { setActiveUserId } from "../actions/action-types";

const User = ({ user }) => {
  let keys = Object.keys(user);
  return (
    keys &&
    keys.map(d => (
      <div
        key={user[d].user_id}
        className="user"
        onClick={handleUserClick.bind(null, user[d].user_id)}
      >
        <img
          src={user[d].profile_pic}
          alt={user[d].name}
          className="user_pic"
        />
        <div className="user_detail">
          <p className="user_detail_name">{user[d].name}</p>
          <p className="user_detail_status">{user[d].status}</p>
        </div>
      </div>
    ))
  );
};

function handleUserClick(user_id) {
  store.dispatch(setActiveUserId(user_id));
}

export default User;
