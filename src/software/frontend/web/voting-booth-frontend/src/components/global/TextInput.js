import React from "react";

const TextInput = (props) => {
  const {
    label,
    placeholder = "",
    onChange,
    onKeyPress = null,
    type,
    initialValue = "",
    disabled,
    extras = null,
  } = props;

  return (
    <div className={"input-row"}>
      <label>
        {label}
        {extras ? (
          <>
            <br />
            <br />
            <span>{extras}</span>
          </>
        ) : (
          ""
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={onChange}
        disabled={disabled}
        onKeyPress={onKeyPress ? onKeyPress : () =>{}}
      />
    </div>
  );
};

export default TextInput;
