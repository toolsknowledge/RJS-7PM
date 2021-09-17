import React, { useEffect, useState } from "react";
import axios from "axios";

function App(){
   const [arr,setArr] = useState([]);

   useEffect(()=>{
      axios.get("http://localhost:5000/api/v1/products").then((posRes)=>{
         const { data } = posRes;
         setArr(data);
      },(errRes)=>{
         console.log(errRes);
      })
   },[]);

   return(
      <React.Fragment>
         <h1>{JSON.stringify(arr)}</h1>
      </React.Fragment>
   )


}

export default App;

















// import React, { Component } from "react";

// class App extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//          data : []
//       }
//     }

//     componentDidMount(){
//        fetch("http://localhost:5000/api/v1/products").then((posRes)=>posRes.json()).then((data)=>{
//           this.setState({
//             data : data
//           })
//        },(error)=>{
//           console.log(error);
//        })
//     }

//     render(){
//        return(
//           <React.Fragment>
//               <h1>{JSON.stringify(this.state.data)}</h1>
//           </React.Fragment>
//        )
//     }
// };

// export default App;