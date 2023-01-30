import React from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

export const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((data) => (
    <DialogItem key={data.id} name={data.name} id={data.id} />
  ));

  const messagesElements = state.messages.map((data) => (
    <Message key={data.id} message={data.message} />
  ));

  if (!props.isAuth) {
    return <Navigate to={"/login"} />;
  }

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
