import React, { Component } from "react";
import Second from "./Second";
class First extends Component{
    constructor(props){
        super(props);
        this.state = {
            num : 1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num:Math.random()
            })
        },1000);
    }
    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.num}></Second>
            </React.Fragment>
        )
    }
}
export default First;