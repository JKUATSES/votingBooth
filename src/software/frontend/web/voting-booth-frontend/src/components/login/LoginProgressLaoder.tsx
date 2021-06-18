import { CircularProgress } from "@material-ui/core";
import React from "react";

export const LoginProgressLoader = ({ message }) => {
  return (
    <div className={"full-screen-loader-container"}>
      <CircularProgress />
      <h4 data-testid={"loading-indicator"} className={"loading-indicator"}>
        {message}
      </h4>
    </div>
  );
};
