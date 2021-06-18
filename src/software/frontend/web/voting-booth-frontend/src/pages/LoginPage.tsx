import {checkLogin} from "../helpers/CheckLogin";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import {IMAGE} from "../helpers/constants";
import React from "react";
import LoginForm from "../layouts/LoginForm";

const LoginPage = () => {
    const dispatch = useDispatch();
    let loggedIn = checkLogin(dispatch);

    if (loggedIn) {
        return <Redirect to={"/"}/>;
    } else return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{"JKUAT SES Voting System | Login"}</title>
            </Helmet>

            <div className={"login-container"}>
                <div className={"login-page"}>
                    <div className={"password-logo-container"}>
                        <img src={IMAGE("logo.png")} alt="JKUAT SES"/>
                        <span className={"logo-text"}>JKUAT SES</span>
                    </div>

                    <LoginForm displayMode={'signup'} />
                </div>
            </div>
        </>
    )
};

export default LoginPage;
