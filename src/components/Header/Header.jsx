import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        alt="logo"
        src="https://www.logodesignlove.com/wp-content/uploads/2022/01/logo-wave-symbol-01.jpg"
      />

      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} -
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
