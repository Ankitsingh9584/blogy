import { SIGNUP_ERROR,SIGNUP_SUCCESS,SIGNUP_LOADING } from "./signup.types";
const initialState={
register:false,
error:false,
loading:false,
message:"",

}

export const signupReducer=(state=initialState,action)=>{

    switch(action.type){
        case SIGNUP_LOADING:{
     return {
        ...state,
          loading:true,
      
          register:false
     }

        }
        case SIGNUP_SUCCESS:{
            return {
                ...state,
                register:true,
                loading:false,
                error:false,
                message:action.payload
            }
        }
        case SIGNUP_ERROR:{
            return {
                ...state,
                error:true,
           
                 register:false
            }
        }
default :{ return state;

}
}}