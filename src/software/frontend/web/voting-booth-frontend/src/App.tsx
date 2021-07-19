import RouteWrapper from "./router/RouteWrapper";
import { ToastContainer } from "react-toastify";
import React from "react";

import './style/App.css';
import './style/header.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouteWrapper />
    </>
  );
};

export default App;