import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
function Mern(){
    return(
        <React.Fragment>
             <Frontend />
             <Backend />
             <Database />
        </React.Fragment>
    )
}
export default Mern;