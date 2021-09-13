import React, { Component } from "react";

class App extends Component{
    
    constructor(props){
      super(props);
      this.state = {
        data:[]
      }
    }


    componentDidMount(){
       fetch("https://restcountries.eu/rest/v2/all").then((posRes)=> posRes.json()).then((data)=>{
          this.setState({
            data:data
          })
       },(err)=>{
         console.log(err);
       })
    }
  
    render(){
      return(
        <React.Fragment>
            <h1>{JSON.stringify(this.state.data)}</h1>
        </React.Fragment>
      )
    }
}
export default App;