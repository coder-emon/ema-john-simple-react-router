import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <NavLink to="/">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
