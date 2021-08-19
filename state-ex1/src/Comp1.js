import React, { Component } from "react";
import Comp2 from "./Comp2";

class Comp1 extends Component{
     constructor(props){
         super(props);
         this.state = {
             products : [{"p_id":111,"p_name":"p_one","p_cost":10000},
                         {"p_id":222,"p_name":"p_two","p_cost":20000},
                         {"p_id":333,"p_name":"p_three","p_cost":30000},
                         {"p_id":444,"p_name":"p_four","p_cost":40000},
                         {"p_id":555,"p_name":"p_five","p_cost":50000}]
         }
     }
     
     render(){
         return(
             <React.Fragment>
                 <Comp2 key1={this.state.products}></Comp2>
             </React.Fragment>
         )
     }
}
export default Comp1;