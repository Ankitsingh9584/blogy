import axios from "axios";
import { POST_BLOG_SUCCESS,POST_BLOG_ERROR,POST_BLOG_LOADING,
    GET_BLOG_LOADING,GET_BLOG_SUCCESS,GET_BLOG_ERROR} from"./blog.types";
 
// post blogs action

    export const blogPost=(creds,token)=>async(dispatch)=>{
      // console.log(creds,token)
     
dispatch({type:POST_BLOG_LOADING});
try{
     
    axios.defaults.headers.common["authorization"]=`${token}`;
let response=await axios.post("https://blogbackend-1pps.onrender.com/blog/createblog",creds
);


//console.log(response.data)

if(response.data.msg==="ok"){
    console.log(response.data)
dispatch({type:POST_BLOG_SUCCESS,response});
}
else if(response.data.msg==="session expired"){
  
    console.log(response.data)
//  login session expired so we have to remove token and userName from session storage
sessionStorage.removeItem("token");
sessionStorage.removeItem("userName");
window.alert("Session expired please login again");
window.location.href="/user/login"

}
}
catch(e){
    dispatch({type:POST_BLOG_ERROR})

}

    }

    // get blogs action
    export const getBlogs=()=>async(dispatch)=>{
        
    
        dispatch({type:GET_BLOG_LOADING});
        try{
            let response=await axios.get("https://blogbackend-1pps.onrender.com/blog/getblogs");
            console.log(response.data)

dispatch({type:GET_BLOG_SUCCESS,payload:response.data})
        }
        catch{
dispatch({type:GET_BLOG_ERROR})
        }
    }