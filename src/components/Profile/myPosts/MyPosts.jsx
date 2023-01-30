import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

export const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = (values) => {
    debugger;
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postBlock}>
      <h2>My Posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>New post</div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={TextArea}
          validate={[required, maxLength10]}
          placeholder="Post message"
        />
      </div>
      <div>
        <button>button</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
