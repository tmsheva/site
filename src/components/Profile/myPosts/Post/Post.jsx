import React from "react";
import classes from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={classes.content}>
      <div>
        <img
          alt="profile"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"
        />
        {props.message}
        <div>{props.likesCount}</div>
      </div>
    </div>
  );
};
