import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { maxLengthCreator } from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder={"Enter your message"}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
