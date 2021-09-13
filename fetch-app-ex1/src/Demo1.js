import React, { useEffect, useState } from "react";

function Demo1(){

    const [arr,setArr] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all").then((posRes)=>posRes.json()).then((data)=>{
            setArr(data);
        },(error)=>{
            console.log(error);
        })
    },[])


    return(
        <React.Fragment>
            {JSON.stringify(arr)}
        </React.Fragment>
    )
};

export default Demo1;