import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <div></div>
      <form className="container">
        <input type="text" className="input" placeholder="Search" />
        <button className="icon">
          <RiSearch2Line size="24" />
        </button>
      </form>
      <img src={logo} alt="" />
    </div>
  );
};

export default Navbar;
