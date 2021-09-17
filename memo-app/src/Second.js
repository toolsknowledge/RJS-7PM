// import React from "react";
// function Second(props){
//     console.log("Hello");
//     return(
//         <React.Fragment>
//             <h1>{props.key1}</h1>
//         </React.Fragment>
//     )
// };
// export default Second;


import React from "react";
export default React.memo((props)=>{
    console.log("Hello");
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
        </React.Fragment>
    )
});







