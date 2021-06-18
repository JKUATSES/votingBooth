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
    case "users":
      return (
        <PeopleAltRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "partners":
      return (
        <PersonPinRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "active-users":
      return <VerifiedUser fontSize={size} className={"counter-tile-icon"} />;
    case "outlets":
      return (
        <BusinessRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "coupons":
      return (
        <CreditCardRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "redemptions":
      return <RedeemRounded fontSize={size} className={"counter-tile-icon"} />;
    case "delivered":
      return (
        <ShoppingBasketRounded
          fontSize={size}
          className={"counter-tile-icon"}
        />
      );
    case "animals":
      return (
        <AddAPhotoRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "dashboard":
      return (
        <DashboardRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "logout":
      return (
        <ExitToAppRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "uninstalls":
      return (
        <DeleteForeverRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "edit":
      return <EditRounded fontSize={size} className={"counter-tile-icon"} />;
    case "delete":
      return (
        <DeleteForeverRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "label":
      return (
        <LabelRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "back":
      return (
        <ArrowBackRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "animal":
      return (
        <PetsRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "all":
      return (
        <AllInclusiveRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "bought":
      return (
        <StoreRounded fontSize={size} className={"counter-tile-icon"} />
      );
    case "money":
      return (
        <MonetizationOnRounded fontSize={size} className={"counter-tile-icon"} />
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
