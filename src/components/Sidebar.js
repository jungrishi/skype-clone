import React from "react";
import "../assets/sidebar.css";
import User from "../containers/User";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="sidebar">
      {contacts.map((contact, i) => {
        {
          let keys = Object.keys(contact);
          return <User user={contact} key={keys[i]} />;
        }
      })}
    </aside>
  );
};

export default Sidebar;
