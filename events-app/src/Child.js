import React from "react";
function Child(props){
    return(
        <React.Fragment>
            <button onClick={()=>{props.key1("ReactJS","NodeJS","MongoDB")}}>ClickMe</button>
        </React.Fragment>
    )
};
export default Child;