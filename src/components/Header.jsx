import React from "react";
import "../assets/header.css";

export default function Header({ user }) {
  const { name, status, id } = user;
  return [
    <header className="header" key={id}>
      <h1 className="header_name">{name}</h1>
      <p className="header_status"> {status}</p>
    </header>,
  ];
}
