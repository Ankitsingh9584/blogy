import { FORGOTPASS_SUCCESS,FORGOTPASS_LOADING,FORGOTPASS_ERROR ,
    SET_FORGOTPASS_ERROR,
    SET_FORGOTPASS_LOADING,SET_FORGOTPASS_SUCCESS } from "./forgotpass.types";
const otp=sessionStorage.getItem("otp");
const email=sessionStorage.getItem("email");
const initialState={
  sendEmailOtp:{
    error:false,
    foundemail:false,
    otp:otp ? otp:"",
    loading:false,
    otpGet:false,
    userEmail:email ? email :""
  },
  setUserNewpass:{
success:false,
error:false,
loading:false
  } 
  
}

export const forgotPass=(state=initialState,action)=>{
switch(action.type){
    case FORGOTPASS_SUCCESS :{
        sessionStorage.setItem("otp",action.payload.otp)
        sessionStorage.setItem("email",action.payload.email)
return {
    ...state,
    sendEmailOtp:{
        error:false,
        otp:action.payload.otp,
        loading:false,
        otpGet:true,
        userEmail:action.payload.email
       
    } 
}


    }
    case FORGOTPASS_ERROR :{
        return {
            ...state,
            sendEmailOtp:{
                error:true,
                otp:"",
                loading:false,
                otpGet:false,
                setUserNewPass:false
            }  
          
        }
    }
    case SET_FORGOTPASS_ERROR :{
        return {
            ...state,
            setUserNewpass:{
                success:false,
                 error:true,
               loading:false
            }  
          
        }
    }
    case SET_FORGOTPASS_SUCCESS :{
        return {
            ...state,
            setUserNewpass:{
                success:true,
                 error:false,
               loading:false
            }  
          
        }
    }



   default :{
return state
    }
}

}