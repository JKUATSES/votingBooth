import {storeUser} from "../redux/auth/auth.reducer";
import {log} from "util";

export function checkLogin(dispatch) {
    let loggedIn: boolean;

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const regno = localStorage.getItem("regno");
    const mobileno = localStorage.getItem("mobileno");
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    const userdata = {name, email, regno, mobileno, access_token, refresh_token};

    loggedIn =
        userdata.name !== null && userdata.email !== null
        && userdata.regno !== null && userdata.mobileno !== null
        && userdata.access_token !== null && userdata.refresh_token !== null;

    if (loggedIn) {
        dispatch(storeUser(
            userdata.name, userdata.email, userdata.regno,
            userdata.mobileno, userdata.access_token, userdata.refresh_token
        ));
    }

    return loggedIn;
}

export function getLoggedUser() {
    return {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        regno: localStorage.getItem("regno"),
        mobileno: localStorage.getItem("mobileno"),
        access_token: localStorage.getItem("access_token"),
        refresh_token: localStorage.getItem("refresh_token"),
    };
}

export function getLoggedField(field) {
    const user = {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        regno: localStorage.getItem("regno"),
        mobileno: localStorage.getItem("mobileno"),
        access_token: localStorage.getItem("access_token"),
        refresh_token: localStorage.getItem("refresh_token"),
    };

    return user[field];
}
