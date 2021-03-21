
export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS= "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR= "FETCH_SMURFS_ERROR"; 
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";



export const initialState= {
    isLoading: false,
    smurfArr : []
}
export const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
       case FETCH_SMURFS_LOADING: 
        return {
            ...state, 
            isLoading: true
            }
       
       case FETCH_SMURFS_START:
        return {...state}
       
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

