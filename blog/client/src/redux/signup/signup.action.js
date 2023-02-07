import {SIGNUP_ERROR} from "./signup.types"
import {SIGNUP_SUCCESS} from "./signup.types"
import {SIGNUP_LOADING} from "./signup.types";
import axios from "axios";



export const signup=(creds)=>async(dispatch)=>{
  
dispatch({type:SIGNUP_LOADING});
try{
let response=await axios.post("https://blogbackend-1pps.onrender.com/user/register",creds);
console.log(response.data)
      dispatch({type:SIGNUP_SUCCESS,payload:response.data});
      if(response.data.message==="userexist"){
            dispatch({type:SIGNUP_ERROR})
      }
}
catch{
dispatch({type:SIGNUP_ERROR})
}
}
