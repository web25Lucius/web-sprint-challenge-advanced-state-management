import React, {useEffect, useState} from "react";
import { getSmurf, postSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";

const Smurf = props => {
  console.log(props)
  useEffect(() => {
    getSmurf();
  }, [postSmurf]);

  return( 
    <div>
   
  
    </div>
  )
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(Smurf);