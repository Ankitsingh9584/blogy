import { LOGIN_ERROR,LOGIN_SUCCESS,LOGIN_LOADING,LOGOUT_USER,GOOGLE_AUTH} from "./login.type";
const token=sessionStorage.getItem("token");
const userName=sessionStorage.getItem("userName");
const userId=sessionStorage.getItem("userId")
console.log("local",token)
const initialState={
isAuth:token!==null,
error:false,
loading:false,
token:token ? token:"",
userName:userName ?userName:"",
userId:userId ? userId :"",
}

export const loginReducer=(state=initialState,action)=>{

    switch(action.type){
        case LOGIN_LOADING:{
     return {
        ...state,
          loading:true,
          error:false,
          userId:""
     }

        }
        case LOGIN_SUCCESS:{
            sessionStorage.setItem("token",action.payload.token)
            sessionStorage.setItem("userName",action.payload.userName)
            sessionStorage.setItem("userId",action.payload.userId)
            return {
                ...state,
                isAuth:true,
                loading:false,
                error:false,
                token:action.payload.token,
                userName:action.payload.userName,
                userId:action.payload.userId,
            }
        }
        case LOGIN_ERROR:{
            return {
                ...state,
                error:true,
                loading:false,
                isAuth:false,
                userId:""
            }
        }
        case GOOGLE_AUTH:{
            sessionStorage.setItem("token",action.payload.token)
            sessionStorage.setItem("userName",action.payload.userName);
            sessionStorage.setItem("userId",action.payload.userId)
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
            sessionStorage.removeItem("userId");
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

