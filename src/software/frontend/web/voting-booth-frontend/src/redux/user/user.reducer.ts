import userTypes from "../user/user.types";
import {errorToaster, successToaster} from "../../helpers/Toaster";
import {axiosInstance} from "../../api/api";
import {isAuthenticated, refreshPage} from "../../helpers/LoginUtilities";
import {getProfile} from "../auth/auth.reducer";

const initialState = {
    loading: true,
    name: "",
    email: "",
    regno: "",
    mobileno: "",
    access_token: "",
    refresh_token: "",
};

export function updateUser(name, email, mobileno, setLoading) {
    return async function x(dispatch, getState) {
        let error = null;
        let access, regno;

        if (await isAuthenticated()) {
            access = localStorage.getItem("access_token");
            regno = localStorage.getItem("regno");
        } else {
            errorToaster("Please log in.")
            return;
        }

        try {
            setLoading(true);
            await axiosInstance.post(
                // Change link to reflect the Django signup endpoint
                "/users/profile/",
                {
                    name,
                    email,
                    regno,
                    mobileno
                },
                {
                    headers: {
                        'Authorization': `Bearer ${access}`
                    }
                }
            ).then(async (response) => {
                const data = response?.data;
                if (error === null) {
                    const profile = await getProfile(access);
                    localStorage.setItem("name", profile['name']);
                    localStorage.setItem("email", profile['email']);
                    localStorage.setItem("regno", profile['regno']);
                    localStorage.setItem("mobileno", profile['mobileno']);

                    successToaster("Profile updated.");
                    refreshPage();
                }
                setLoading(false)
            }).catch((err) => {
                setLoading(false);
                error = err.response?.data;
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

const userReducer = (
    state = initialState,
    action: {
        type: any;
    }
) => {
    switch (action.type) {
        case userTypes.USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case userTypes.USER_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case userTypes.USER_UPDATE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
