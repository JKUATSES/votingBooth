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
    const {type = 'text', label, onChange, focus = false, initialValue = ""} = props;

    return (
        <div className={"phone-input password-field"}>
            <input
                className={"login-input"}
                type={type}
                maxLength={9}
                placeholder={label}
                onChange={onChange}
                defaultValue={initialValue}
                required={true}
                autoComplete={"true"}
                autoFocus={focus}
            />
            <span>254</span>
        </div>
    );
};

export const LoginPhoneInputRow = (props) => {
    const {type = 'text', label, placeholder, onChange, focus = false, initialValue = ""} = props;

    return (
        <div className={"input-row no-padding-right"}>
            <label>{label}</label>
            <div className={"phone-input password-field"}>
                <input
                    className={"login-input"}
                    type={type}
                    maxLength={9}
                    placeholder={placeholder}
                    defaultValue={initialValue}
                    onChange={onChange}
                    required={true}
                    autoComplete={"true"}
                    autoFocus={focus}
                />
                <span>254</span>
            </div>
        </div>
    );
};

export default LoginTextInput;
