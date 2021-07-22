import React from "react";
import {
  AddAPhotoRounded, AllInclusiveRounded, ArrowBackIosRounded, ArrowBackRounded, AttachMoneyRounded,
  BusinessRounded,
  CreditCardRounded,
  DashboardRounded,
  DeleteForeverRounded,
  DeleteOutlineRounded,
  EditRounded,
  ExitToAppRounded, LabelRounded, MonetizationOnOutlined, MonetizationOnRounded,
  PeopleAltRounded,
  PersonPinRounded, PetsRounded,
  RedeemRounded,
  ShoppingBasketRounded, StoreRounded,
  VerifiedUser,
} from "@material-ui/icons";

export const AppIcon = ({ type, size }) => {
  switch (type) {
    case "dashboard":
      return (
        <DashboardRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "logout":
      return (
        <ExitToAppRounded fontSize={size} className={"counter-tile-icon"} />
      );

    case "edit":
      return <EditRounded fontSize={size} className={"counter-tile-icon"} />;
    case "delete":
      return (
        <DeleteForeverRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "back":
      return (
        <ArrowBackRounded fontSize={size} className={"counter-tile-icon"} />
      );

    default:
      return (
        <PeopleAltRounded fontSize={size} className={"counter-tile-icon"} />
      );
  }
};

export function appIconStyles() {
  return {
    blueIcon: {
      color: "#0042DE",
    },
    blueIconOpen: {
      color: "#FFC70E",
      padding: "0 16px 0 0",
      minWidth: 0,
    },
    orangeIcon: {
      color: "#FFC70E",
      padding: "0 16px 0 0",
      minWidth: 0,
    },
    orangeIconClosed: {
      color: "#FFC70E",
    },
    whiteIcon: {
      color: "#FFF",
    },
    redIcon: {
      color: "orangered",
    },
  };
}
