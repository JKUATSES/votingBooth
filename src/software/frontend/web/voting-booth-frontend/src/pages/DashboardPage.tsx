import React from "react";
import {getLoggedUser} from "../helpers/CheckLogin";
import {useDispatch} from "react-redux";
import {logout} from "../redux/auth/auth.reducer";
import {Link} from "react-router-dom";

const DashboardPage = () => {

    let loggedUser = getLoggedUser();
    const dispatch = useDispatch();

    const handleLogout = function () {
        dispatch(logout);
    };

    return (
        <div>
            <strong>Currenty logged in as: </strong>
            <br/>
            Name: {loggedUser.name} <br/>
            Reg no: {loggedUser.regno} <br/>
            Email: {loggedUser.email} <br/>

            <br/>

            <Link
                className={""}
                onClick={handleLogout}
                to={"/login"}
            >
                Log me out
            </Link>
        </div>
    )
}


export default DashboardPage;