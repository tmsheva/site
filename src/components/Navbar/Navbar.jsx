import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classes.list}>
      <ul>
        <li className={classes.paragraph}>
          <NavLink to="/profile">Profile</NavLink>
        </li>

        <li className={classes.paragraph}>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>

        <li className={classes.paragraph}>
          <NavLink to="/users">Users</NavLink>
        </li>

        <li className={classes.paragraph}>
          <NavLink to="/news">News</NavLink>
        </li>

        <li className={classes.paragraph}>
          <NavLink to="/music">Music</NavLink>
        </li>

        <li className={classes.paragraph}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};
