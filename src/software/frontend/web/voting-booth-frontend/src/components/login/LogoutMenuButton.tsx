//@ts-nocheck
import React from "react";
import "../../../../../src/styles/App.css";
import { AppIcon } from "../../../../helpers/AppIcon";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/auth.reducer";
import { Link } from "react-router-dom";

interface Menu {
  icon: string;
  text: string;
  destination: string;
}

const LogoutMenuButton: React.FC<Menu> = (props: Menu) => {
  const dispatch = useDispatch();

  const handleLogout = function () {
    dispatch(logout);
  };

  return (
    <Link
      className={"menu-item down"}
      onClick={handleLogout}
      to={props.destination}
    >
      {<AppIcon type={props.icon} size="small" />}
      &nbsp; {props.text}
    </Link>
  );
};

export default LogoutMenuButton;
