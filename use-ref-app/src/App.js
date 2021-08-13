import React, { useRef, useState } from "react";
function App(){
    const uname = useRef();
    const upwd = useRef();
    const [result,setResult] = useState("");

    const login  = ()=>{
        if( uname.current.value === "admin" && upwd.current.value === "admin"){
            setResult("Login Success");
        }else{
            setResult("Login Fail");
        }
    };


    return(
       <React.Fragment>
          <input type="text" ref={uname}></input>
          <br></br><br></br>
          <input type="password" ref={upwd}></input>
          <br></br><br></br>
          <button onClick={login}>Login</button>
          <br></br><br></br>
          {result}
       </React.Fragment>
    )
}
export default App;