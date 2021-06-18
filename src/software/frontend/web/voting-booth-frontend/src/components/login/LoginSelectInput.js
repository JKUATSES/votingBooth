import React from "react";

export const LoginSelectInput = (props) => {
  const { label, onChange, options, initialValue = "Select" } = props;

  return (
    <select
      className={"login-select"}
      onChange={onChange}
      defaultValue={initialValue}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
