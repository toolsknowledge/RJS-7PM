import React, { useEffect, useState } from "react";
import axios from "axios";
const dotenv = require("dotenv");

function App(){
    dotenv.config();
    const [res,setRes] = useState([]);
    useEffect(()=>{
       console.log(process.env.REACT_URL);
      axios.get(`https://restcountries.eu/rest/v2/all`).then((posRes)=>{
            const { data } = posRes;
            setRes(data)
      },(errRes)=>{
          console.log(errRes);
      });
    },[]);

    return(
       <React.Fragment>
            <table border="1"
                   cellPadding="10px"
                   cellSpacing="10px"
                   align="center">
                  <tr>
                     <th>SNO</th>
                     <th>NAME</th>
                     <th>CAPITAL</th>
                     <th>REGION</th>
                     <th>POPULATION</th>
                     <th>NATIVE NAME</th>
                     <th>IMAGE</th>
                  </tr>
                  {res.map((element,index)=>(
                     <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.name}</td>
                        <td>{element.capital}</td>
                        <td>{element.region}</td>
                        <td>{element.population}</td>
                        <td>{element.nativeName}</td>
                        <td><img width="100px" height="50px" src={element.flag}></img></td>
                     </tr>
                  ))}
            </table>
            
           

       </React.Fragment>
    )    
}
export default App;
