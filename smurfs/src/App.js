import React from "react";
import SmurfOrderForm from "./components/form";
//import SmurfMenuForm from "./components/form";
import Smurf from "./components/smurfVillage";
import SmurfEntree from "./components/menuDisplay"

import "./App.css";


export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Gargamel's Golden Corral</h1>
      <h2>You buy em', <br></br>we fry em'!</h2>
      <SmurfOrderForm />
      <SmurfEntree/>
      <Smurf />
   
    </div>
  );
}