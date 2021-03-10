import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Homepage.css";
const Homepage = () => {
  return (
    <div className="container">
      <h2 className="header">Logistic Managment</h2>
      <NavLink to="/signup">
        <button className="btn">Sign in</button>
      </NavLink>
      <NavLink to="/login">
        <button className="btn">Log in</button>
      </NavLink>
    </div>
  );
};

export default Homepage;
