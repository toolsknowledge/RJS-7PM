import React, { Component, PureComponent } from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
           num : 1
        }
    }

    componentDidMount(){
       setInterval(()=>{
          this.setState({
            num : 1
          })
       },1000);
    }

    shouldComponentUpdate(){
      return false;
    }


    render(){
       console.log("Hello");
       return(
          <React.Fragment>
              <h1>{this.state.num}</h1>
          </React.Fragment>
       )
    }
}

export default App;