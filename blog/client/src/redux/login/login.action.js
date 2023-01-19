import {LOGIN_ERROR} from "./login.type"
import {LOGIN_SUCCESS} from "./login.type"
import {LOGIN_LOADING} from "./login.type";
import {LOGOUT_USER,GOOGLE_AUTH} from "./login.type";
import axios from "axios"



export const login=(creds)=>async(dispatch)=>{
    // console.log(creds)
dispatch({type:LOGIN_LOADING});
try{
let response=await axios.post("https://blogbackend-1pps.onrender.com/user/login",creds,{

});
console.log(response.data)
if(response.data.message==="ok"){
  // setting token to headers so we can get in backend for token verfication middleware
  axios.defaults.headers.common["authorization"]=`${response.data.token}`;
    dispatch({type:LOGIN_SUCCESS,payload:response.data});
}
 if(response.data.message==="no"){
    
dispatch({type:LOGIN_ERROR})
  }
}
catch{
dispatch({type:LOGIN_ERROR})
}
}


// google auth not working i dont know i have tried to much but not working so not use login within google button in frontend
export const googleAuth=()=>async(dispatch)=>{

  try{
    console.log("googleAuth")
   let response= await axios.get("https://blogbackend-1pps.onrender.com/auth/google");
   console.log(response.data)
    dispatch({type:GOOGLE_AUTH})
  }
catch(e){
console.log(e.message)
}
}


export const logOut=()=>async(dispatch)=>{
  dispatch({type:LOGOUT_USER});
}