import React, { Component } from "react";
class Comp2 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                 <table border="1"
                        align="center">
                    <tr>
                       <th>SNO</th>
                       <th>P_ID</th>
                       <th>P_NAME</th>
                       <th>P_COST</th> 
                    </tr>
                    {
                        this.props.key1.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                            </tr>
                        ))
                    }
                 </table>
            </React.Fragment>
        )
    }
}
export default Comp2;