import React, { useState } from "react";
import Child from "./Child";
function Parent(){
    const [obj,setObj] = useState({});
    const fun_one = (arg1,arg2,arg3)=>{
        console.log(arg1,arg2,arg3);
        setObj({"sub_one":arg1,"sub_two":arg2,"sub_three":arg3})
    };

    return(
        <React.Fragment>
            <h1>{JSON.stringify(obj)}</h1>
            <Child key1={fun_one}></Child>
        </React.Fragment>
    )
};
export default Parent;