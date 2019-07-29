import React from "react";
import "../assets/sidebar.css";
import User from "../containers/User";

export default function Sidebar({ contacts }) {
  console.log(contacts);
  return (
    <aside className="sidebar">
      {contacts.map(contact => {
        console.log(contact);
        return <User user={contact} key={contact.user_id} />;
      })}
    </aside>
  );
}
