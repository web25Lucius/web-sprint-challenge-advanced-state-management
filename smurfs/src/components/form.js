import React, { useState } from "react";
import SmurfEntree from "./menuDisplay";
import { connect } from "react-redux";
//import { nextIngredient } from "../actions/index";
import { postSmurf } from "../actions/smurfActions";
//import { getSmurf} from "../actions/smurfActions"

const SmurfOrderForm = props => {
  
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: ""
  });

  
  const inputChange = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log("Form submitted. Smurf is on the way. Order received!", formState);

    setFormState({
      
      name: "",
      age: 0,
      height: ""
    });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name &nbsp;
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={inputChange}
          />
          <br></br>
        </label>
        <label htmlFor="age">
          Age &nbsp;
          <input
            type="text"
            name="age"
            id="age"
            value={formState.age}
            onChange={inputChange}
          />
        </label>
        <br></br>
        <label htmlFor="height">
          Height &nbsp;
          <input
            name="height"
            id="height"
            value={formState.height}
            onChange={inputChange}
          />
        </label>
        <br></br>
        <button
          onClick={() => {
          postSmurf(formState);
          }}
        >
          Submit Conjured Order
        </button>
        <br></br>
       
      </form>
      {/* <div>
        <SmurfEntree />
      </div> */}

    </>
  );
};

export default connect(
  null,
  { postSmurf }
)(SmurfOrderForm);
