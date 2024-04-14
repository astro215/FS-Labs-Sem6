import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__right">
        <Link to="/app/login">Login</Link>
        <Link to="/app/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default navbar;
