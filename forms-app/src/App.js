import logo from './logo.svg';
import './App.css';
import React from 'react';
import Signup from './Signup';
import rocket from "./assets/images/rocket.png";

function App() {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-md-5">
                <Signup></Signup>
            </div>
            <div className="col-md-7">
                <img src={rocket} className="img-fluid w-100"></img>
            </div>
        </div>
    </React.Fragment>
  );
}

export default App;
