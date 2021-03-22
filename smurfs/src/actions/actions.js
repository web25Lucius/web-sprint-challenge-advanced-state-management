import {FETCH_SMURFS_LOADING, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, FETCH_SMURFS_START, initialState} from '../reducers/reducers';
import axios from 'axios';

//import {fetchAPI} from '../components/fetch';

export const fetchSmurfsLoading = ()=> {
    return {type: FETCH_SMURFS_LOADING, payload: initialState}
}

export const fetchSmurfs = () => (dispatch) => {
    
    // dispatch({ type: FETCH_SMURFS_START })
    axios
         .get("http://localhost:3333/smurfs")
         .then((res)=> {
             dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data })            
             console.log("JSON Smurf API fetch works and is calling:", res.data)
             
         })
         .catch
         ((err)=>{
            dispatch({type: FETCH_SMURFS_ERROR, payload: err.response})
             console.log(`Error message: ${err}`)})
         }
         