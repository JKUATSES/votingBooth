import RouteWrapper from "./router/RouteWrapper";
import { ToastContainer } from "react-toastify";
import React from "react";

import './App.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouteWrapper />
    </>
  );
};

export default App;