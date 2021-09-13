import React, { Component } from "react";
interface IState{
  arr:any[];
}
interface IProps{}
class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
      this.state = {
        arr : []
      }
    }
    render(){
      return(
        <React.Fragment>
            <h1>{JSON.stringify(this.state.arr)}</h1>
        </React.Fragment>
      )
    }
    componentDidMount(){
       fetch("https://restcountries.eu/rest/v2/all")
        .then((posRes)=>posRes.json())
        .then((data)=>{
            this.setState({
              arr:data
            })
        },(error)=>{
          console.log(error);
        })
    }
}
export default App;
