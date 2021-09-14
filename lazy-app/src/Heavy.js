import React, { Component } from "react";

class Heavy extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr : []
        }
    }

    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all").then((posRes)=>posRes.json()).then((data)=>{
            this.setState({
                arr : data
            })
        },(error)=>{
            console.log(error);
        })
    }

    render(){
        return(
            <React.Fragment>
                 <table border="1"
                        cellPadding="10px"
                        cellSpacing="10px"
                        align="center">
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>NAME</th>
                                <th>CAPITAL</th>
                                <th>REGION</th>
                                <th>NATIVENAME</th>
                                <th>FLAG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.arr.map((element,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.name}</td>
                                    <td>{element.capital}</td>
                                    <td>{element.region}</td>
                                    <td>{element.nativeName}</td>
                                    <td><img width="100px" height="50px" src={element.flag}></img></td>
                                </tr>
                            ))}
                        </tbody>
                 </table>
            </React.Fragment>
        )
    }

}

export default Heavy;