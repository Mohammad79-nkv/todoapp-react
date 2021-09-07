import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

const Nav = (props) => {
  console.log(props);
  return (
    <div className="m-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="active"
            activeStyle={{ color: "aqua" }}
          >
            {" "}
            todo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
            activeStyle={{ color: "aqua" }}
          >
            {" "}
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Nav);
