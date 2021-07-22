import authTypes from "../auth/auth.types";
import {errorToaster, successToaster} from "../../helpers/Toaster";
import {axiosInstance} from "../../api/api";

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

function checkErrors(response) {
    if (response?.detail !== undefined) {
        return "Error: " + response.detail
    } else if (response?.regno !== undefined) {
        return "Reg number: " + response.regno[0]
    } else if (response?.email !== undefined) {
        return "Email: " + response.email[0]
    } else if (response?.mobileno !== undefined) {
        return "Mobile number: " + response.mobileno[0]
    } else if (response?.name !== undefined) {
        return "Name: " + response.name[0]
    } else if (response?.password1 !== undefined) {
        return "Password: " + response.password1[0]
    } else if (response?.password2 !== undefined) {
        return "Password: " + response.password2[0]
    } else if (response?.non_field_errors !== undefined) {
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
            await axiosInstance.post(
                // Change link to reflect the Django signup endpoint
                "auth/signup/",
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
                    localStorage.setItem("startTime", Date.now().toString());
                    localStorage.setItem("name", response.data.user.name);
                    localStorage.setItem("email", response.data.user.email);
                    localStorage.setItem("regno", response.data.user.regno);
                    localStorage.setItem("mobileno", response.data.user.mobileno);
                    localStorage.setItem("access_token", response.data.access_token);
                    localStorage.setItem("refresh_token", response.data.refresh_token);

                    successToaster("Signed up successfully")
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

export async function getProfile(access) {
    let profile = {};

    await axiosInstance.get(
        "/users/profile/",
        {
            headers: {
                'Authorization': `Bearer ${access}`
            }
        }
    ).then((response => {
        let data = response.data;
        if (data !== null) {
            profile["name"] = data.name;
            profile["email"] = data.email;
            profile["regno"] = data.regno;
            profile["mobileno"] = data.mobileno;
        }
    })).catch((error => {
        console.log("Couldn't fetch profile: ", error.data)
    }));

    return profile;
}

export function login(regNo, password, history, from, setLoading) {
    return async function loginUser(dispatch, getState) {
        let error = null;
        try {
            setLoading(true);
            await axiosInstance.post(
                // Change link to reflect the Django signup endpoint
                "/auth/login/",
                {
                    regno: regNo,
                    password: password
                }
            ).then(async (response) => {
                const data = response?.data;
                if (error === null) {
                    localStorage.setItem("startTime", Date.now().toString());
                    localStorage.setItem("access_token", response.data.access);
                    localStorage.setItem("refresh_token", response.data.refresh);

                    const profile = await getProfile(data.access);
                    localStorage.setItem("name", profile['name']);
                    localStorage.setItem("email", profile['email']);
                    localStorage.setItem("regno", regNo);
                    localStorage.setItem("mobileno", profile['mobileno']);

                    successToaster("Logged in successfully")
                    history.replace(from);
                }
                setLoading(false)
            }).catch((err) => {
                setLoading(false);
                error = checkErrors(err.response?.data)
                console.log(err)
                console.log(`${error}`);
                errorToaster(`${error}`, 'top-right', 2000);
            });
        } catch (err) {
            setLoading(false);
            console.log(`${err}`);
            // errorToaster(`Could not communicate with server. Please check your internet connection.`);
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
