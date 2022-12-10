
import { useSelector,useDispatch } from "react-redux"
import { Navigate } from "react-router-dom";
export const PrivateRoutes=({children})=>{

const isAuth=useSelector((store)=>store.login.isAuth);
if(!isAuth){
    return <Navigate to="/user/login"/>
}
else{ 
    return children;
   
}

}