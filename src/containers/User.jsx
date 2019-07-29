import React from "react";
import "../assets/user.css";

const User = ({ user }) => {
  console.log(user);
  let keys = Object.keys(user);
  return (
    keys &&
    keys.map(d => (
      <div className="user">
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

export default User;
