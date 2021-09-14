import './App.css';

import React,{ lazy,Suspense } from "react";

const Heavy = lazy(()=>import("./Heavy") )

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>Loading....!</div>}>
          
            <Heavy></Heavy>
         
        </Suspense>
        </div>
    
  );
}

export default App;
