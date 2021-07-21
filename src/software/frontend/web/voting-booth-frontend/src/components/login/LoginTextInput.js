import React from "react";

const LoginTextInput = (props) => {
    const {type = 'text', label, onChange, focus = false} = props;

    return (
        <input
            className={"login-input"}
            type={type}
            placeholder={label}
            onChange={onChange}
            required={true}
            autoComplete={"true"}
            autoFocus={focus}
        />
    );
};

export const LoginPhoneInput = (props) => {
    const {type = 'text', label, onChange, focus = false} = props;

    return (
        <div className={"phone-input password-field"}>
            <input
                className={"login-input"}
                type={type}
                maxLength={9}
                placeholder={label}
                onChange={onChange}
                required={true}
                autoComplete={"true"}
                autoFocus={focus}
            />
            <span>254</span>
        </div>
    );
};

export default LoginTextInput;
