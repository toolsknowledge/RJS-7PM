import React, { useState } from "react";

function App(){
    const [msg,setMsg] = useState("ReactJS With JSX");
    const fun_one = ()=>{
        console.log("Hello, i am click event !!!");
    };

    const fun_two = (arg1,arg2)=>{
        if(arg1 == "admin" && arg2 == "admin"){
          console.log("Login Success");
        }else{
          console.log("Login Fail");
        }
    };

    const fun_three = (msg)=>{
      console.log(msg, "welcome to events in reactjs");
    };

    return(
        <React.Fragment>
             <h1>{msg}</h1>
             <button onClick={fun_one}>Button1</button>
             <button onClick={()=>{ fun_two("admi","admin") }}>Button2</button>
             <button onDoubleClick = {()=>fun_three("Hello")}>Button3</button>
             <button onClick={ ()=> setMsg("ReactJS With TSX") }>Button4</button>
        </React.Fragment>
    )
}

export default App;