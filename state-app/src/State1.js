import React, { useState } from "react";
function State1(){
    const [num,setNum] = useState(1);
    const myFun = function(){
        setNum( num+1 );
    }
    return(
        <React.Fragment>
            <h1 style={{color:"pink"}}>{num}</h1>
            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )
}
export default State1;