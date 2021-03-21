import React from 'react';
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions/actions';

const Smurf = (props) => {
    console.log(props);
      return (
        <div>
            <p>
                Name: {props.SmurfArr && props.SmurfArr.name} <br />
                Age: {props.SmurfArr && props.SmurfArr.age} <br />
                Size: {props.SmurfArr && props.SmurfArr.height} 
            </p>
            <button onClick={props.fetchSmurfs}>Fetch Smurf</button>
            <h4>Thank you, come again!</h4>
        </div>
    )
}


const mapStateToProps = state =>{
       return {
         isLoading: state.isLoading, 
         smurfArr: state.SmurfArr
        };


        };
const mapDispatchToProps = {fetchSmurfs};

export default connect(mapStateToProps, mapDispatchToProps
    )(Smurf)
