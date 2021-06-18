import React from "react";

const TextInput = (props) => {
  const { label, onChange } = props;

  return (
    <input
      className={"login-input"}
      type={"text"}
      placeholder={label}
      onChange={onChange}
      required={true}
    />
  );
};

export default TextInput;
