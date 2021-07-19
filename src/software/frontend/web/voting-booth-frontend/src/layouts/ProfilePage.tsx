import React from "react";
import {useDispatch} from "react-redux";
import {IMAGE} from "../helpers/constants";

const ProfilePage = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div className={"profile_page"}>
            <strong>Currently logged in.</strong>
            <div className={"profile_details"}>
                <div className={"profile_img"}>
                    <img src={IMAGE("account.png")} alt={"Profile"}/>
                </div>
                <div className={"other_details"}>
                    Name: {`${user?.name === "" ? "Not set" : user?.name}`} <br/>
                    Reg no: {user?.regno} <br/>
                    Email: {user?.email} <br/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;