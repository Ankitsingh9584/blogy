import { FORGOTPASS_SUCCESS,FORGOTPASS_LOADING,FORGOTPASS_ERROR,SET_FORGOTPASS_ERROR,
SET_FORGOTPASS_LOADING,SET_FORGOTPASS_SUCCESS } from "./forgotpass.types";
import axios from "axios";




export const sendDetails=(creds)=>async(dispatch)=>{
    console.log("forgot",creds)
try{
let response=await axios.post("http://localhost:8080/forgotpass",creds)
console.log("forgot email response",response.data);
if(response.data.msg==="ok"){
    dispatch({type:FORGOTPASS_SUCCESS,payload:{otp:response.data.otp,email:response.data.email}})
}
else{
    dispatch({type:FORGOTPASS_ERROR})
}
}
catch(e){
    dispatch({type:FORGOTPASS_ERROR})
console.log("forgotpass",e.message)
}
}





export const setForgotPass=(creds)=>async(dispatch)=>{
    console.log("forgot",creds)
try{
let response=await axios.post("http://localhost:8080/setforgotpass",creds)
console.log("forgot email response",response.data);
if(response.data.msg==="ok"){
    dispatch({type:SET_FORGOTPASS_SUCCESS})
}
else{
    dispatch({type:SET_FORGOTPASS_ERROR})
}
}
catch(e){
    dispatch({type:SET_FORGOTPASS_ERROR})
console.log("forgotpass",e.message)
}
}