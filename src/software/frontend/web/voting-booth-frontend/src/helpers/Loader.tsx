import React from "react";
import {CircularProgress} from "@material-ui/core";

const Loader = () => {
    return (
        <>
            <div className={"loader_global full-screen-loader-container"}>
                <CircularProgress />
            </div>
        </>
    )
}

export default Loader;