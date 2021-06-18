import authTypes from "../auth/auth.types";
import axios from "axios"
import {errorToaster} from "../../helpers/Toaster";

const initialState = {
    loggedIn: false,
    loading: true,
    name: "",
    email: "",
    regno: "",
    mobileno: "",
    access_token: "",
    refresh_token: "",
};

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

function checkErrors(response) {
    console.log("response", response)
    if (response.regno !== undefined) {
        return "Reg number: " + response.regno[0]
    } else if (response.email !== undefined) {
        return "Email: " + response.email[0]
    } else if (response.mobileno !== undefined) {
        return "Mobile number: " + response.mobileno[0]
    } else if (response.name !== undefined) {
        return "Name: " + response.name[0]
    } else if (response.password1 !== undefined) {
        return "Password: " + response.password1[0]
    } else if (response.password2 !== undefined) {
        return "Password: " + response.password2[0]
    } else if (response.non_field_errors !== undefined) {
        return "Password: " + response.non_field_errors[0]
    } else {
        return null
    }
}

export function signUp(regNo, email, name, mobileNo, password1, password2, history, from, setLoading) {
    return async function loginUser(dispatch, getState) {
        let error = null;
        try {
            setLoading(true);
            await axios.post(
                // Change link to reflect the Django signup endpoint
                "http://localhost:8000/api/v1/auth/signup/",
                {
                    regno: regNo,
                    email: email,
                    mobileno: mobileNo,
                    name: name,
                    password1: password1,
                    password2: password2,
                }
            ).then((response) => {
                if (error === null) {
                    localStorage.setItem("name", response.data.user.name);
                    localStorage.setItem("email", response.data.user.email);
                    localStorage.setItem("regno", response.data.user.regno);
                    localStorage.setItem("mobileno", response.data.user.mobileno);
                    localStorage.setItem("access_token", response.data.access_token);
                    localStorage.setItem("refresh_token", response.data.refresh_token);

                    history.replace(from);
                }
                setLoading(false)
            }).catch((err) => {
                setLoading(false);
                error = checkErrors(err.response.data)
                errorToaster(`${error}`);
            });
        } catch (err) {
            setLoading(false);
        }

        setLoading(false);
    };
}

export async function logout(dispatch, getState) {
    dispatch({type: authTypes.AUTH_LOGOUT});
    localStorage.clear();
}

const authReducer = (
    state = initialState,
    action: {
        type: any; name: string; email: string; regno: string
        mobileno: string; access_token: string; refresh_token: string
    }
) => {
    switch (action.type) {
        case authTypes.AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authTypes.AUTH_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false,
                name: action.name,
                email: action.email,
                regno: action.regno,
                mobileno: action.mobileno,
                access_token: action.access_token,
                refresh_token: action.refresh_token,
            };
        case authTypes.AUTH_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                loading: false,
                name: "",
                email: "",
                regno: "",
                mobileno: "",
                access_token: "",
                refresh_token: "",
            };
        default:
            return state;
    }
};

export default authReducer;
