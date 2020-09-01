import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL, 
    // POST_SMURF_START, 
    // POST_SMURF_SUCCESS, 
    // POST_SMURF_FAIL
  } from "../actions/smurfActions";
  
  export const initialState = {
    smurfSetup: "",  //res.data
    error: "",
    isLoading: false
  };
  
  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_START:
        return {
          ...state,
          error: "",
          isLoading: true
        };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          isLoading: true,
          smurfSetup: action.payload // action.payload == res.data
        };
      case FETCH_SMURF_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      // case POST_SMURF_START:
      //   return{
      //     ...state,
      //     error: "",
      //     isLoading: true
      //   };
      // case POST_SMURF_SUCCESS:
      //   return {
      //     ...state,
      //     isLoading: true,
      //     smurfSetup: action.payload action.payload == res.data
      //   };
      // case POST_SMURF_FAIL:
      //     return {
      //       ...state,
      //       isLoading: false,
      //       error: action.payload
      //     };
      default:
        return state;
    }
  };