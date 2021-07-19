import axios from "axios";
import {errorToaster} from "./Toaster";
import authTypes from "../redux/auth/auth.types";

export function cheapCheckLogin() {
    return typeof localStorage.getItem("name") !== 'undefined' && typeof localStorage.getItem("email") !== 'undefined'
        && typeof localStorage.getItem("regno") !== 'undefined' && typeof localStorage.getItem("mobileno") !== 'undefined'
        && typeof localStorage.getItem("access_token") !== 'undefined' && typeof localStorage.getItem("refresh_token") !== 'undefined'
        &&
        localStorage.getItem("name") !== null && localStorage.getItem("email") !== null
        && localStorage.getItem("regno") !== null && localStorage.getItem("mobileno") !== null
        && localStorage.getItem("access_token") !== null && localStorage.getItem("refresh_token") !== null;
}

export async function isAuthenticated() {
    let loggedIn: boolean;

    const startTime = parseInt(localStorage.getItem("startTime"));
    const refresh_token = localStorage.getItem("refresh_token");

    if (typeof startTime === "undefined" || isNaN(startTime) || startTime === 0) { //not logged in at all
        localStorage.clear(); //just in case there was something in the localstorage
        return false;
    } else if (Date.now() >= (startTime + (23 * 60 * 60 * 1000))) { //23 hours - refresh_token has expired. user has to log in again
        localStorage.clear();
        return false;
    } else if (Date.now() >= (startTime + (4.5 * 60 * 1000))) { // the token has expired - 4.5 minutes
        const token = await refreshToken(refresh_token)
        localStorage.setItem("access_token", token);
    }

    const access_token = localStorage.getItem("access_token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const regno = localStorage.getItem("regno");
    const mobileno = localStorage.getItem("mobileno");

    const userdata = {name, email, regno, mobileno, access_token, refresh_token};

    loggedIn =
        typeof userdata.name !== 'undefined' && typeof userdata.email !== 'undefined'
        && typeof userdata.regno !== 'undefined' && typeof userdata.mobileno !== 'undefined'
        && typeof userdata.access_token !== 'undefined' && typeof userdata.refresh_token !== 'undefined'
    &&
        localStorage.getItem("name") !== null && localStorage.getItem("email") !== null
        && localStorage.getItem("regno") !== null && localStorage.getItem("mobileno") !== null
        && localStorage.getItem("access_token") !== null && localStorage.getItem("refresh_token") !== null;

    return loggedIn;
}

export async function refreshToken(refresh) {
    let token: any;
    await axios.post(
        "http://localhost:8000/api/v1/auth/refresh/",
        {
            refresh: refresh
        }
    ).then((response => {
        token = response.data.access;
        localStorage.setItem("startTime", Date.now().toString())
        // console.log("updated token: ", token);
    })).catch((error => {
        errorToaster(`Failed to refresh token. Try logging out and then logging in.`);
    }));

    return token;
}

export function storeUser(name, email, regno, mobileno, access_token, refresh_token) {
    return async function setUser(dispatch, getState) {
        dispatch({
            type: authTypes.AUTH_SUCCESS,
            name: name,
            email: email,
            regno: regno,
            mobileno: mobileno,
            access_token: access_token,
            refresh_token: refresh_token,
        });
    };
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
