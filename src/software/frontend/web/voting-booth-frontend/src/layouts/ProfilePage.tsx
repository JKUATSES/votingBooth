import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {IMAGE} from "../helpers/constants";
import {LoginProgressLoader} from "../components/login/LoginProgressLaoder";
import {ToastContainer} from "react-toastify";
import {AppIcon} from "../helpers/AppIcon";
import Dialog from "../components/global/Dialog";

const ProfilePage = ({user}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [shouldShowDialog, setShouldShowDialog] = useState(false);

    const editUser = () => {
        setShouldShowDialog(true);
    }

    const onClose = () => setShouldShowDialog(false);

    return (
        <div className={"profile_page"}>
            {loading ? <LoginProgressLoader message={"Updating..."}/> : <></>}
            {shouldShowDialog ?
                <Dialog
                    type={"user"}
                    title={"Update your details"}
                    actionText={"Update"}
                    onClose={onClose}
                    reRender={() => {
                    }}
                    initialUser={user}
                    setLoading={setLoading}
                />
                : <></>}
            <ToastContainer/>

            <strong>Currently logged in.</strong>
            <div className={"profile_details"}>
                <div className={"profile_img"}>
                    <img src={IMAGE("account.png")} alt={"Profile"}/>
                </div>
                <div className={"other_details"}>
                    Name: {`${user?.name === "" ? "Not set" : user?.name}`} <br/>
                    Reg no: {user?.regno} <br/>
                    Phone number: {user?.mobileno?.replace(/^(.{4})(.*)$/, "$1 $2")} <br/>
                    Email: {user?.email} <br/>
                </div>
                <div className={"update"}>
                    <span className={"profile_edit_btn"} onClick={editUser}>
                        <AppIcon type={"edit"} size="small"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;