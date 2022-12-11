import { useActionData } from "react-router-dom";
import { GET_COMMENT_ERROR,GET_COMMENT_LOADING,GET_COMMENT_SUCCESS,
    POST_COMMENT_ERROR,POST_COMMENT_LOADING,POST_COMMENT_SUCCESS,
    DELETE_COMMENT_ERROR,DELETE_COMMENT_LOADING,DELETE_COMMENT_SUCCESS
    } from "./comment.types";
import axios from "axios";




export const postComment=(comment,blog_id,userName,userId,date)=>async(dispatch)=>{
//console.log("cooment.action.js",comment,blog_id,userName)
const commentDetails={comment:comment,blogId:blog_id,userName:userName,userId:userId,date:date}
dispatch({type:POST_COMMENT_LOADING});
try{
let response=await axios.post("http://localhost:8080/postcomment",commentDetails);
console.log(response.data);
dispatch({type:POST_COMMENT_SUCCESS,payload:response.data.data});

}
catch(e){
console.log(e.message);
dispatch({type:POST_COMMENT_ERROR})
}

}


export const getComment=(creds)=>async(dispatch)=>{
    dispatch({type:GET_COMMENT_LOADING});
    try{
        let response=await axios.post("http://localhost:8080/getcomment");
        console.log(response.data);
        dispatch({type:GET_COMMENT_SUCCESS,payload:response.data.data})
    }
    catch(e){
        dispatch({type:GET_COMMENT_ERROR})
    }
}

// delete comment

export const deleteComment=(creds)=>async(dispatch)=>{
    console.log("action.js.delet",creds)
    dispatch({type:DELETE_COMMENT_LOADING});
    try{
        let response=await axios.post("http://localhost:8080/deletecomment",{creds});
        console.log(response.data);
        dispatch({type:DELETE_COMMENT_SUCCESS,payload:response.data.data})
    }
    catch(e){
        dispatch({type:DELETE_COMMENT_ERROR})
    }
}
