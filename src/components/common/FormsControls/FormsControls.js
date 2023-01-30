import React from "react";

const FormControl = ({ element, ...props }) => {
  return (
    <div>
      <div>{props.children}</div>
      {props.meta.touched && props.meta.error && (
        <span>{props.meta.error}</span>
      )}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
