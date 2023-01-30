import React from "react";
import classes from "./Message.module.css";

export const Message = (props) => {
  return (
    <div>
      <div className={classes.dialog}>{props.message}</div>
    </div>
  );
};
