import React, { Component } from "react";
class StateEx extends Component{
    constructor(props){
        super(props);
        this.state = {
            "key1" : "ReactJS With JSX",
            "key2" : 10000,
            "key3" : true,
            "key4" : [10,20,30,40,50],
            "key5" : [{"e_id":111,"e_name":"e_one","e_sal":10000},
                      {"e_id":222,"e_name":"e_two","e_sal":20000},
                      {"e_id":333,"e_name":"e_three","e_sal":30000},
                      {"e_id":444,"e_name":"e_four","e_sal":40000},
                      {"e_id":555,"e_name":"e_five","e_sal":50000}]
        }
    }
    render(){
        return(
            <React.Fragment>
                <table border="1"
                       cellPadding="10px"
                       cellSpacing="10px"
                       align="center">
                    <tr>
                        <th>SNO</th>
                        <th>E_ID</th>
                        <th>E_NAME</th>
                        <th>E_SAL</th>
                    </tr>
                    {this.state.key5.map((element,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.e_id}</td>
                            <td>{element.e_name}</td>
                            <td>{element.e_sal}</td>
                        </tr>
                    ))}
                </table>


                 {
                     this.state.key4.map((element,index)=>(
                        <h1 key={index}>{element}</h1>
                     ))
                 }
                 <h1>{JSON.stringify(this.state.key3)}</h1>
                 <h1>{this.state.key2}</h1>
                 <h1>{this.state.key1}</h1>
            </React.Fragment>
        )
    }
}
export default StateEx;