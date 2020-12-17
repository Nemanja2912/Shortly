import React, { Component } from "react";
import logo from "../image/logo.svg";

const Header = () => {
  return (
    <header class="container">
      <img src={logo} alt="" />
      <p>How it works?</p>
    </header>
  );
};

export default Header;
