import React, {  useRef, useState } from "react";
import axios from "axios";
function Login(){
    const email = useRef();
    const password = useRef();
    const [res,setRes] = useState({});

    const login = ()=>{
        
            axios.post("http://localhost:8080/login",{"email":email.current.value,
                                                      "password":password.current.value})
                                                      .then((posRes)=>{
                            const { data } = posRes;
                            setRes(data)

                                                      },(errRes)=>{
                    console.log(errRes);
            });
        
    }

    return(
        <React.Fragment>
            <input type="email" placeholder="enter email" ref={email}></input>
            <br></br><br></br>
            <input type="password" placeholder="enter password" ref={password}></input>
            <br></br><br></br>
            <button onClick={login}>Login</button>
            <br></br><br></br>
            <h1>{JSON.stringify(res)}</h1>
        </React.Fragment>
    )
}
export default Login;