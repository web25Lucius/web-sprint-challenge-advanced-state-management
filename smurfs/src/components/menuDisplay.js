import React from "react";
import { connect } from "react-redux";
import {postSmurf} from '../actions/smurfActions'

const SmurfEntree = props => {
  return (
    <div>
      <br></br>
      <p>THIS IS SMURF ENTREE</p>
  <button onClick={props.getSmurf}>Order Daily Special</button> 
  <div>
    <p>SMURF ENTREE LIST OF NAME AGE HEIGHT</p>
    <div key={props.id}>
    <h3>{props.name}</h3>
    <h3>{props.age}</h3>
    <h3>{props.height}</h3>
    </div>
  </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    nextIngredient: state.getSmurf
  };
};



const mapDispatchToProps = {postSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfEntree);