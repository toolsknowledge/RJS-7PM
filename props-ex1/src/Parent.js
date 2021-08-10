import React, { useState } from "react";
import Child from "./Child";
function Parent(){
    const [arr,setArr] = useState([{"e_id":111,"e_name":"e_one","e_sal":10000},
              {"e_id":222,"e_name":"e_two","e_sal":20000},
              {"e_id":333,"e_name":"e_three","e_sal":30000},
              {"e_id":444,"e_name":"e_four","e_sal":40000},
              {"e_id":555,"e_name":"e_five","e_sal":50000}]);
    return(
        <React.Fragment>
             <Child key1={arr}></Child> 
        </React.Fragment>
    )
}
export default Parent;