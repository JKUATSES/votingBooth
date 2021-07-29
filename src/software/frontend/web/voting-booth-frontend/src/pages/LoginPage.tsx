import {Redirect, useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
import {IMAGE} from "../helpers/constants";
import React, {useEffect, useState} from "react";
import LoginForm from "../layouts/LoginForm";
import {isAuthenticated} from "../helpers/LoginUtilities";

const LoginPage = (props) => {
    const [authenticated, setAuthenticated] = useState(false);
    const history = useHistory();

    useEffect(() => {
        async function checkAuth() {
            const isAuth = await isAuthenticated() || false;
            setAuthenticated(isAuth);
        }

        checkAuth();
    }, []);

    if (authenticated) {
        history.push("/")
    }

    return (
        <>
            {

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

                                <LoginForm displayMode={'login'}/>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default LoginPage;
