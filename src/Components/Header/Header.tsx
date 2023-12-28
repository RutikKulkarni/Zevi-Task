import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
