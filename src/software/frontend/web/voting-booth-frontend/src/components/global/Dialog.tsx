//@ts-nocheck
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import {LoginPhoneInputRow} from "../login/LoginTextInput";
import {validateEmail} from "../../layouts/LoginForm";
import {updateUser} from "../../redux/user/user.reducer";
import {errorToaster} from "../../helpers/Toaster";

const Dialog = ({onClose, actionText, title, reRender, type, initialUser, setLoading}) => {
    const [user, setUser] = useState(initialUser);
    const dispatch = useDispatch();
    // const { onClose, actionText, title, reRender, type, initialPartner } = props;

    const editUserField = (field) => {
        setUser({...user, ...field});
    };

    const blockEvent = (e) => {
        e.stopPropagation();
    };

    const updateX = () => {
        if (type === 'user') {
            // update user endpoint
            if (!validateEmail(user.email)) {
                errorToaster("Please enter a valid email.")
                return;
            }
            if (user.name?.length < 1){
                if (user.name?.length > 0 && user.name?.length < 2){
                    errorToaster("Your name must contain at least 2 letters.")
                }else errorToaster("Please enter a valid name.")
                return;
            }
            if (user.mobileno?.length < 13){
                console.log(user.mobileno);
                errorToaster("Please enter a valid mobile number. e.g. +254 711 222 333.")
                return;
            }
            dispatch(updateUser(user.name, user.email, user.mobileno, setLoading));
        }
    }

    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            updateX();
        }
    }

    return (
        <div className={"overlay"} onClick={onClose}>
            <div
                className={
                    //dialog-special class gives the dialog a bigger width.
                    // useful for entries that might look cluttered on narrow input fields
                    type === "wider"
                        ? "dialog diag-special"
                        : "dialog"
                }
                onClick={blockEvent}
            >
                <p>{title}</p>
                <div className={"dialog-body"}>
                    <UserEditor
                        editUserField={editUserField}
                        user={user}
                        onSubmit={onSubmit}
                    />
                </div>
                <div className={"button-bar"}>
                    <button onClick={onClose}>Cancel</button>
                    <button
                        onClick={() => {
                            updateX();
                        }}
                    >
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    );
};

const UserEditor = ({editUserField, user, onSubmit}) => {
    // let {editCouponField, arrays, setArrays, partners, initialPartner} = props;

    return (
        <div className={"editor"}
             onKeyUp={onSubmit}
        >
            <TextInput
                label={"Name"}
                initialValue={user.name ?? ""}
                placeholder={"New name"}
                onChange={(e) => editUserField({name: e.target.value})}
            />

            <EmailInput
                label={"Email"}
                initialValue={user.email ?? ""}
                placeholder={"New email"}
                onChange={(e) => editUserField({email: e.target.value})}
            />

            <LoginPhoneInputRow
                label={"Phone"}
                placeholder={"Phone number e.g +2547...."}
                initialValue={user.mobileno.substr(user.mobileno?.length - 9) ?? ""}
                onChange={(e) => editUserField({mobileno: "+254".concat(e.target.value)})}
            />

        </div>
    );
}

export default Dialog;
