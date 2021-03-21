import React from "react";
import Smurf from './Smurf.js';
// ephemoral state, how the list ascending/sorted/etc..  import Smurfs from './Smurfs.js'; 
import "./App.css";


const App = ()=> {
  return (
      <div className="App">
        <h1>SMURFS!</h1>
        <div><h3>Welcome to your state management version of<br /> Gargamel's Golden Fried Smurfs!</h3>
        <h4>You buy 'em, we fry 'em.</h4>
        <h4>Fetch a fresh Smurf below to try our Smurf Dujour!</h4></div>
        <Smurf />
      </div>
    );
  }


export default App;
