import React from 'react';
import {handleLogout} from "../../pages/DashboardPage";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {LOGIN} from "../../router/paths";

const Header = ({ currentPath }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={"header_container"}>
                <div className={"header"}>
                    <div className={"logo_text"}>
                        <Link
                            className={""}
                            to={'/'}
                        >
                            <span className={"logo-text home"}>JKUAT SES</span>
                        </Link>
                    </div>
                    <div className={"menu"}>
                        {/* other menu items go here */}

                        <Link
                            className={""}
                            to={"/dashboard/profile"}
                        >
                        <span className={currentPath === "profile" ? "menu_item selected" : "menu_item"}>
                            Profile
                        </span>
                        </Link>

                        <Link
                            className={""}
                            onClick={() => handleLogout(dispatch)}
                            to={"/login"}
                        >
                        <span className={"menu_item logout_button"} onClick={() => handleLogout(dispatch)}>
                            Logout
                        </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;