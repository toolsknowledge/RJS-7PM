import React, { Profiler } from "react";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
function Demo1(){

    const my_fun = (id,phase,startTime,totalTime,a,b,c)=>{
        console.log(id);
        console.log(phase);
        console.log(startTime);
        console.log(totalTime);
    };



    return(
        <React.Fragment>
            <Profiler id="demo2" onRender={my_fun}>
                <Demo2 key1="Welcome to Profiler Concept" ></Demo2>
            </Profiler>

            <Profiler id="demo3" onRender={my_fun}>
                <Demo3 key1="Welcome to Profiler Concept"></Demo3>
            </Profiler>
        </React.Fragment>
    )
}
export default Demo1;