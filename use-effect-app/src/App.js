import React, { useEffect } from "react";
import axios from "axios";
function App(){

   useEffect(()=>{
      axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{
          console.log(posRes);
      },(errRes)=>{
        console.log(errRes);
      })
   },[]);


    return(
       <React.Fragment>

       </React.Fragment>
    )
}
export default App;