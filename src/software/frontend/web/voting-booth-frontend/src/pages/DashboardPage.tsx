//@ts-nocheck
import React, {useEffect, useState} from "react";
import {getLoggedUser, isAuthenticated} from "../helpers/LoginUtilities";
import {logout} from "../redux/auth/auth.reducer";
import {useHistory} from "react-router-dom";
import Header from "../components/main/Header";
import ProfilePage from "../layouts/ProfilePage";

export const handleLogout = function (dispatch) {
    dispatch(logout);
};

function confirmAuth() {
    async function checkAuth() {
        await isAuthenticated();
    }

    checkAuth();
}

const DashboardPage = (props) => {
    let [user, setUser] = useState({});
    const history = useHistory();
    const {
        match: {params},
    } = props;
    const option = params.option ?? "/";

    useEffect(() => {
        confirmAuth();
        const loggedUser = getLoggedUser();
        if (loggedUser.access_token === null || loggedUser.access_token === "") {
            history.replace({from: {pathname: "/login"}});
        }
        setUser(loggedUser);
    }, [history]);


    return (
        <div>
            <Header currentPath={option}/>
            <div className={"dashboard"}>
                {
                    option === "/"
                        ?
                        <>
                            <p>This is the default homepage</p>
                        </>
                        : option === "profile" ?
                        <>
                            <ProfilePage user={user}/>
                        </>
                        : <>
                            <p>This is that other route that's neither home nor profile. :D</p>
                        </>
                }

            </div>

        </div>
    )
}


export default DashboardPage;