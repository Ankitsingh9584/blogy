import { LOGIN_ERROR,LOGIN_SUCCESS,LOGIN_LOADING,LOGOUT_USER,GOOGLE_AUTH} from "./login.type";
const token=sessionStorage.getItem("token");
const userName=sessionStorage.getItem("userName")
console.log("local",token)
const initialState={
isAuth:token!==null,
error:false,
loading:false,
token:token ? token:"",
userName:userName ?userName:""
}

export const loginReducer=(state=initialState,action)=>{

    switch(action.type){
        case LOGIN_LOADING:{
     return {
        ...state,
          loading:true,
          error:false
     }

        }
        case LOGIN_SUCCESS:{
            sessionStorage.setItem("token",action.payload.token)
            sessionStorage.setItem("userName",action.payload.userName)
            return {
                ...state,
                isAuth:true,
                loading:false,
                error:false,
                token:action.payload.token,
                userName:action.payload.userName
            }
        }
        case LOGIN_ERROR:{
            return {
                ...state,
                error:true,
                loading:false,
                isAuth:false
            }
        }
        case GOOGLE_AUTH:{
            sessionStorage.setItem("token",action.payload.token)
            sessionStorage.setItem("userName",action.payload.userName)
            return{
                ...state,
                isAuth:true,
                loading:false,
                error:false,
                token:action.payload.token,
                userName:action.payload.userName
            }
        }
        case LOGOUT_USER:{
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userName");
            return {
                ...state,
                isAuth:false,
                token:"",
            }
        }
default :{ return state;

}
    }

}

