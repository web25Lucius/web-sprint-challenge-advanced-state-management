import { NEXT_INGREDIENT} from "../actions/index";

export const initialState = {
  id: 0,
  name: "",
  age: "",
  height: ""
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_INGREDIENT:
      return {
        ...state,
        id: action.payload++,
        name: action.payload,
        age: action.payload,
        height: action.payload
      };
    default:  
      return state;
  }
};