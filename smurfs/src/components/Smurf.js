import React from 'react';
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions/actions';


const Smurf = (props) => {
    
      return (
        <div>
             <button onClick={props.fetchSmurfs}>Fetch Smurf</button>
            <p>
                Name: {props.smurfArr && props.smurfArr.name} <br />
                Age: {props.smurfArr && props.smurfArr.age} <br />
                Size: {props.smurfArr && props.smurfArr.height} 
            </p>
            {console.log("These are props from Smurf" + props)}
           
            <h4>Thank you, come again!</h4>
        </div>
    )
}


const mapStateToProps = state =>{
       return {
         isLoading: state.isLoading, 
         smurfArr: state.smurfArr
        };


        };
// const mapDispatchToProps = {fetchSmurfs};
const mapDispatchToProps = {
    fetchSmurfs
}


export default connect(mapStateToProps, mapDispatchToProps
    )(Smurf)
