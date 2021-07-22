import React from "react";

const EmailInput = (props) => {
  const { label, onChange, initialValue = "", disabled, extras = null, placeholder="" } = props;

  return (
    <div className={"input-row"}>
      <label>{label}</label>
      <input
        type={"email"}
        required={true}
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
