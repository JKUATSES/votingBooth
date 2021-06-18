import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const PasswordInput = (props) => {
  const { label, onChange, initialValue = "", disabled, focus = false } = props;
  const [visibility, setVisibility] = useState(false);

  return (
    <div className={"password-field"}>
      <input
        className={"login-input password"}
        placeholder={label}
        type={visibility ? "text" : "password"}
        required={true}
        defaultValue={initialValue}
        onChange={onChange}
        disabled={disabled}
        autoFocus={focus}
      />

      {visibility ? (
        <VisibilityOff
          fontSize="small"
          color={"action"}
          onClick={(e) => setVisibility(!visibility)}
          className={"password-icon"}
        />
      ) : (
        <Visibility
          fontSize="small"
          color={"action"}
          onClick={(e) => setVisibility(!visibility)}
          className={"password-icon"}
        />
      )}
    </div>
  );
};

export default PasswordInput;
