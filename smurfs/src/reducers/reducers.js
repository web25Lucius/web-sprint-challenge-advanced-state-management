
export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS= "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR= "FETCH_SMURFS_ERROR"; 
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";

// export const setSmurf = (name, age, height) => {
//     return ({type: SET_SMURF, payload: { name: name, age: age, height: height}})
// }

export const initialState= {
    isLoading: false,
    smurfArr : [{
        name: "",
        age: 0, 
        height: ""
    }]
}
export const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
       case FETCH_SMURFS_LOADING: 
        return {
            ...state, 
            isLoading: true
            }
       
    //    case FETCH_SMURFS_START:
    //    return{...state,
    //         smurfArr: action.payload,
    //         isLoading: false 
      
    //      }
       
       case FETCH_SMURFS_SUCCESS: 
        return {...state,
           smurfArr: action.payload,
           isLoading: false 
     
        }
       
       case FETCH_SMURFS_ERROR:
        return{...state, 
              error: action.payload}
           
       default: 
        return {...state}
      
   }
}
//case switch or if statement 

